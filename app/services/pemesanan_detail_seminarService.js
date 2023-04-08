const pemesanan_detail_seminarRepository = require('../repositories/pemesanan_detail_seminarRepository')

const getAllPemesanan_detail_seminar = async()=>{
    try {
        const pemesanan_detail_seminar = await pemesanan_detail_seminarRepository.getAllPemesanan_detail_seminar();
        return pemesanan_detail_seminar;
    }
    catch(err){
        return err;
    }
}

const getPemesanan_detail_seminarByPemesanan_id = async (param_pemesanan_id) => {
    try {
        const pemesanan_detail_seminar = await pemesanan_detail_seminarRepository.getPemesanan_detail_seminarByPemesanan_id(param_pemesanan_id);
        return pemesanan_detail_seminar;
    }
    catch(err){
        return err;
    }
}

const createPemesanan_detail_seminar = async(data) =>{
    try {
        const pemesanan_detail_seminar = await pemesanan_detail_seminarRepository.createPemesanan_detail_seminar(data);
        return pemesanan_detail_seminar;
    }
    catch(err){
        return err;
    }
}

const updatePemesanan_detail_seminar = async(data, id) => {

    try {
        const pemesanan_detail_seminar = await pemesanan_detail_seminarRepository.updatePemesanan_detail_seminar(data, id);
        
        return pemesanan_detail_seminar;
    }
    catch(err){
        return err;
    }
}

const deletePemesanan_detail_seminar = async(id) => {
    try {
        const pemesanan_detail_seminar = await pemesanan_detail_seminarRepository.deletePemesanan_detail_seminar(id);
        return pemesanan_detail_seminar;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllPemesanan_detail_seminar,
    getPemesanan_detail_seminarByPemesanan_id,
    createPemesanan_detail_seminar,
    updatePemesanan_detail_seminar,
    deletePemesanan_detail_seminar
}