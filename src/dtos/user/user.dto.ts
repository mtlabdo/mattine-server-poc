export interface IUserDto {
  CIN?: string;
  Nom?: string;
  Prenom?: string;
  Password?: string;
  Tel?: string;
  Etat?: boolean;
  Type_fonction?: string;
}

export class UserDto implements IUserDto {
  CIN?: string;
  Nom?: string;
  Prenom?: string;
  Password?: string;
  Tel?: string;
  Etat?: boolean;
  Type_fonction?: string;

  constructor() {}
}
