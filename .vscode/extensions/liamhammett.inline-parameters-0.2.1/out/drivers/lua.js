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
const vscode = require("vscode");
const utils_1 = require("../utils");
const parser = require('luaparse');
function getParameterName(editor, position, key, namedValue) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let definition = '';
        let definitions;
        const description = yield vscode.commands.executeCommand('vscode.executeHoverProvider', editor.document.uri, position);
        const shouldHideRedundantAnnotations = vscode.workspace.getConfiguration('inline-parameters').get('hideRedundantAnnotations');
        const luaParameterNameRegex = /^[a-zA-Z_]([0-9a-zA-Z_]+)?/g;
        if (description && description.length > 0) {
            try {
                const regEx = /^function\ .*\((.*)\)/gm;
                definitions = description[0].contents[0].value.match(regEx);
                if (!definitions || !definitions[0]) {
                    return reject();
                }
                definition = definitions[0];
            }
            catch (err) {
                console.error(err);
            }
        }
        const parameters = definition
            .substring(definition.indexOf('(') + 1, definition.lastIndexOf(')'))
            .replace(/\[/g, '').replace(/\]/g, '')
            .split(',')
            .map(parameter => parameter.trim())
            .map(parameter => {
            const matches = parameter.match(luaParameterNameRegex);
            if (!matches || !matches[0]) {
                return null;
            }
            return matches[0];
        })
            .filter(parameter => parameter);
        if (!parameters || !parameters[key]) {
            return reject();
        }
        let name = parameters[key];
        if (shouldHideRedundantAnnotations && name === namedValue) {
            return reject();
        }
        return resolve(name);
    }));
}
exports.getParameterName = getParameterName;
function parse(code) {
    code = utils_1.removeShebang(code);
    const ast = parser.parse(code, {
        comments: false,
        locations: true,
    });
    const functionCalls = crawlAst(ast);
    let parameters = [];
    functionCalls.forEach((expression) => {
        parameters = getParametersFromExpression(expression, parameters);
    });
    return parameters;
}
exports.parse = parse;
function crawlAst(ast, functionCalls = []) {
    const canAcceptArguments = ast.type && ast.type === 'CallExpression';
    const hasArguments = ast.arguments && ast.arguments.length > 0;
    const shouldHideArgumentNames = vscode.workspace.getConfiguration('inline-parameters').get('hideSingleParameters') && ast.arguments && ast.arguments.length === 1;
    if (canAcceptArguments && hasArguments && !shouldHideArgumentNames) {
        functionCalls.push(ast);
    }
    for (const [key, value] of Object.entries(ast)) {
        if (key === 'comments') {
            continue;
        }
        if (value instanceof Object) {
            functionCalls = crawlAst(value, functionCalls);
        }
    }
    return functionCalls;
}
function getParametersFromExpression(expression, parameters = []) {
    if (!expression.arguments) {
        return parameters;
    }
    expression.arguments.forEach((argument, key) => {
        var _a;
        parameters.push({
            namedValue: (_a = argument.name) !== null && _a !== void 0 ? _a : null,
            expression: {
                line: parseInt(expression.base.identifier.loc.start.line) - 1,
                character: parseInt(expression.base.identifier.loc.start.column),
            },
            key: key,
            start: {
                line: parseInt(argument.loc.start.line) - 1,
                character: parseInt(argument.loc.start.column),
            },
            end: {
                line: parseInt(argument.loc.end.line) - 1,
                character: parseInt(argument.loc.end.column),
            },
        });
    });
    return parameters;
}
//# sourceMappingURL=lua.js.map