const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  
    task_description: {
        required: true,
        type: String
    },
    team_member:{
        required:true,
        type:String
    },
    due_date:{
        required:true,
        type: Date
    }
})

module.exports = mongoose.model('Tasks', dataSchema)