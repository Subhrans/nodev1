// const {prisma} = require('../config/database');
import { prisma } from '../config/database.js';


const findAllUsers = async () => {
    return prisma.user.findMany();
};

const findFirstUser = async () =>{
    return prisma.user.findFirst();
};

const createUsers = async (userData) =>{
    return prisma.user.create({
        data: userData,
    })
};

export default{
    findAllUsers, findFirstUser, createUsers
}
// module.exports = {}