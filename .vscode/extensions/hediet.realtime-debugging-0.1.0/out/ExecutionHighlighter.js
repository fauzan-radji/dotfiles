"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class ExecutionHighlighter {
    constructor() {
        this.highlighter = new Highlighter();
    }
    highlight(uri, line) {
        for (const editor of vscode_1.window.visibleTextEditors) {
            if (editor.document.uri.toString() !== uri.toString()) {
                continue;
            }
            const range = editor.document.lineAt(line).range;
            this.highlighter.highlight(editor, range);
        }
    }
}
exports.ExecutionHighlighter = ExecutionHighlighter;
class Highlighter {
    highlight(editor, range) {
        if (this.lastHighlight) {
            this.lastHighlight.deprecate();
        }
        this.lastHighlight = new Highlight(editor, range, () => { });
    }
}
exports.Highlighter = Highlighter;
class Highlight {
    constructor(textEditor, range, onHide) {
        this.textEditor = textEditor;
        this.range = range;
        this.type = vscode_1.window.createTextEditorDecorationType({
            backgroundColor: "orange",
        });
        textEditor.setDecorations(this.type, [range]);
        setTimeout(() => {
            this.dispose();
            onHide();
        }, 1000);
    }
    deprecate() {
        if (this.type) {
            this.type.dispose();
            this.type = vscode_1.window.createTextEditorDecorationType({
                backgroundColor: "yellow",
            });
            this.textEditor.setDecorations(this.type, [this.range]);
        }
    }
    dispose() {
        if (this.type) {
            this.type.dispose();
        }
        this.type = undefined;
    }
}
//# sourceMappingURL=ExecutionHighlighter.js.map