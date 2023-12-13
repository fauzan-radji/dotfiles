"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotations = void 0;
const vscode_1 = require("vscode");
class Annotations {
    static parameterAnnotation(message, range) {
        return {
            range,
            renderOptions: {
                before: {
                    contentText: message,
                    color: new vscode_1.ThemeColor("inlineparameters.annotationForeground"),
                    backgroundColor: new vscode_1.ThemeColor("inlineparameters.annotationBackground"),
                    fontStyle: vscode_1.workspace.getConfiguration("inline-parameters").get("fontStyle"),
                    fontWeight: vscode_1.workspace.getConfiguration("inline-parameters").get("fontWeight"),
                    textDecoration: `;
                        font-size: ${vscode_1.workspace.getConfiguration("inline-parameters").get("fontSize")};
                        margin: ${vscode_1.workspace.getConfiguration("inline-parameters").get("margin")};
                        padding: ${vscode_1.workspace.getConfiguration("inline-parameters").get("padding")};
                        border-radius: ${vscode_1.workspace.getConfiguration("inline-parameters").get("borderRadius")};
                        border: ${vscode_1.workspace.getConfiguration("inline-parameters").get("border")};
                        vertical-align: middle;
                    `,
                },
            },
        };
    }
}
exports.Annotations = Annotations;
//# sourceMappingURL=annotationProvider.js.map