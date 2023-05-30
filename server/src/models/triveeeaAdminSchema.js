const mongoose = require("mongoose");

const TadminData = new mongoose.Schema({
    questionsA:{
        type: Array,
        required: true
    },
    answersA:{
        type:Array,
        required:true
    }
},{timestamps:true})

const Tadmin = mongoose.model('Tadmin', TadminData);
module.exports = Tadmin;