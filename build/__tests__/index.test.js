"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
// import app from '../src/index'
// how to test if the server is working?
test('server is running', function () {
    // ??
});
// test the resizing of sharp lib
// we don't test external apis - we mock them
jest.mock('sharp');
// sharp(img_path).resize(w,h).toFile(new_path)
// const mockedSharp = sharp as jest.Mocked<typeof sharp>
sharp_1.default.prototype.resize.mockImplementation(function () { return 'test'; });
(0, sharp_1.default)('images/full/the persistance of memory.jpg').resize(5, 10);
