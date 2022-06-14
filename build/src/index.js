"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiRouter_1 = __importDefault(require("./routes/apiRouter"));
var app = (0, express_1.default)();
/* ROUTES */
app.use('/api/images', apiRouter_1.default);
/* LISTENING */
var PORT = 3000;
// eslint-disable-next-line no-console
app.listen(PORT, function () { return console.log("running on port ".concat(PORT)); });
exports.default = app;
