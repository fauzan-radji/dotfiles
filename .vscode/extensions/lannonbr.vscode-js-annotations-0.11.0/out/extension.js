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
const commands_1 = require("./commands");
const decorator = require("./decorator");
const parser = require("./parser");
const decType = vscode.window.createTextEditorDecorationType({});
const errDecType = vscode.window.createTextEditorDecorationType({
    fontWeight: "800"
});
let diagCollection;
let diagnostics;
let timeoutId;
function activate(ctx) {
    console.log("extension is now active!");
    // Update when a file opens
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        run(ctx, editor);
    });
    // Update when a file saves
    vscode.workspace.onWillSaveTextDocument((event) => {
        const openEditor = vscode.window.visibleTextEditors.filter((editor) => editor.document.uri === event.document.uri)[0];
        run(ctx, openEditor);
    });
    vscode.workspace.onDidChangeTextDocument((event) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            const openEditor = vscode.window.visibleTextEditors.filter((editor) => editor.document.uri === event.document.uri)[0];
            run(ctx, openEditor);
        }, 100);
    });
    // Update if the config was changed
    vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration("jsannotations")) {
            run(ctx, vscode.window.activeTextEditor);
        }
    });
    commands_1.default.registerCommands();
}
exports.activate = activate;
function deactivate() {
    console.log("DONE");
}
exports.deactivate = deactivate;
function run(ctx, editor) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!editor) {
            return;
        }
        const supportedLanguages = ["javascript", "typescript", "javascriptreact", "typescriptreact"];
        if (supportedLanguages.indexOf(editor.document.languageId) === -1) {
            return;
        }
        // Setup variables for diagnostics when loading JS file
        if (diagCollection === undefined && editor.document.languageId === "javascript") {
            diagCollection = vscode.languages.createDiagnosticCollection("js-annot");
        }
        const isEnabled = vscode.workspace.getConfiguration("jsannotations").get("enabled");
        if (!isEnabled) {
            editor.setDecorations(decType, []);
            return;
        }
        // Get all of the text in said editor
        const sourceCode = editor.document.getText();
        const [decArray, errDecArray] = yield createDecorations(editor, sourceCode);
        if (editor.document.languageId === "javascript") {
            diagCollection.set(editor.document.uri, diagnostics);
            ctx.subscriptions.push(diagCollection);
        }
        editor.setDecorations(decType, decArray);
        editor.setDecorations(errDecType, errDecArray);
    });
}
function createDecorations(editor, sourceCode) {
    return __awaiter(this, void 0, void 0, function* () {
        diagnostics = [];
        const decArray = [];
        const errDecArray = [];
        // get an array of all said function calls in the file
        let fcArray = parser.getFunctionCalls(sourceCode, editor);
        // grab the definitions for any of the function calls which can find a definition
        fcArray = yield parser.getDefinitions(fcArray, editor.document.uri);
        // cache for documents so they aren't loaded for every single call
        const documentCache = {};
        // filter down to function calls which actually have a definition
        const callsWithDefinitions = fcArray.filter((item) => item.definitionLocation !== undefined);
        for (const fc of callsWithDefinitions) {
            yield decorator.decorateFunctionCall(editor, documentCache, decArray, errDecArray, fc, diagnostics);
        }
        return [decArray, errDecArray];
    });
}
exports.createDecorations = createDecorations;
function getDiagnostics() {
    if (!diagnostics) {
        return [];
    }
    // Returns a copy
    return diagnostics.slice();
}
exports.getDiagnostics = getDiagnostics;
//# sourceMappingURL=extension.js.map