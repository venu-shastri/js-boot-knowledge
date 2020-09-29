"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//web sever code 
// importing third party module (node_modules)
var express_1 = __importDefault(require("express"));
var accountDataService_1 = require("./accountDataService");
var userDataMemoryRepository_1 = require("./userDataMemoryRepository");
var userModel_1 = require("./userModel");
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path")); // node Js Built in module
var server = express_1.default();
var PORT = 8003;
var accountServiceref = new accountDataService_1.AccountDataService(new userDataMemoryRepository_1.UserDataMemoryRepository());
//Configure - middleware /filter
server.use(body_parser_1.default.json());
server.get("/index.html", function (req, res) {
    res.sendFile(path_1.default.join(__dirname + '/index.html'));
});
//http get request - http://localhost:8003/teabreak
server.get("/teabreak", function (req, res) {
    console.log("New Reuest Recived");
    res.send("Lets have tea break");
});
server.post("/accounts/register", function (req, res) {
    var userObj = new userModel_1.User(req.body.name, req.body.password, req.body.email);
    var result = accountServiceref.register(req.body);
    res.send(result);
});
server.post("/accounts/validate", function (req, res) {
    var credentials = req.body;
    if (credentials) {
        if (accountServiceref.validate(credentials.userName, credentials.password)) {
            res.status(200).json({ message: "Valid Credentials" });
        }
        else {
            res.status(403).json({ message: "Invalid Credentials" });
        }
    }
    res.status(400).json({ messgae: "Bad Request" });
});
server.listen(PORT, function () {
    console.log("Account Management Server is running at http://localhost:" + PORT);
});
