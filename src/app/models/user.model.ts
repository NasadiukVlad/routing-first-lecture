export class UserModel {
  public name: string;
  public surname: string;
  public login: string;
  public password: string;


  constructor(name: string, surname: string, login: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.login = login;
    this.password = password;
  }
}
