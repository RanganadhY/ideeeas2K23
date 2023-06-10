const mongoose = require('mongoose')

const PAdminData = new mongoose.Schema({
    name:{
        type:String
    },
    photo:{
        type:Buffer
    }
},{timestamps:true})

module.exports = mongoose.model('PAdmin',PAdminData)