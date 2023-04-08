const userRepository = require('../repositories/userRepository')


const getAllUser = async()=>{
    try {
        const user = await userRepository.getAllUser();
        return user;
    }
    catch(err){
        return err;
    }
}

const getUserByName = async (param_nama) => {
    try {
        const user = await userRepository.getUserByName(param_nama);
        return user;
    }
    catch(err){
        return err;
    }
}

const createUser = async(data) =>{
    try {
        const user = await userRepository.createUser(data);
        return user;
    }
    catch(err){
        return err;
    }
}

const updateUser = async(data, nama) => {

    try {
        const user = await userRepository.updateUser(data, nama);
        
        return user;
    }
    catch(err){
        return err;
    }
}

const deleteUser = async(nama) => {
    try {
        const user = await userRepository.deleteUser(nama);
        return user;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}