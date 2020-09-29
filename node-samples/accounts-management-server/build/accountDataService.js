"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDataService = void 0;
var AccountDataService = /** @class */ (function () {
    function AccountDataService(repo) {
        this.repo = repo;
    }
    AccountDataService.prototype.register = function (user) {
        var message;
        try {
            this.repo.addNewUser(user);
            message = "New User registered Succesfully";
        }
        catch (e) {
            message = "New User Registration UnSuccessfull";
        }
        return message;
    };
    AccountDataService.prototype.validate = function (userName, password) {
        var users = this.repo.getAllUsers();
        //
        return false;
    };
    AccountDataService.prototype.changePassword = function (userName, oldPassword, newPassword) {
        return false;
    };
    AccountDataService.prototype.recoverPassword = function (email) {
        return "Email Sent";
    };
    return AccountDataService;
}());
exports.AccountDataService = AccountDataService;
