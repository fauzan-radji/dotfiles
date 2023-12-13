"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Commands {
    static registerCommands() {
        // Command to hide / show annotations
        vscode.commands.registerCommand("jsannotations.toggle", () => {
            const currentState = vscode.workspace.getConfiguration("jsannotations").get("enabled");
            vscode.workspace.getConfiguration("jsannotations").update("enabled", !currentState, true);
        });
    }
}
exports.default = Commands;
//# sourceMappingURL=commands.js.map