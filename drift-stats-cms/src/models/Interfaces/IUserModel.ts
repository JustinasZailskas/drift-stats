export interface IUserModel {
  getID(): string;
  getEmail(): string;
  getPassword(): string;
  setEmail(email: string): void;
  setPassword(password: string): void;
}
