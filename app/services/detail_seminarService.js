const detail_seminarRepository = require('../repositories/detail_seminarRepository')


const getAllDetail_seminar = async()=>{
    try {
        const detail_seminar = await detail_seminarRepository.getAllDetail_seminar();
        return detail_seminar;
    }
    catch(err){
        return err;
    }
}

const getDetail_seminarByTitle = async (param_judul) => {
    try {
        const detail_seminar = await detail_seminarRepository.getDetail_seminarByTitle(param_judul);
        return detail_seminar;
    }
    catch(err){
        return err;
    }
}

const createDetail_seminar = async(data) =>{
    try {
        const detail_seminar = await detail_seminarRepository.createDetail_seminar(data);
        return detail_seminar;
    }
    catch(err){
        return err;
    }
}

const updateDetail_seminar = async(data, judul) => {

    try {
        const detail_seminar = await detail_seminarRepository.updateDetail_seminar(data, judul);
        
        return detail_seminar;
    }
    catch(err){
        return err;
    }
}

const deleteDetail_seminar = async(judul) => {
    try {
        const detail_seminar = await detail_seminarRepository.deleteDetail_seminar(judul);
        return detail_seminar;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllDetail_seminar,
    getDetail_seminarByTitle,
    createDetail_seminar,
    updateDetail_seminar,
    deleteDetail_seminar
}