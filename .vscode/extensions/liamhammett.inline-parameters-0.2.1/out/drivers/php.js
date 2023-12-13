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
const engine = require("php-parser");
const parser = new engine({
    parser: {
        extractDoc: true,
        php7: true,
        locations: true,
        suppressErrors: true,
    },
    ast: {
        all_tokens: true,
        withPositions: true,
    },
});
function getParameterName(editor, position, key, namedValue) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let isVariadic = false;
        let parameters;
        const description = yield vscode.commands.executeCommand('vscode.executeHoverProvider', editor.document.uri, position);
        const shouldHideRedundantAnnotations = vscode.workspace.getConfiguration('inline-parameters').get('hideRedundantAnnotations');
        if (description && description.length > 0) {
            try {
                const regEx = /(?<=@param.+)(\.{3})?(\$[a-zA-Z0-9_]+)/g;
                parameters = description[0].contents[0].value.match(regEx);
            }
            catch (err) {
                console.error(err);
            }
        }
        if (!parameters) {
            return reject();
        }
        parameters = parameters.map((parameter) => {
            if (parameter.startsWith('...')) {
                isVariadic = true;
                parameter = parameter.slice(3);
            }
            return parameter;
        });
        if (isVariadic && key >= parameters.length - 1) {
            let name = parameters[parameters.length - 1];
            if (shouldHideRedundantAnnotations && name.replace('$', '') === namedValue) {
                return reject();
            }
            name = showDollar(name);
            name = utils_1.showVariadicNumbers(name, -parameters.length + 1 + key);
            return resolve(name);
        }
        if (parameters[key]) {
            let name = parameters[key];
            if (shouldHideRedundantAnnotations && name.replace('$', '') === namedValue) {
                return reject();
            }
            name = showDollar(name);
            return resolve(name);
        }
        return reject();
    }));
}
exports.getParameterName = getParameterName;
function parse(code) {
    code = utils_1.removeShebang(code).replace("<?php", "");
    const ast = parser.parseEval(code);
    const functionCalls = crawlAst(ast);
    let parameters = [];
    functionCalls.forEach((expression) => {
        parameters = getParametersFromExpression(expression, parameters);
    });
    return parameters;
}
exports.parse = parse;
function showDollar(str) {
    if (vscode.workspace.getConfiguration('inline-parameters').get('showPhpDollar')) {
        return str;
    }
    return str.replace('$', '');
}
function crawlAst(ast, functionCalls = []) {
    const canAcceptArguments = ast.kind && (ast.kind === 'call' || ast.kind === 'new');
    const hasArguments = ast.arguments && ast.arguments.length > 0;
    const shouldHideArgumentNames = vscode.workspace.getConfiguration('inline-parameters').get('hideSingleParameters') && ast.arguments && ast.arguments.length === 1;
    if (canAcceptArguments && hasArguments && !shouldHideArgumentNames) {
        functionCalls.push(ast);
    }
    for (const [key, value] of Object.entries(ast)) {
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
        if (!expression.what || (!expression.what.offset && !expression.what.loc)) {
            return;
        }
        const expressionLoc = expression.what.offset ? expression.what.offset.loc.start : expression.what.loc.end;
        parameters.push({
            namedValue: (_a = argument.name) !== null && _a !== void 0 ? _a : null,
            expression: {
                line: parseInt(expressionLoc.line) - 1,
                character: parseInt(expressionLoc.column),
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
//# sourceMappingURL=php.js.map