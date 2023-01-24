export interface ICategoryDto {
  ID?: number;
  Designation?: string;
  Etat?: boolean;
  ImageCat_Petite?: string;
}

export class CategoryDto implements ICategoryDto {
  ID?: number;
  Designation?: string;
  Etat?: boolean;
  ImageCat_Petite?: string;
  constructor() {}
}
