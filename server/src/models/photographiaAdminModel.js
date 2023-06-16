const mongoose = require('mongoose')

const PAdminData = new mongoose.Schema({
    name:{
        type:String
    },
    photo:{
        type:Buffer
    },
    votes:{
        type:Number,
        default:null
    }
},{timestamps:true})

module.exports = mongoose.model('PAdmin',PAdminData)