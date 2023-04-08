const detail_pembayaranRepository = require('../repositories/detail_pembayaranRepository')


const getAllDetail_pembayaran = async()=>{
    try {
        const detail_pembayaran = await detail_pembayaranRepository.getAllDetail_pembayaran();
        return detail_pembayaran;
    }
    catch(err){
        return err;
    }
}

const getDetail_pembayaranByUser_id = async (param_nama) => {
    console.log(param_nama);
    try {
        const detail_pembayaran = await detail_pembayaranRepository.getDetail_pembayaranByUser_id(param_nama);
        console.log(detail_pembayaran);
        return detail_pembayaran;
    }
    catch(err){
        return err;
    }
}

const createDetail_pembayaran = async(data) =>{
    try {
        const detail_pembayaran = await detail_pembayaranRepository.createDetail_pembayaran(data);
        return detail_pembayaran;
    }
    catch(err){
        return err;
    }
}

const updateDetail_pembayaran = async(data, id) => {

    try {
        const detail_pembayaran = await detail_pembayaranRepository.updateDetail_pembayaran(data, id);
        
        return detail_pembayaran;
    }
    catch(err){
        return err;
    }
}

const deleteDetail_pembayaran = async(id) => {
    try {
        const detail_pembayaran = await detail_pembayaranRepository.deleteDetail_pembayaran(id);
        return detail_pembayaran;
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getAllDetail_pembayaran,
    getDetail_pembayaranByUser_id,
    createDetail_pembayaran,
    updateDetail_pembayaran,
    deleteDetail_pembayaran
}