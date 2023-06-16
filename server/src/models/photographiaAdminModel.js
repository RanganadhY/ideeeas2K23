const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const PAdminData = new mongoose.Schema({
    name:{
        type:String
    },
    photo:{
        type:String         
    },
    votes:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model('PAdmin',PAdminData)