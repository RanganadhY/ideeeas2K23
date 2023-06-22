const mongoose = require("mongoose");
//i have removed required true for 2 fields for time being
const TadminData = new mongoose.Schema({
    buzzer:{
        status:Boolean
    }
},{timestamps:true})

module.exports = mongoose.model('Tadmin', TadminData);