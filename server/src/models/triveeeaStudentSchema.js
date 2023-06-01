const { Double } = require('mongodb');
const mongoose = require('mongoose')

const TStudentData = new mongoose.Schema({
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
    answerSelected:{

        answer:{ 
            type:Array,
            default:null        
        },
        timeTaken:{
            type:Double,
            default:null        
        }
        
    }
},{timestamps:true})

const Tstudent = mongoose.model('Tstudent', TStudentData);
module.export = Tstudent;