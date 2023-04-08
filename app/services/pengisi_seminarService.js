const pengisi_seminarRepository = require('../repositories/pengisi_seminarRepository')


const getAllPengisi_seminar = async()=>{
    try {
        const pengisi_seminar = await pengisi_seminarRepository.getAllPengisi_seminar();
        return pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const getPengisi_seminarByName = async (param_nama) => {
    try {
        const pengisi_seminar = await pengisi_seminarRepository.getPengisi_seminarByName(param_nama);
        return pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const createPengisi_seminar = async(data) =>{
    try {
        const pengisi_seminar = await pengisi_seminarRepository.createPengisi_seminar(data);
        return pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const updatePengisi_seminar = async(data, nama) => {

    try {
        const pengisi_seminar = await pengisi_seminarRepository.updatePengisi_seminar(data, nama);
        
        return pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const deletePengisi_seminar = async(nama) => {
    try {
        const pengisi_seminar = await pengisi_seminarRepository.deletePengisi_seminar(nama);
        return pengisi_seminar;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllPengisi_seminar,
    getPengisi_seminarByName,
    createPengisi_seminar,
    updatePengisi_seminar,
    deletePengisi_seminar
}