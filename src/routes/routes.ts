import express from "express";
import dbContext from "../database/dbContext";
import { UserController } from "../controllers/user.controller";
import { ArticleController } from "../controllers/article.controller";
import { CategoryController } from "../controllers/category.controller";

const router = express.Router();

// Controllers
const usersController = UserController(dbContext);
const articleController = ArticleController(dbContext);
const categoryController = CategoryController(dbContext);

// General routes
router.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "Connected (y)",
  });
});

// User routes
router.get("/users", usersController.getAll);

// Article routes
router.get("/articles", articleController.getAll);

// Category routes
router.get("/categories", categoryController.getAll);

export = router;
