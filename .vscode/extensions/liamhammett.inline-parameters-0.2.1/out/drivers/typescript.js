"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const abstract_javascript_1 = require("./abstract-javascript");
var abstract_javascript_2 = require("./abstract-javascript");
Object.defineProperty(exports, "getParameterName", { enumerable: true, get: function () { return abstract_javascript_2.getParameterName; } });
function parse(code) {
    return abstract_javascript_1.parse(code, {
        parser: require("recast/parsers/typescript"),
    });
}
exports.parse = parse;
//# sourceMappingURL=typescript.js.map