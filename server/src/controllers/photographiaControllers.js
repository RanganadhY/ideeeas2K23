const photographiaAdminSchema = require('../models/photographiaAdminModel')
// const { uploadFile } = require('./s3')

const uploadImageDetails = async(req,res) => {
    try{
        const {name} = req.body;
        const photographiaImg = req.files.photographiaImg[0];

        const imageS3 = await uploadFile(photographiaImg);
        console.log(imageS3)
        const imageDetails = {
            "name":{name},
            "photo":imageS3.Location
        }

        const result = await photographiaAdminSchema.create(imageDetails);
        return res.status(500).json({"image and details uploaded successfully":result})
    }
    catch(err){
        console.log(err)
        res.status(200).json({"message":"error in uploading image and its details"})
    }
}

module.exports.uploadImageDetails = uploadImageDetails