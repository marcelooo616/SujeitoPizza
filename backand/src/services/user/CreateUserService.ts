import prismaClient from '../../prisma/Index'


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({ name, email, password }: UserRequest){
        
        //Verificar se ele enviou um email
        if(!email){
            throw new Error("Email incorreto")
        }


        //verificra se o email ja esta cadastrado na plataforma
        const userAlreadyExixts = await prismaClient.user.findFirst({
          where:{
            email:email
          }
        })

        if(userAlreadyExixts){
          throw new Error("Este email ja existe ")
        }

        const user = await prismaClient.user.create({
          data:{
            name: name,
            email: email,
            password: password,
          },
          select:{
            id:true,
            name:true,
            email:true,

          }
        })




        return user;
    } 
}
export { CreateUserService };