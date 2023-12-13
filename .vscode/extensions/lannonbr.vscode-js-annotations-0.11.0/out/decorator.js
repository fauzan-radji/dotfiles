"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const annotationProvider_1 = require("./annotationProvider");
const paramExtractor_1 = require("./paramExtractor");
function decorateFunctionCall(currentEditor, documentCache, decArray, errDecArray, fc, diagnostics) {
    return __awaiter(this, arguments, void 0, function* () {
        // Check for existence of functionCallObject and a defintion location
        if (fc === undefined || fc.definitionLocation === undefined) {
            return;
        }
        // configs for decorations
        const hideIfEqual = vscode.workspace.getConfiguration("jsannotations").get("hideIfEqual");
        const willShowDiagnostics = vscode.workspace.getConfiguration("jsannotations").get("hideDiagnostics") === false;
        const willShowErrorAnnotation = vscode.workspace.getConfiguration("jsannotations").get("hideInvalidAnnotation") === false;
        const document = yield loadDefinitionDocument(fc.definitionLocation.uri, documentCache);
        const definitionLine = document.lineAt(fc.definitionLocation.range.start.line).text;
        let paramList = paramExtractor_1.grabPossibleParameters(fc, definitionLine);
        // Remove first parameter from list if it equals `this` in a TS file
        if (currentEditor.document.languageId === "typescript" && paramList[0] === "this") {
            paramList = paramList.slice(1);
        }
        if (paramList.length > 0) {
            const functionCallLine = currentEditor.document.lineAt(fc.lineNumber).text;
            if (shouldntBeDecorated(paramList, fc, functionCallLine, definitionLine)) {
                return;
            }
            // Look to see if a param is a rest parameter (ex: console.log has a rest parameter called ...optionalParams)
            const restParamIdx = paramList.findIndex((item) => item.substr(0, 3) === "...");
            // If it exists, remove the triple dots at the beginning
            if (restParamIdx !== -1) {
                paramList[restParamIdx] = paramList[restParamIdx].slice(3);
            }
            if (fc.paramLocations && fc.paramNames) {
                let counter = 0;
                for (const ix in fc.paramLocations) {
                    if (fc.paramLocations.hasOwnProperty(ix)) {
                        const idx = parseInt(ix, 10);
                        // skip when arg and param match and hideIfEqual config is on
                        if (hideIfEqual && fc.paramNames[idx] === paramList[idx]) {
                            counter++; // Still tick the counter even if skipping the annotation
                            continue;
                        }
                        let decoration;
                        const currentArgRange = fc.paramLocations[idx];
                        if (restParamIdx !== -1 && idx >= restParamIdx) {
                            decoration = annotationProvider_1.Annotations.paramAnnotation(paramList[restParamIdx] + `[${idx - restParamIdx}]: `, currentArgRange);
                        }
                        else {
                            if (idx >= paramList.length) {
                                if (currentEditor.document.languageId === "javascript" && willShowDiagnostics) {
                                    const diag = new vscode.Diagnostic(currentArgRange, "[JS Param Annotations] Invalid parameter", vscode.DiagnosticSeverity.Error);
                                    if (!diagnostics) {
                                        console.log(arguments);
                                    }
                                    // If the diagnostic does not exist in the array yet, push it
                                    if (!diagnostics.some((diagnostic) => JSON.stringify(diagnostic) === JSON.stringify(diag))) {
                                        diagnostics.push(diag);
                                    }
                                }
                                if (willShowErrorAnnotation) {
                                    const errorDecoration = annotationProvider_1.Annotations.errorParamAnnotation(currentArgRange);
                                    errDecArray.push(errorDecoration);
                                }
                                continue;
                            }
                            const showFirstSpace = vscode.workspace.getConfiguration("jsannotations").get("showFirstSpace");
                            const spacer = (counter === 0 && showFirstSpace) ? " " : "";
                            decoration = annotationProvider_1.Annotations.paramAnnotation(spacer + paramList[idx] + ": ", currentArgRange);
                        }
                        counter++;
                        decArray.push(decoration);
                    }
                }
            }
        }
    });
}
exports.decorateFunctionCall = decorateFunctionCall;
function loadDefinitionDocument(uri, documentCache) {
    return __awaiter(this, void 0, void 0, function* () {
        let document;
        // Currently index documentCache by the filename (TODO: Figure out better index later)
        const pathNameArr = uri.fsPath.split("/");
        const pathName = pathNameArr[pathNameArr.length - 2] + "/" + pathNameArr[pathNameArr.length - 1];
        // If the document is not present in the cache, load it from the filesystem, otherwise grab from the cache
        if (documentCache[pathName] === undefined) {
            document = yield vscode.workspace.openTextDocument(uri);
            documentCache[pathName] = document;
        }
        else {
            document = documentCache[pathName];
        }
        return document;
    });
}
function shouldntBeDecorated(paramList, functionCall, functionCallLine, definitionLine) {
    // If the functionName is one of the parameters, don't decorate it
    if (paramList.some((param) => param === functionCall.functionName)) {
        return true;
    }
    // If the line that is extracted is a function definition rather than call, continue on without doing anything
    if (functionCallLine.includes("function ")) {
        return true;
    }
    // Don't decorate if the definition is inside a for loop
    if (definitionLine.includes("for (") || definitionLine.includes("for (")) {
        return true;
    }
    return false;
}
//# sourceMappingURL=decorator.js.map