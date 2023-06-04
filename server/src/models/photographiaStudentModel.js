const mongoose = require('mongoose')

const PStudentData = new mongoose.Schema({
    uniqueId:{
        type:String,
        required:true
    },
    usn:{
        type:String,
        default:null       
    },
    name:{
        type:String,
        default:null       
    }, 
    hasVoted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


module.exports = mongoose.model('Pstudent', PStudentData);