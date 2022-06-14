"use strict";
/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
// import { User } from '../types/example'
var users = [
    {
        id: '62a260d8e6d50110aa4fff2c',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Sampson_Christian',
        gender: 'male',
        email: 'sampsonchristian@opticom.com',
        tags: ['nulla', 'excepteur', 'reprehenderit', 'cupidatat', 'cupidatat', 'in', 'sint'],
    },
    {
        id: '62a260d8ed37ebf681a91ffa',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Fitzpatrick_Curry',
        gender: 'male',
        email: 'fitzpatrickcurry@opticom.com',
        tags: ['ad', 'enim', 'cillum', 'proident', 'anim', 'non', 'officia'],
    },
    {
        id: '62a260d8eacab4db84cf891f',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Teresa_Lloyd',
        gender: 'female',
        email: 'teresalloyd@opticom.com',
        tags: ['exercitation', 'occaecat', 'officia', 'laboris', 'enim', 'ipsum', 'non'],
    },
];
var ExampleService = /** @class */ (function () {
    function ExampleService() {
    }
    ExampleService.prototype.getAll = function () {
        return users;
    };
    ExampleService.prototype.getOne = function (id) {
        var user = users.find(function (user) { return user.id === id; });
        if (!user) {
            throw Error('User not found');
        }
        return user;
    };
    return ExampleService;
}());
exports.ExampleService = ExampleService;
exports.default = new ExampleService();
