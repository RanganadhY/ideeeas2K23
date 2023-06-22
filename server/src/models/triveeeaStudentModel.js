const mongoose = require('mongoose')
const Double = mongoose.Schema.Types.Double;

const TStudentData = new mongoose.Schema({
    loggedIn:{
        type:Boolean
    },
    uniqueId:{
        type:String,
        required:true
    },
    clickedAt:{
        type:Number,
        // required:true
    }
})


module.exports = mongoose.model('Tstudent', TStudentData);