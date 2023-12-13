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
function getParameterName(editor, position, key) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let args;
        const hoverCommand = yield vscode.commands.executeCommand('vscode.executeHoverProvider', editor.document.uri, position);
        if (hoverCommand && hoverCommand.length > 0) {
            try {
                // const regEx = /(?<=@param.+)(\$[a-zA-Z0-9_]+)/g
                // args = hoverCommand[0].contents[0].value.match(regEx)
                args = hoverCommand[0].contents[0].value;
            }
            catch (err) {
                // ...
            }
        }
        if (args) {
            resolve(args[key]);
        }
        reject();
    }));
}
exports.getParameterName = getParameterName;
function getParserOptions(editor) {
    if (editor.document.languageId === "javascript") {
        return {
            parser: require("recast/parsers/esprima"),
        };
    }
    if (editor.document.languageId === "typescript") {
        return {
            parser: require("recast/parsers/typescript"),
        };
    }
    if (editor.document.languageId === "javascriptreact") {
        return {
            parser: require("recast/parsers/babel"),
        };
    }
    if (editor.document.languageId === "typescriptreact") {
        return {
            parser: {
                parse(source) {
                    const babelParser = require("recast/parsers/babel").parser;
                    const opts = {
                        allowImportExportEverywhere: true,
                        allowReturnOutsideFunction: true,
                        plugins: [
                            "asyncGenerators",
                            "bigInt",
                            "classPrivateMethods",
                            "classPrivateProperties",
                            "classProperties",
                            "decorators-legacy",
                            "doExpressions",
                            "dynamicImport",
                            "exportDefaultFrom",
                            "exportExtensions",
                            "exportNamespaceFrom",
                            "functionBind",
                            "functionSent",
                            "importMeta",
                            "nullishCoalescingOperator",
                            "numericSeparator",
                            "objectRestSpread",
                            "optionalCatchBinding",
                            "optionalChaining",
                            ["pipelineOperator", { proposal: "minimal" }],
                            "throwExpressions",
                            "typescript",
                            "jsx"
                        ],
                        sourceType: "unambiguous",
                        startLine: 1,
                        strictMode: false,
                        tokens: true
                    };
                    return babelParser.parse(source, opts);
                }
            }
        };
    }
    return {
        parser: null,
    };
}
function parse(code, editor) {
    code = utils_1.removeShebang(code);
    let ast;
    try {
        ast = recast.parse(code, getParserOptions(editor)).program.body;
    }
    catch (err) {
        // ...
    }
    return [];
    // const parsedPhpCode: any = parser.parseEval(code)
    // const expressions: any[] = []
    // crawlPhpAst(parsedPhpCode)
    // function crawlExpressionAst(expression: any) {
    //     if (expression.arguments) {
    //         expression.arguments.forEach((argument: any) => {
    //             if (argument.body || argument.children) {
    //                 crawlPhpAst(argument)
    //             }
    //             if (argument.kind === 'call') {
    //                 expressions.push(argument)
    //             }
    //         })
    //     }
    //     if (expression.right && expression.right.kind === 'array') {
    //         expression.right.items.forEach((entry: any) => {
    //             if (entry.key) {
    //                 expressions.push(entry.key)
    //             }
    //             if (entry.value) {
    //                 expressions.push(entry.value)
    //             }
    //         })
    //     }
    //     expressions.push(expression)
    // }
    // function crawlPhpAst(obj: any) {
    //     if (obj.children) {
    //         obj.children.forEach((children: any) => {
    //             crawlPhpAst(children)
    //         })
    //     }
    //     if (obj.body) {
    //         if (Array.isArray(obj.body)) {
    //             obj.body.forEach((children: any) => {
    //                 crawlPhpAst(children)
    //             })
    //         } else {
    //             if (obj.body.children) {
    //                 obj.body.children.forEach((children: any) => {
    //                     crawlPhpAst(children)
    //                 })
    //             }
    //         }
    //     }
    //     if (obj.test) {
    //         if (obj.test.left) {
    //             crawlExpressionAst(obj.test.left)
    //         }
    //         if (obj.test.right) {
    //             crawlExpressionAst(obj.test.right)
    //         }
    //         if (obj.test.kind === 'call') {
    //             crawlExpressionAst(obj.test)
    //         }
    //     }
    //     if (obj.expression) {
    //         crawlExpressionAst(obj.expression)
    //     }
    //     if (obj.expressions) {
    //         obj.expressions.forEach((expression: any) => {
    //             crawlExpressionAst(expression)
    //         })
    //     }
    //     if (obj.expr) {
    //         expressions.push(obj.expr)
    //     }
    // }
    // function getBeginingOfArgument(arg: any): any {
    //     if (arg.left) {
    //         return getBeginingOfArgument(arg.left)
    //     }
    //     return arg
    // }
    // const phpArguments: any[] = []
    // function getArgumentsFromExpression(expression: any): any {
    //     if (expression.arguments && expression.arguments.length > 0) {
    //         expression.arguments.forEach((arg: any, key: number) => {
    //             if (expression.what && (expression.what.offset || expression.what.loc)) {
    //                 const beginingOfArgument: any = getBeginingOfArgument(arg)
    //                 const startLoc: any = beginingOfArgument.loc.start
    //                 const endLoc: any = beginingOfArgument.loc.end
    //                 const expressionLoc = expression.what.offset ? expression.what.offset.loc.start : expression.what.loc.end
    //                 phpArguments.push({
    //                     expression: {
    //                         line: parseInt(expressionLoc.line) - 1,
    //                         character: parseInt(expressionLoc.column),
    //                     },
    //                     key: key,
    //                     start: {
    //                         line: parseInt(startLoc.line) - 1,
    //                         character: parseInt(startLoc.column),
    //                     },
    //                     end: {
    //                         line: parseInt(endLoc.line) - 1,
    //                         character: parseInt(endLoc.column),
    //                     },
    //                 })
    //             }
    //         })
    //     }
    //     if (expression.what) {
    //         getArgumentsFromExpression(expression.what)
    //     }
    //     if (expression.right) {
    //         getArgumentsFromExpression(expression.right)
    //     }
    //     if (expression.left) {
    //         getArgumentsFromExpression(expression.left)
    //     }
    // }
    // expressions.forEach((expression) => {
    //     getArgumentsFromExpression(expression)
    // })
    // return phpArguments
}
exports.parse = parse;
//# sourceMappingURL=js.js.map