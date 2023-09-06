import {PrismaClient} from "@prisma/client";
const prisma = PrismaClient();
export default async (req,res) =>{
    if(req.method==="GET"){
        try {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
        } catch (error) {
            console.error("Error fetching Todos: ",error);
            res.status(500).json({error:"Unable to fetch Todos"});
        }
        finally{
            await prisma.$disconnect();
        }
    }
    else{
        res.status(405).json({error: "Method not allowed"});
    }
} 