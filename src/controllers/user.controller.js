import userService from '../services/user.service.js';

const getAllUsers = async(req, res)=>{

    try{
        const users = await userService.findAllUsers();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

export default {
    getAllUsers
};