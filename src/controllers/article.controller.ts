import { Request, Response } from "express";
import { UserDto } from "../dtos/user.dto";
import response from "../config/response";
import { ArticleDto } from "../dtos/article.dto";

export function ArticleController(dbContext: any) {
  const Fields =
    "Matricule, idCategorie, Nom, Information, QteMAx, QteMin, PrixVente, ImageAndroid, Etat";
  function getAllArticles(req: Request, res: Response) {
    let articles: ArticleDto[] = [];
    let query = `SELECT ${Fields} FROM [BD_MATTINE].[dbo].[Article]`;

    dbContext.get(query, function (err: any, data: any) {
      if (!err) {
        data[0].forEach((article: any) => {
          articles.push(article as UserDto);
        });
      }
      return res.json(response(articles, err));
    });
  }

  return {
    getAll: getAllArticles,
  };
}
