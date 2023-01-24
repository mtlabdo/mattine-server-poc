export interface IArticleDto {
  Matricule?: string;
  idCategorie?: number;
  Nom?: string;
  Information?: string;
  QteMAx?: number;
  QteMin?: number;
  PrixVente?: number;
  ImageAndroid?: string;
  Etat?: boolean;
}

export class ArticleDto implements IArticleDto {
  Matricule?: string;
  idCategorie?: number;
  Nom?: string;
  Information?: string;
  QteMAx?: number;
  QteMin?: number;
  PrixVente?: number;
  ImageAndroid?: string;
  Etat?: boolean;
  constructor() {}
}
