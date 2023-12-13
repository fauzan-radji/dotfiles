"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorator = void 0;
const vscode_1 = require("vscode");
const decorations_1 = require("./decorations");
const configuration_1 = require("./configuration");
const Config = require("./configuration");
class Decorator {
    constructor() {
        this.autoFold = false;
        this.unfoldIfLineSelected = false;
        this.supportedLanguages = [];
        this.regEx = /(class|className)=(['"`]|{(['"`]))(.*?)(\2|\3})/g;
        this.regExGroup = 0;
        this.unfoldedDecorationType = (0, decorations_1.UnfoldedDecorationType)();
        this.foldedDecorationType = (0, decorations_1.FoldedDecorationType)();
        this.foldedRanges = [];
        this.unfoldedRanges = [];
    }
    setActiveEditor(textEditor) {
        if (!textEditor) {
            return;
        }
        this.activeEditor = textEditor;
        this.updateDecorations();
    }
    toggleAutoFold() {
        this.autoFold = !this.autoFold;
        this.updateDecorations();
        Config.set(configuration_1.Settings.AutoFold, this.autoFold);
        return this.autoFold;
    }
    loadConfig() {
        this.autoFold = Config.get(configuration_1.Settings.AutoFold) ?? false;
        this.unfoldIfLineSelected = Config.get(configuration_1.Settings.UnfoldIfLineSelected) ?? false;
        this.supportedLanguages = Config.get(configuration_1.Settings.SupportedLanguages) ?? [];
        this.regExGroup = Config.get(configuration_1.Settings.FoldStyle) === "ALL" ? 0 : 4;
        this.unfoldedDecorationType.dispose();
        this.foldedDecorationType.dispose();
        this.unfoldedDecorationType = (0, decorations_1.UnfoldedDecorationType)();
        this.foldedDecorationType = (0, decorations_1.FoldedDecorationType)();
        this.updateDecorations();
    }
    updateDecorations() {
        if (!this.activeEditor) {
            return;
        }
        if (!this.supportedLanguages.includes(this.activeEditor.document.languageId)) {
            return;
        }
        const documentText = this.activeEditor.document.getText();
        this.foldedRanges = [];
        this.unfoldedRanges = [];
        let match;
        while ((match = this.regEx.exec(documentText))) {
            if (match && !match[this.regExGroup]) {
                continue;
            }
            const text = match[0];
            const textToFold = match[this.regExGroup];
            const classNames = match[4].split(" ");
            const foldStartIndex = text.indexOf(textToFold);
            const foldStartPosition = this.activeEditor.document.positionAt(match.index + foldStartIndex);
            const foldEndPosition = this.activeEditor.document.positionAt(match.index + foldStartIndex + textToFold.length);
            const range = new vscode_1.Range(foldStartPosition, foldEndPosition);
            const foldLengthThreshold = Config.get(configuration_1.Settings.FoldLengthThreshold) ?? 0;
            if (!this.autoFold ||
                this.isRangeSelected(range) ||
                (this.unfoldIfLineSelected && this.isLineOfRangeSelected(range))) {
                this.unfoldedRanges.push(range);
                continue;
            }
            if (classNames.length < foldLengthThreshold) {
                // If the length of class attributes is less than the threshold, skip folding
                this.unfoldedRanges.push(range);
                continue;
            }
            this.foldedRanges.push(range);
        }
        this.activeEditor.setDecorations(this.unfoldedDecorationType, this.unfoldedRanges);
        this.activeEditor.setDecorations(this.foldedDecorationType, this.foldedRanges);
    }
    isRangeSelected(range) {
        return !!(this.activeEditor.selection.contains(range) || this.activeEditor.selections.find((s) => range.contains(s)));
    }
    isLineOfRangeSelected(range) {
        return !!this.activeEditor.selections.find((s) => s.start.line === range.start.line);
    }
}
exports.Decorator = Decorator;
//# sourceMappingURL=decorator.js.map