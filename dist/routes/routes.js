"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const dbContext_1 = __importDefault(require("../database/dbContext"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
// Controllers
const usersController = (0, UserController_1.UserController)(dbContext_1.default);
// General routes
router.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "Connected (y)",
    });
});
// User routes
router.get("/users", usersController.getAll);
module.exports = router;
//# sourceMappingURL=routes.js.map