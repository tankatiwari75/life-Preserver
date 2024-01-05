const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    email: {
         required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    phoneno: {
        required: true,
        type: String
    },
    fullname: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    },
    card_holder_name: {
        required: false,
        type: String
    },
     card_number: {
        required: false,
        type: String
    },
    expiry_date: {
        required: false,
        type: Date
    },
    cvv: {
        required: false,
        type: String
    },
    progress:{
        required:false,
        type:Object

    }

})

module.exports = mongoose.model('User', dataSchema)