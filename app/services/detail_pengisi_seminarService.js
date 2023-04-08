const detail_pengisi_seminarRepository = require('../repositories/detail_pengisi_seminarRepository')


const getAllDetail_pengisi_seminar = async()=>{
    try {
        const detail_pengisi_seminar = await detail_pengisi_seminarRepository.getAllDetail_pengisi_seminar();
        return detail_pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const getDetail_pengisi_seminarBySeminar_id = async (param_ds_id) => {
    try {
        const detail_pengisi_seminar = await detail_pengisi_seminarRepository.getDetail_pengisi_seminarBySeminar_id(param_ds_id);
        return detail_pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const createDetail_pengisi_seminar = async(data) =>{
    try {
        const detail_pengisi_seminar = await detail_pengisi_seminarRepository.createDetail_pengisi_seminar(data);
        return detail_pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const updateDetail_pengisi_seminar = async(data, id) => {

    try {
        const detail_pengisi_seminar = await detail_pengisi_seminarRepository.updateDetail_pengisi_seminar(data, id);
        
        return detail_pengisi_seminar;
    }
    catch(err){
        return err;
    }
}

const deleteDetail_pengisi_seminar = async(id) => {
    try {
        const detail_pengisi_seminar = await detail_pengisi_seminarRepository.deleteDetail_pengisi_seminar(id);
        return detail_pengisi_seminar;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllDetail_pengisi_seminar,
    getDetail_pengisi_seminarBySeminar_id,
    createDetail_pengisi_seminar,
    updateDetail_pengisi_seminar,
    deleteDetail_pengisi_seminar
}