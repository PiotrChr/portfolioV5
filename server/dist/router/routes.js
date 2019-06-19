"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var express_memory_cache_1 = __importDefault(require("express-memory-cache"));
var Controller = __importStar(require("../controller"));
var ct = 3600 * 24;
router.get('/', express_memory_cache_1.default(ct), Controller.Index);
router.get('/api/content/blog/:post?', express_memory_cache_1.default(ct), Controller.Blog);
exports.default = router;
//# sourceMappingURL=routes.js.map