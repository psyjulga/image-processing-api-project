"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCtrl = void 0;
var example_1 = __importDefault(require("../services/example"));
/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/
var ExampleCtrl = /** @class */ (function () {
    function ExampleCtrl() {
    }
    ExampleCtrl.prototype.getAll = function (req, res) {
        res.json(example_1.default.getAll());
    };
    ExampleCtrl.prototype.getOne = function (req, res) {
        var id = req.params.id;
        var user = example_1.default.getOne(id);
        if (!user) {
            res.status(400).send('User not found');
        }
        res.send(res);
    };
    ExampleCtrl.prototype.create = function (req, res) {
        // write the logic here
    };
    ExampleCtrl.prototype.update = function (req, res) {
        // write the logic here
    };
    ExampleCtrl.prototype.deleteOne = function (req, res) {
        // write the logic here
    };
    return ExampleCtrl;
}());
exports.ExampleCtrl = ExampleCtrl;
exports.default = new ExampleCtrl();
