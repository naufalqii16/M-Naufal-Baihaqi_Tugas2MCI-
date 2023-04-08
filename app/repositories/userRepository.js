const {user} = require('../models');

const getAllUser = () => {
    return user.findAll();
}

const getUserByName = (name) =>{
    return user.findOne(
        {
            where: {
                nama: name
            }
        }
    )
}

const createUser = (data) => {
    return user.create(data)
}

const updateUser = (data, nama) => {
    return user.update(data,{
        where: {
            nama: nama
        }
    })
}

const deleteUser = (nama) => {
    return user.destroy(
        {
            where: {
                nama: nama
            }
        }
    )
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}