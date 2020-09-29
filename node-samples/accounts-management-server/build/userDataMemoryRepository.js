"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataMemoryRepository = void 0;
var userModel_1 = require("./userModel");
var UserDataMemoryRepository = /** @class */ (function () {
    function UserDataMemoryRepository() {
        this.users = new Array();
        this.users.push(new userModel_1.User("Tom", "tom@123", "tom@pic.com"));
        this.users.push(new userModel_1.User("Hary", "hary@123", "hary@pic.com"));
        this.users.push(new userModel_1.User("Jack", "jack@123", "jack@pic.com"));
        this.users.push(new userModel_1.User("James", "james@123", "james@pic.com"));
        this.users.push(new userModel_1.User("Jiny", "jiny@123", "jiny@pic.com"));
    }
    UserDataMemoryRepository.prototype.getAllUsers = function () {
        return this.users;
    };
    UserDataMemoryRepository.prototype.addNewUser = function (user) {
        this.users.push(user);
    };
    UserDataMemoryRepository.prototype.updateUser = function (user) {
        //
    };
    UserDataMemoryRepository.prototype.deleteUser = function (user) {
        //delete
    };
    return UserDataMemoryRepository;
}());
exports.UserDataMemoryRepository = UserDataMemoryRepository;
