import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailTrapMailProvider()
const postgresUsersRepository = new  PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}