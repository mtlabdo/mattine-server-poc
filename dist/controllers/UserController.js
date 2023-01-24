"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const response_1 = __importDefault(require("../config/response"));
function UserController(dbContext) {
    const Fields = "CIN, Nom, Prenom, Password, Tel, Etat, Type_fonction";
    function getAllUsers(req, res) {
        let users = [];
        let query = `SELECT ${Fields} FROM [BD_MATTINE].[dbo].[Utilisateurs]`;
        dbContext.get(query, function (err, data) {
            if (!err) {
                data.array.forEach((user) => {
                    users.push(user);
                });
            }
            return res.json((0, response_1.default)(data, err));
        });
    }
    return {
        getAll: getAllUsers
    };
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map