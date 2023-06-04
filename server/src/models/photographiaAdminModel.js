const mongoose = require('mongoose')

const PAdminData = new mongoose.Schema({
    photoId:{
        type:Number
    },
    photo:{
        type:Buffer
    }
},{timestamps:true})

module.exports = mongoose.model('PAdmin',PAdminData)