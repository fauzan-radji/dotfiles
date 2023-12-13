var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function updateDecorations(activeEditor, drivers) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!activeEditor) {
            console.log('There is no active editor');
            return;
        }
        if (!(activeEditor.document.languageId in drivers)) {
            console.log('Language not supported');
            return;
        }
        const driver = drivers[activeEditor.document.languageId];
        console.log(`Rendering ${activeEditor.document.languageId}`);
        const isEnabled = vscode.workspace.getConfiguration('vscode-inline-parameters').get('enabled');
        if (!isEnabled) {
            activeEditor.setDecorations(hintDecorationType, []);
            return;
        }
        const text = activeEditor.document.getText();
        let languageParameters = [];
        try {
            languageParameters = driver.parse(text);
        }
        catch (err) { }
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
                parameterName = yield driver.getAttrName(activeEditor, new vscode.Position(parameter.expression.line, parameter.expression.character), parameter.key);
            }
            catch (err) {
                // ...
            }
            if (parameterName) {
                const leadingCharacters = vscode.workspace.getConfiguration('vscode-inline-parameters').get('leadingCharacters');
                const trailingCharacters = vscode.workspace.getConfiguration('vscode-inline-parameters').get('trailingCharacters');
                const decorationPHP = Annotations.paramAnnotation(leadingCharacters + parameterName + trailingCharacters, 
                // parameterName.replace('$', '  ') + ':  ',
                new vscode.Range(start, end));
                languageFunctions.push(decorationPHP);
            }
        }
        activeEditor.setDecorations(hintDecorationType, languageFunctions);
    });
}
//# sourceMappingURL=decoraor.js.map