const pemesananRepository = require('../repositories/pemesananRepository')


const getAllPemesanan = async()=>{
    try {
        const pemesanan = await pemesananRepository.getAllPemesanan();
        return pemesanan;
    }
    catch(err){
        return err;
    }
}

const getPemesananByBayar_id = async (param_bayar_id) => {
    try {
        const pemesanan = await pemesananRepository.getPemesananByBayar_id(param_bayar_id);
        return pemesanan;
    }
    catch(err){
        return err;
    }
}

const createPemesanan = async(data) =>{
    try {
        const pemesanan = await pemesananRepository.createPemesanan(data);
        return pemesanan;
    }
    catch(err){
        return err;
    }
}

const updatePemesanan = async(data, id) => {

    try {
        const pemesanan = await pemesananRepository.updatePemesanan(data, id);
        
        return pemesanan;
    }
    catch(err){
        return err;
    }
}

const deletePemesanan = async(id) => {
    try {
        const pemesanan = await pemesananRepository.deletePemesanan(id);
        return pemesanan;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllPemesanan,
    getPemesananByBayar_id,
    createPemesanan,
    updatePemesanan,
    deletePemesanan
}