const { default: mongoose } = require("mongoose");

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    dec:{
        type:String,
        minLength:10,
        require:true
    }
})

const notesModel = mongoose.model('Notes',notesSchema)
module.exports = notesModel;