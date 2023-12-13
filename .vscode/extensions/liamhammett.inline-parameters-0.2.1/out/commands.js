"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class Commands {
    static registerCommands() {
        vscode.commands.registerCommand('inline-parameters.toggle', () => {
            const currentState = vscode.workspace.getConfiguration('inline-parameters').get('enabled');
            vscode.workspace.getConfiguration('inline-parameters').update('enabled', !currentState, true);
        });
    }
}
exports.default = Commands;
//# sourceMappingURL=commands.js.map