"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function grabPossibleParameters(fc, definitionLine) {
    let paramList = [];
    // Grab any params inside the definition line
    const defintionParam = grabDefLineParams(definitionLine);
    if (defintionParam !== "") {
        if (fc.functionRange === undefined) {
            return;
        }
        paramList = splitToParamList(defintionParam);
        paramList = paramList.map((param) => {
            param = param.replace(/\.\.\.\s+/, "...");
            // Extract identifiers
            const words = param.trim().split(" ");
            // If there are multiple words and the first word doesn't end with a colon, use the 2nd word as the param
            // this will make sure the param name is used and not the access modifier in TS functions
            if (words.length > 1 && !words[0].endsWith(":")) {
                param = words[1];
            }
            const identifiers = param.match(/([\.a-zA-Z0-9]+):?/);
            if (identifiers && identifiers.length > 1) {
                return identifiers[1];
            }
            return "";
        }).filter((param) => param !== "");
    }
    return paramList;
}
exports.grabPossibleParameters = grabPossibleParameters;
// This function will cycle through all of the current strings split by a comma, and combine strings that were split incorrectly
function splitToParamList(defintionParam) {
    const paramList = defintionParam.split(/\s*,\s*/);
    const newParamList = [];
    let currentStr = "";
    let numToGet = 1; // Always grab 1 string at the beginning
    for (const item of paramList) {
        currentStr += item + ", ";
        numToGet--;
        // If numToGet is zero, check the difference between '<' and '>' characters
        if (numToGet === 0) {
            const numOfLessThanBrackets = currentStr.split("<").length - 1;
            const numOfGreaterThanBrackets = currentStr.split(">").length - 1;
            const numOfOpenParen = currentStr.split("(").length - 1;
            const numOfCloseParen = currentStr.split(")").length - 1;
            const numOfEqualSigns = currentStr.split("=").length - 1;
            // Diff is |num of left brackets ('<') minus the num of solo right brackets (which is the number of '>' minus the num of '=' signs)|
            const triBracketDiff = Math.abs(numOfLessThanBrackets - (numOfGreaterThanBrackets - numOfEqualSigns));
            const parenDiff = Math.abs(numOfOpenParen - numOfCloseParen);
            if (((numOfEqualSigns > 0) && (numOfGreaterThanBrackets - numOfEqualSigns) === numOfLessThanBrackets) || (triBracketDiff === 0 && parenDiff === 0)) {
                // If the difference is zero, we have a full param, push it to the new params, and start over at the next string
                // Also, do this if there is equal signs in the params which exist with arrow functions.
                currentStr = currentStr.substr(0, currentStr.length - 2);
                newParamList.push(currentStr);
                currentStr = "";
                numToGet = 1;
            }
            else {
                // Otherwise, set the number of strings to grab to the diff
                numToGet = triBracketDiff + parenDiff;
            }
        }
    }
    return newParamList;
}
exports.splitToParamList = splitToParamList;
function grabDefLineParams(definitionLine) {
    let startIdx;
    let endIdx;
    startIdx = definitionLine.indexOf("(");
    if (startIdx === -1) {
        if (definitionLine.includes("=>")) {
            return /=?\s*(\w+)\s*=>/.exec(definitionLine)[1] || "";
        }
        else {
            return "";
        }
    }
    else {
        startIdx++;
    }
    let depth = 1;
    for (let i = startIdx; i < definitionLine.length; i++) {
        if (definitionLine[i] === "(") {
            depth++;
        }
        else if (definitionLine[i] === ")") {
            depth--;
            if (depth === 0) {
                endIdx = i;
                break;
            }
        }
    }
    if (endIdx === undefined) {
        return "";
    }
    return definitionLine.substring(startIdx, endIdx);
}
//# sourceMappingURL=paramExtractor.js.map