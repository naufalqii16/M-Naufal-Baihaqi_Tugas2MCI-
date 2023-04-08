const {tempat_duduk} = require('../models');

const getAllTempat_duduk = () => {
    return tempat_duduk.findAll();
}

const getTempat_dudukByPosision = (letak) =>{
    return tempat_duduk.findOne(
        {
            where: {
                letak: letak
            }
        }
    )
}

const createTempat_duduk = (data) => {
    return tempat_duduk.create(data)
}

const updateTempat_duduk = (data, letak) => {
    return tempat_duduk.update(data,{
        where: {
            letak: letak
        }
    })
}

const deleteTempat_duduk = (letak) => {
    return tempat_duduk.destroy(
        {
            where: {
                letak: letak
            }
        }
    )
}

module.exports = {
    getAllTempat_duduk,
    getTempat_dudukByPosision,
    createTempat_duduk,
    updateTempat_duduk,
    deleteTempat_duduk
}