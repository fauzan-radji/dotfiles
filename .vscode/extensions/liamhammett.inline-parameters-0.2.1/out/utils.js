"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showVariadicNumbers = exports.removeShebang = void 0;
const vscode = require("vscode");
function removeShebang(sourceCode) {
    const sourceCodeArr = sourceCode.split("\n");
    if (sourceCodeArr[0].substr(0, 2) === "#!") {
        sourceCodeArr[0] = "";
    }
    return sourceCodeArr.join("\n");
}
exports.removeShebang = removeShebang;
function showVariadicNumbers(str, number) {
    const showVariadicNumbers = vscode.workspace.getConfiguration('inline-parameters').get('showVariadicNumbers');
    if (showVariadicNumbers) {
        return `${str}[${number}]`;
    }
    return str;
}
exports.showVariadicNumbers = showVariadicNumbers;
//# sourceMappingURL=utils.js.map