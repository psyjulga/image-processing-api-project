"use strict";
// CONTROLLER => parses the request and calls the service action
//            => error HANDLING
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCtrl = void 0;
var imageService_1 = __importDefault(require("../services/imageService"));
var ImageCtrl = /** @class */ (function () {
    function ImageCtrl() {
    }
    ImageCtrl.prototype.showImage = function (req, res) {
        console.log(req.query);
        var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
        var image = imageService_1.default.showImage(filename, width, height);
        console.log(image);
        // handle errors
        if (!image) {
            res.status(400).send('image not found');
        }
        // res.sendFile(image)
    };
    return ImageCtrl;
}());
exports.ImageCtrl = ImageCtrl;
exports.default = new ImageCtrl();
