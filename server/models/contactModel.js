const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  
    fullname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    messages:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('ContactUs', dataSchema)