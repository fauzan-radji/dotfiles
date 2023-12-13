"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class Annotations {
    static paramAnnotation(message, range) {
        return {
            range,
            renderOptions: {
                before: {
                    color: new vscode_1.ThemeColor("jsannotations.annotationForeground"),
                    contentText: message,
                    fontStyle: vscode_1.workspace.getConfiguration("jsannotations").get("fontStyle"),
                    fontWeight: vscode_1.workspace.getConfiguration("jsannotations").get("fontWeight"),
                }
            }
        };
    }
    static errorParamAnnotation(range) {
        return {
            range,
            renderOptions: {
                before: {
                    color: "red",
                    contentText: "❗️ Invalid parameter: ",
                    fontWeight: "800"
                }
            }
        };
    }
}
exports.Annotations = Annotations;
//# sourceMappingURL=annotationProvider.js.map