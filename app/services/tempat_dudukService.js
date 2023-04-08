const tempat_dudukRepository = require('../repositories/tempat_dudukRepository')


const getAllTempat_duduk = async()=>{
    try {
        const tempat_duduk = await tempat_dudukRepository.getAllTempat_duduk();
        return tempat_duduk;
    }
    catch(err){
        return err;
    }
}

const getTempat_dudukByPosision = async (param_letak) => {
    try {
        const tempat_duduk = await tempat_dudukRepository.getTempat_dudukByPosision(param_letak);
        return tempat_duduk;
    }
    catch(err){
        return err;
    }
}

const createTempat_duduk = async(data) =>{
    try {
        const tempat_duduk = await tempat_dudukRepository.createTempat_duduk(data);
        return tempat_duduk;
    }
    catch(err){
        return err;
    }
}

const updateTempat_duduk = async(data, letak) => {

    try {
        const tempat_duduk = await tempat_dudukRepository.updateTempat_duduk(data, letak);
        
        return tempat_duduk;
    }
    catch(err){
        return err;
    }
}

const deleteTempat_duduk = async(letak) => {
    try {
        const tempat_duduk = await tempat_dudukRepository.deleteTempat_duduk(letak);
        return tempat_duduk;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllTempat_duduk,
    getTempat_dudukByPosision,
    createTempat_duduk,
    updateTempat_duduk,
    deleteTempat_duduk
}