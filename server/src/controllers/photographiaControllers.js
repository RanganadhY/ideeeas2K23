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
        return res.status(200).json({'details':teamDetails})
    }
    catch(err){
        console.log(err)
        return res.status(404).json({'error':'Image details not found'})
    }
}
const validateStudentResponse = async(req,res) => {
    try{
        const {userId,isEmail,imageId} = req.body;
        let queryField;
        if(isEmail ==="true"){
            queryField = "email"
        }
        else{
            queryField= "uniqueId"
        }
        
        console.log(queryField)
        const response = await photographiaStudentSchema.findOneAndUpdate({[queryField]:userId},{"hasVoted":true})
        console.log(response)
        const result = await photographiaAdminSchema.findOneAndUpdate({_id:imageId},{ $inc :{votes:+1}})       
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
        // const {name} = req.body
        // const result = await photographiaAdminSchema.findOne({name})
        // return res.status(200).json({"votes-obtained":result})

        const photographiaResults = await photographiaAdminSchema.find({}).select("+name +votes")
        console.log(photographiaResults)
        return res.status(200).json({"results":photographiaResults})
    }
    catch(err){
        console.log(err)
        return res.send(404).json({"message":"participant not found"})
    }
}

const isVoted = async(req,res)=>{
    const {id,isEmail} = req.params;
    try{
        let queryField;
        if(isEmail =="true"){
            queryField = "email"
        }
        else{
            queryField= "uniqueId"
        }

        const {hasVoted} = await photographiaStudentSchema.findOne({[queryField]:id}).select("+hasVoted")
        console.log(hasVoted)
        return res.status(200).json({hasVoted})
    }catch(e){
        console.log(e)
        return res.status(500).json({"message":"Something went wrong"})
    }
}
module.exports.uploadImageDetails = uploadImageDetails;
module.exports.displayImageDetails = displayImageDetails;
module.exports.validateStudentResponse = validateStudentResponse;
module.exports.calculatedResult = calculatedResult;
module.exports.isVoted = isVoted