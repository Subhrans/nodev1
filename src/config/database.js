import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const connectDB = async () =>{
    try{
        await prisma.$connect();
        console.log('Database connected successfully.');
    }
    catch(error){
        console.error("Error connecting to the database:", error.message);
        process.exit(1);
    }
};

export {prisma, connectDB};
