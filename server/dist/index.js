"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./config/env');
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./router/routes"));
var app = express_1.default();
var port = 8000;
app.use('/', routes_1.default);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=index.js.map