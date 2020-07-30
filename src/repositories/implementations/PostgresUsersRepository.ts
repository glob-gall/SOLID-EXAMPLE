import { IUsersRepository } from "../IUserRepository";
import { User } from "../../entities/User";

export class PostgresUserRepository implements IUsersRepository{
  private users : User[] = []

  async findByEmail(email:string):Promise<User>{
    const findedUser = this.users.find(user=> user.email === email)

    return findedUser
  }
  async save(user:User):Promise<void>{
    this.users.push(user)
  }

}