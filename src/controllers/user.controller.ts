import { Request, Response } from "express";
import { UserDto } from "../dtos/user.dto";
import response from "../config/response";

export function UserController(dbContext: any) {
  const Fields = "CIN, Nom, Prenom, Password, Tel, Etat, Type_fonction";
  function getAllUsers(req: Request, res: Response) {
    let users: UserDto[] = [];
    let query = `SELECT ${Fields} FROM [BD_MATTINE].[dbo].[Utilisateur]`;

    dbContext.get(query, function (err: any, data: any) {
      if (!err) {
        data[0].forEach((user: any) => {
          users.push(user as UserDto);
        });
      }
      return res.json(response(users, err));
    });
  }

  return {
    getAll: getAllUsers,
  };
}
