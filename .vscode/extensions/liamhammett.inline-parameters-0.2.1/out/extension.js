"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const phpDriver = require("./drivers/php");
const luaDriver = require("./drivers/lua");
const javascriptDriver = require("./drivers/javascript");
const javascriptReactDriver = require("./drivers/javascriptreact");
const typescriptDriver = require("./drivers/typescript");
const typescriptReactDriver = require("./drivers/typescriptreact");
const annotationProvider_1 = require("./annotationProvider");
const commands_1 = require("./commands");
const hintDecorationType = vscode.window.createTextEditorDecorationType({});
function updateDecorations(activeEditor, languageDrivers) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!activeEditor) {
            return;
        }
        if (!(activeEditor.document.languageId in languageDrivers)) {
            return;
        }
        const driver = languageDrivers[activeEditor.document.languageId];
        const isEnabled = vscode.workspace.getConfiguration('inline-parameters').get('enabled');
        if (!isEnabled) {
            activeEditor.setDecorations(hintDecorationType, []);
            return;
        }
        const code = activeEditor.document.getText();
        let languageParameters = [];
        try {
            languageParameters = driver.parse(code);
        }
        catch (err) {
            // Error parsing language's AST, likely a syntax error on the user's side
        }
        if (languageParameters.length === 0) {
            return;
        }
        const languageFunctions = [];
        for (let index = 0; index < languageParameters.length; index++) {
            var parameter = languageParameters[index];
            const start = new vscode.Position(parameter.start.line, parameter.start.character);
            const end = new vscode.Position(parameter.end.line, parameter.end.character);
            let parameterName;
            try {
                parameterName = yield driver.getParameterName(activeEditor, new vscode.Position(parameter.expression.line, parameter.expression.character), parameter.key, parameter.namedValue);
            }
            catch (err) {
                // Error getting a parameter name, just ignore it
            }
            if (!parameterName) {
                continue;
            }
            const leadingCharacters = vscode.workspace.getConfiguration('inline-parameters').get('leadingCharacters');
            const trailingCharacters = vscode.workspace.getConfiguration('inline-parameters').get('trailingCharacters');
            const parameterCase = vscode.workspace.getConfiguration('inline-parameters').get('parameterCase');
            if (parameterCase === 'uppercase') {
                parameterName = parameterName.toUpperCase();
            }
            if (parameterCase === 'lowercase') {
                parameterName = parameterName.toLowerCase();
            }
            const annotation = annotationProvider_1.Annotations.parameterAnnotation(leadingCharacters + parameterName + trailingCharacters, new vscode.Range(start, end));
            languageFunctions.push(annotation);
        }
        activeEditor.setDecorations(hintDecorationType, languageFunctions);
    });
}
function activate(context) {
    const languageDrivers = {
        php: phpDriver,
        lua: luaDriver,
        javascript: javascriptDriver,
        javascriptreact: javascriptReactDriver,
        typescript: typescriptDriver,
        typescriptreact: typescriptReactDriver,
    };
    let timeout = undefined;
    let activeEditor = vscode.window.activeTextEditor;
    commands_1.default.registerCommands();
    function triggerUpdateDecorations(timer = true) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(() => updateDecorations(activeEditor, languageDrivers), timer ? 2500 : 25);
    }
    vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('inline-parameters')) {
            triggerUpdateDecorations(false);
        }
    });
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        activeEditor = editor;
        if (editor) {
            triggerUpdateDecorations(false);
        }
    }, null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument((event) => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdateDecorations(false);
        }
    }, null, context.subscriptions);
    if (activeEditor) {
        triggerUpdateDecorations();
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map