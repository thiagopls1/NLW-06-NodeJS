import { getCustomRepository } from "typeorm"

import { UsersRepositories } from "../repositories/UsersRepositories"

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
    email:string;
    password:string;
}

class AuthenticateUserService{
    async excecute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        // Verificar se o email existe
        if(!user){
            throw new Error("Email/Password incorrect")
        }

        // Verificar se a senha está correta (Correta: true, Errada: false)
       const passwordMatch = await compare(password, user.password)

       if(!passwordMatch){
           throw new Error("Email/Password incorrect")
       }

       // Gerar token
       const token = sign({
           email: user.email
       }, 
       "52ce3de1265c1e5035049abf4f8e55ea", 
       {
           subject: user.id,
           expiresIn: "1d"
       })
       return token;
    }
}

export { AuthenticateUserService }
