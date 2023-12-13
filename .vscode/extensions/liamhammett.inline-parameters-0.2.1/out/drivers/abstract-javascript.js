"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.getParameterName = void 0;
const recast = require("recast");
const vscode = require("vscode");
const utils_1 = require("../utils");
function getParameterName(editor, position, key, namedValue) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let isVariadic = false;
        let parameters;
        const description = yield vscode.commands.executeCommand('vscode.executeHoverProvider', editor.document.uri, position);
        const shouldHideRedundantAnnotations = vscode.workspace.getConfiguration('inline-parameters').get('hideRedundantAnnotations');
        if (description && description.length > 0) {
            try {
                const functionDefinitionRegex = /[^ ](?!^)\((.*)\)\:/gm;
                let definition = description[0].contents[0].value.match(functionDefinitionRegex);
                if (!definition || definition.length === 0) {
                    return reject();
                }
                definition = definition[0].slice(2, -2);
                const jsParameterNameRegex = /^[a-zA-Z_$]([0-9a-zA-Z_$]+)?/g;
                parameters = definition.split(',')
                    .map((parameter) => parameter.trim())
                    .map((parameter) => {
                    if (parameter.startsWith('...')) {
                        isVariadic = true;
                        parameter = parameter.slice(3);
                    }
                    const matches = parameter.match(jsParameterNameRegex);
                    if (matches && matches.length) {
                        return matches[0];
                    }
                    return parameter;
                });
            }
            catch (err) {
                console.error(err);
            }
        }
        if (!parameters) {
            return reject();
        }
        if (isVariadic && key >= parameters.length - 1) {
            let name = parameters[parameters.length - 1];
            if (shouldHideRedundantAnnotations && name === namedValue) {
                return reject();
            }
            name = utils_1.showVariadicNumbers(name, -parameters.length + 1 + key);
            return resolve(name);
        }
        if (parameters[key]) {
            let name = parameters[key];
            if (shouldHideRedundantAnnotations && name === namedValue) {
                return reject();
            }
            return resolve(name);
        }
        return reject();
    }));
}
exports.getParameterName = getParameterName;
function parse(code, options) {
    code = utils_1.removeShebang(code);
    let javascriptAst = '';
    let parameters = [];
    const editor = vscode.window.activeTextEditor;
    try {
        javascriptAst = recast.parse(code, options).program.body;
    }
    catch (err) {
        return parameters;
    }
    parameters = lookForFunctionCalls(editor, parameters, javascriptAst);
    return parameters;
}
exports.parse = parse;
function lookForFunctionCalls(editor, parameters, body) {
    let arr = [];
    function getNodes(astNode, nodeArr) {
        // Loop through all keys in the current node
        for (const key in astNode) {
            if (astNode.hasOwnProperty(key)) {
                const item = astNode[key];
                if (item === undefined || item === null) {
                    continue;
                }
                if (Array.isArray(item)) {
                    // If the current node is an array of nodes, loop through each
                    item.forEach((subItem) => nodeArr = getNodes(subItem, nodeArr));
                }
                else if (item.loc !== undefined) {
                    // If is a proper node and has a location in the source, push it into the array and recurse on that for nodes inside this node
                    nodeArr.push(item);
                    nodeArr = getNodes(item, nodeArr);
                }
            }
        }
        return nodeArr;
    }
    arr = getNodes(body, arr);
    const nodes = arr.filter((node) => node.type === "CallExpression" || node.type === "NewExpression");
    const calls = [];
    nodes.forEach((node) => {
        if (node.type === "NewExpression") {
            calls.push(node, ...node.arguments);
        }
        else {
            calls.push(node);
        }
    });
    for (const call of calls) {
        if (call.callee && call.callee.loc) {
            if (call.arguments) {
                const hideSingleParameters = vscode.workspace.getConfiguration('inline-parameters').get('hideSingleParameters');
                if (hideSingleParameters && call.arguments.length === 1) {
                    continue;
                }
                const expression = getExpressionLoc(call);
                call.arguments.forEach((argument, key) => {
                    parameters.push(parseParam(argument, key, expression, editor));
                });
            }
        }
    }
    return parameters;
}
function parseParam(argument, key, expression, editor) {
    var _a;
    const parameter = {
        namedValue: (_a = argument.name) !== null && _a !== void 0 ? _a : null,
        expression: {
            line: expression.start.line,
            character: expression.start.column,
        },
        key: key,
        start: {
            line: argument.loc.start.line - 1,
            character: argument.loc.start.column,
        },
        end: {
            line: argument.loc.end.line - 1,
            character: argument.loc.end.column,
        },
    };
    // TSTypeAssertions are off by one for some reason so subtract the column by one.
    if (argument.type === "TSTypeAssertion") {
        parameter.start.character -= 1;
    }
    const line = editor.document.lineAt(parameter.start.line);
    const offset = editor.options.insertSpaces ? 0 : line.firstNonWhitespaceCharacterIndex * 3;
    parameter.expression.character -= offset;
    parameter.start.character -= offset;
    parameter.end.character -= offset;
    return parameter;
}
function getExpressionLoc(call) {
    if (call.callee.type === "MemberExpression" && call.callee.property.loc) {
        const { start, end } = call.callee.property.loc;
        return {
            start: {
                line: start.line - 1,
                column: start.column
            },
            end: {
                line: end.line - 1,
                column: end.column
            }
        };
    }
    if (call.callee.type === "CallExpression") {
        const { start, end } = call.callee.arguments[0].loc;
        return {
            start: {
                line: start.line - 1,
                column: start.column
            },
            end: {
                line: end.line - 1,
                column: end.column
            }
        };
    }
    const { start, end } = call.callee.loc;
    return {
        start: {
            line: start.line - 1,
            column: start.column
        },
        end: {
            line: end.line - 1,
            column: end.column
        }
    };
}
//# sourceMappingURL=abstract-javascript.js.map