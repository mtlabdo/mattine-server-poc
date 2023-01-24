import { Request, Response } from "express";
import { UserDto } from "../dtos/user.dto";
import response from "../config/response";
import { CategoryDto } from "../dtos/category.dto";

export function CategoryController(dbContext: any) {
  const Fields = "ID, Designation, Etat, ImageCat_Petite";
  function getAllUsers(req: Request, res: Response) {
    let categories: CategoryDto[] = [];
    let query = `SELECT ${Fields} FROM [BD_MATTINE].[dbo].[Categorie]`;

    dbContext.get(query, function (err: any, data: any) {
      if (!err) {
        data[0].forEach((categorie: any) => {
          categories.push(categorie as UserDto);
        });
      }
      return res.json(response(categories, err));
    });
  }

  return {
    getAll: getAllUsers,
  };
}
