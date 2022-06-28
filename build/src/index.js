"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var PORT = 3000;
// eslint-disable-next-line no-console
app_1.default.listen(PORT, function () { return console.log("running on port ".concat(PORT)); });
