const photographiaAdminSchema = require('../models/photographiaAdminModel');
const photographiaStudentSchema = require('../models/photographiaStudentModel');
const { uploadFile } = require('./s3')
 
const uploadImageDetails = async(req,res) => {
    try{
        const {name} = req.body;
        const photographiaImg = req.files.photographiaImg[0];
        // console.log(photographiaImg)
        const BUCKET_NAME="ideeeas-2k23-events-server"
        const imageS3 = await uploadFile(BUCKET_NAME,photographiaImg);
        console.log(imageS3)
        console.log({
            "name":name,
            "photo":imageS3.Location
        })
        const result =await photographiaAdminSchema.create( {
            "name":name,
            "photo":imageS3.Location
        })
        return res.status(200).json({"image and details uploaded successfully":result})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({"message":"error in uploading image and its details"})
    }
}
 
const displayImageDetails = async(req,res) => {
    const teamDetails = await photographiaAdminSchema.find({}).select("-votes ")
    try{
        console.log(teamDetails)
        return res.status(200).json({'details':teamDetails})
    }
    catch(err){
        console.log('err')
        return res.status(404).json({'error':'Image details not found'})
    }
}
const validateStudentResponse = async(req,res) => {
    try{
        const {_id} = req.body;
        const {uniqueId} = req.body;
        const {email} = req.body;
        console.log(uniqueId)
        // const name = req.body.name;  
        // console.log(voteDetails)  
        if(uniqueId){
            const response = await photographiaStudentSchema.findOneAndUpdate({uniqueId},{"hasVoted":true})
            console.log(response)
        }

        if(email){
            const response = await photographiaStudentSchema.findOneAndUpdate({email},{"hasVoted":true})
            console.log(response)

        }
        const n = 2
        console.log(typeof(n))
        const result = await photographiaAdminSchema.findOneAndUpdate({_id},{ $inc :{votes:+1}})       
        console.log(result)

        return res.status(200).json({"message":"successfully vote casted"})

    }
    catch(err){
        console.log(err);
        return res.send(404).json({"message":"student not found"})
    }
}

const calculatedResult = async(req,res) => {
    try{
        const {name} = req.body
        
        const result = await photographiaAdminSchema.findOne({name})
        return res.status(200).json({"votes-obtained":result})
    }
    catch(err){
        console.log(err)
        return res.send(404).json({"message":"participant not found"})
    }
}
module.exports.uploadImageDetails = uploadImageDetails;
module.exports.displayImageDetails = displayImageDetails;
module.exports.validateStudentResponse = validateStudentResponse;
module.exports.calculatedResult = calculatedResult;