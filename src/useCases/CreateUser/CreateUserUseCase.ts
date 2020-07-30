import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
  constructor(
    private userRepository : IUsersRepository,
    private mailProvider : IMailProvider,
  ){}

  async execute(data:ICreateUserRequestDTO){
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)
    if(userAlreadyExists){
      throw new Error('User already Exists.')
    }

    const user = new User(data)

    await this.userRepository.save(user)

    await this.mailProvider.sendMail({
      to:{
        name:data.name,
        email:data.email,
      },
      from:{
        name:'equipe glob anao',
        email:'eqiupeglobanao@glob.anao',
      },
      subject:'BEM-VINDO!!',
      body:'<p>bem vindo a nossa equipe!</p>'
    })
  }
}