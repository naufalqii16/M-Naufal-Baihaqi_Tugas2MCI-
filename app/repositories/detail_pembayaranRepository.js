const {detail_pembayaran} = require('../models');

const getAllDetail_pembayaran = () => {
    return detail_pembayaran.findAll();
}

const getDetail_pembayaranByUser_id = (user_id) =>{

    return detail_pembayaran.findOne(
        {
            where: {
                user_id: user_id
            }
        }
    )
}

const createDetail_pembayaran = (data) => {
    return detail_pembayaran.create(data)
}

const updateDetail_pembayaran = (data, id) => {
    console.log(id);
    return detail_pembayaran.update(data,{
        where: {
            id: id
        }
    })
}

const deleteDetail_pembayaran = (id) => {
    return detail_pembayaran.destroy(
        {
            where: {
                id: id
            }
        }
    )
}

module.exports = {
    getAllDetail_pembayaran,
    getDetail_pembayaranByUser_id,
    createDetail_pembayaran,
    updateDetail_pembayaran,
    deleteDetail_pembayaran
}