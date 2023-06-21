const { Int32 } = require('mongodb');
const mongoose = require('mongoose')

const PStudentData = new mongoose.Schema({
    uniqueId:{
        type:String
    },
    usn:{
        type:String,
        default:null
    },
    email:{
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
    },
    ipaddress:{
        type:String,
        default:null
    }
},{timestamps:true})


module.exports = mongoose.model('Pstudent', PStudentData);