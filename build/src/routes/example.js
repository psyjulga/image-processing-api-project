"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var example_1 = __importDefault(require("../controllers/example"));
var router = (0, express_1.Router)();
router.get('/', example_1.default.getAll);
exports.default = router;
