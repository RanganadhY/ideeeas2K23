const mongoose = require("mongoose");

const TadminData = new mongoose.Schema({
    questions:{
        type: int,
        required: true
    },
    answers:{
        type:Array,
        required:true
    }
},{timestamps:true})

const Tadmin = mongoose.model('Tadmin', TadminData);
module.exports = Tadmin;