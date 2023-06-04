const mongoose = require('mongoose')
const Double = mongoose.Schema.Types.Double;

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
            type:Number,
            default:null        
        }        
    },
    hasSubmitted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


module.exports = mongoose.model('Tstudent', TStudentData);