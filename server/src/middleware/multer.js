const multer=require("multer");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,require("path").resolve(__dirname,'..')+"/uploads")
    },
    filename:function(req,file,cb){
        if(file.fieldname==="photographiaImg"){
            cb(null,req.body.name+req.body.year+file.fieldname+".png")
        }
    
    }
})

const upload = multer({storage:storage})

const photographiaImgUpload = upload.fields([
    {name:"photographiaImg",maxCount:1}
])

module.exports.photographiaImgUpload = photographiaImgUpload