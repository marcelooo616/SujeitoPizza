import prismaClient from "../../prisma/Index";
import { compare } from 'bcryptjs';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){

        //verificar s eo email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("User/password incorreto")
        }

        //verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorreto")
        }

        //gerar um token JWT e devolver os dados do usuario como id, name e email

        return { ok: true }

    }

}

export { AuthUserService }