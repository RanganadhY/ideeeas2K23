const mongoose = require("mongoose");
//i have removed required true for 2 fields for time being
const TadminData = new mongoose.Schema({
    NoOfUniqueIds:{
        type: Number,
        default:null
    },
    questions:{
        type: Number,
        default:null
    },
    answers:{
        type:Array,
        default:null
    }
},{timestamps:true})

module.exports = mongoose.model('Tadmin', TadminData);