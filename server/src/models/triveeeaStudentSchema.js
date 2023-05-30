const { Double } = require('mongodb');
const mongoose = require('mongoose')

const TStudentData = new mongoose.Schema({
    uniqueId:{
        type:String,
        required:true
    },
    usn:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    answerSelected:{

        answer:{ 
            type:Array,
            required:true},
        timeTaken:{
            type:Double,
            required:true
        }
        
    }
},{timestamps:true})

const Tstudent = mongoose.model('Tstudent', TStudentData);
module.export = Tstudent;