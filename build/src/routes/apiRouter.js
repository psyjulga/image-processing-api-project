"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ImageCtrl_1 = __importDefault(require("../controllers/ImageCtrl"));
var apiRouter = (0, express_1.Router)();
// localhost:3000/api/images
apiRouter.get('/', ImageCtrl_1.default.showImage);
exports.default = apiRouter;
