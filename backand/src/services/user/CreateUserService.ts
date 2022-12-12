import prismaClient from '../../prisma/Index'


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({ name, email, password }: UserRequest){
        
        //Verificar se ele enviou o email


        //verificra se o email ja esta cadastrado na plataforma




        return {  name: name }
    } 
}
export { CreateUserService };