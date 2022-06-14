"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var example_1 = __importDefault(require("./routes/example"));
var app = (0, express_1.default)();
/* ROUTES */
app.use('/example', example_1.default);
/* LISTENING */
var PORT = 4000;
// eslint-disable-next-line no-console
app.listen(PORT, function () { return console.log("running on port ".concat(PORT)); });
exports.default = app;
