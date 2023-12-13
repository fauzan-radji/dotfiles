"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssGenerator = void 0;
const CssGenerator_default_1 = require("./CssGenerator.default");
const CssGenerator_fullscreen_1 = require("./CssGenerator.fullscreen");
/**
 * 样式生成工厂
 *
 * @export
 * @class CssGenerator
 */
class CssGenerator {
    static create(options) {
        var _a, _b;
        if ((_b = (_a = options.fullscreen) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.length) {
            return new CssGenerator_fullscreen_1.FullScreenCssGenerator().create(options.fullscreen);
        }
        return new CssGenerator_default_1.DefaultCssGenerator().create(options);
    }
}
exports.CssGenerator = CssGenerator;
//# sourceMappingURL=index.js.map