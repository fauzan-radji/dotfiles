"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const node_reload_1 = require("@hediet/node-reload");
const disposable_1 = require("@hediet/std/disposable");
if (process.env.HOT_RELOAD) {
    node_reload_1.enableHotReload({ entryModule: module, loggingEnabled: true });
}
node_reload_1.registerUpdateReconciler(module);
const ExecutionHighlighter_1 = require("./ExecutionHighlighter");
const LineHistory_1 = require("./LineHistory");
class Extension {
    constructor() {
        this.dispose = disposable_1.Disposable.fn();
        this.log = this.dispose.track(vscode.window.createOutputChannel("debug log"));
        this.executionHightlighter = new ExecutionHighlighter_1.ExecutionHighlighter();
        this.logResultDecorator = this.dispose.track(new LineHistory_1.LogResultDecorator());
        if (node_reload_1.getReloadCount(module) > 0) {
            const i = this.dispose.track(vscode.window.createStatusBarItem());
            i.text = "reload" + node_reload_1.getReloadCount(module);
            i.show();
        }
        this.dispose.track(vscode.debug.registerDebugAdapterTrackerFactory("*", {
            createDebugAdapterTracker: (session) => ({
                onWillStartSession: () => {
                    this.logResultDecorator.clear();
                    if (this.log) {
                        this.log.clear();
                    }
                },
                onDidSendMessage: (message) => {
                    if (message.event === "output" &&
                        "body" in message &&
                        message.body.category === "stdout") {
                        const body = message.body;
                        const output = body.output;
                        const source = body.source;
                        const path = source.path;
                        const line = body.line - 1;
                        const pathUri = vscode.Uri.file(path);
                        this.executionHightlighter.highlight(pathUri, line);
                        this.logResultDecorator.log(pathUri, line, output);
                    }
                    if (this.log) {
                        this.log.appendLine("-> " + JSON.stringify(message));
                    }
                },
                onWillReceiveMessage: (message) => {
                    if (this.log) {
                        this.log.appendLine("<- " + JSON.stringify(message));
                    }
                },
            }),
        }));
    }
}
exports.Extension = Extension;
function activate(context) {
    context.subscriptions.push(node_reload_1.hotRequireExportedFn(module, Extension, (Extension) => new Extension()));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map