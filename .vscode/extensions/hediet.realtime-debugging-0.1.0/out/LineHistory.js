"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disposable_1 = require("@hediet/std/disposable");
const vscode_1 = require("vscode");
class LogResultDecorator {
    constructor() {
        this.dispose = disposable_1.Disposable.fn();
        this.map = new Map();
        this.decorationType = this.dispose.track(vscode_1.window.createTextEditorDecorationType({
            after: {
                color: "gray",
                margin: "20px",
            },
        }));
        this.dispose.track(vscode_1.workspace.onDidChangeTextDocument((evt) => {
            this.map.delete(evt.document.uri.toString());
            this.updateDecorations();
        }));
    }
    log(uri, line, output) {
        let entry = this.map.get(uri.toString());
        if (!entry) {
            entry = { uri, lines: new Map() };
            this.map.set(uri.toString(), entry);
        }
        let history = entry.lines.get(line);
        if (!history) {
            history = new LineHistory(uri, line);
            entry.lines.set(line, history);
        }
        history.history.unshift(output);
        this.updateDecorations();
    }
    clear() {
        this.map.clear();
        this.updateDecorations();
    }
    updateDecorations() {
        for (const editor of vscode_1.window.visibleTextEditors) {
            const entry = this.map.get(editor.document.uri.toString());
            if (!entry) {
                editor.setDecorations(this.decorationType, []);
                continue;
            }
            editor.setDecorations(this.decorationType, [...entry.lines.values()].map((history) => {
                const range = editor.document.lineAt(history.line).range;
                const hoverMessage = new vscode_1.MarkdownString();
                hoverMessage.isTrusted = true;
                for (const h of history.history.slice().reverse()) {
                    hoverMessage.appendMarkdown(`* ${h}`);
                }
                /*const params = encodeURIComponent(
                    JSON.stringify({ stepId: o.id } as RunCmdIdArgs)
                );*/
                /*hoverMessage.appendMarkdown(
                    `* [Run Step '${o.id}'](command:${runCmdId}?${params})`
                );*/
                return {
                    range,
                    renderOptions: {
                        after: {
                            contentText: history.history[0],
                        },
                    },
                    hoverMessage,
                };
            }));
        }
    }
}
exports.LogResultDecorator = LogResultDecorator;
class LineHistory {
    constructor(uri, line) {
        this.uri = uri;
        this.line = line;
        this.history = [];
    }
}
//# sourceMappingURL=LineHistory.js.map