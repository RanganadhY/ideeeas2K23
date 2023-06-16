const triveeeaStudentSchema = require('../models/triveeeaStudentModel')
const triveeeaAdminSchema = require('../models/triveeeaAdminModel')
const photographiaStudentSchema = require('../models/photographiaStudentModel')
const photographiaAdminSchema = require('../models/photographiaAdminModel')
const generateUniqueIds = async (req, res) => {

    try {
        const NoOfUniqueIds  = req.body.NoOfUniqueIds;
        const EventName = req.body.EventName;
        NoOfUIds = {NoOfUniqueIds:NoOfUniqueIds}
        console.log(NoOfUIds)

        if(EventName === "triveeea")
            result = await triveeeaAdminSchema.create(NoOfUIds) 

        // {EventName === "triveeea" ? 
        //  result = await triveeeaAdminSchema.create(NoOfUIds) :
        //  result = await photographiaAdminSchema.create(NoOfUIds)
        // }
        const uniqueIds = [];
        for (i = 0; i < NoOfUniqueIds; i++) {
            uniqueIds[i] = { "uniqueId": (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000) }
        }
        //uniqueId is the field name in schema
        console.log(uniqueIds)
        {EventName === "triveeea" ? 
            response = await triveeeaStudentSchema.insertMany(uniqueIds) :
            response = await photographiaStudentSchema.insertMany(uniqueIds)
        }
        console.log(response)
        return res.status(200).json({ "uniqueIdsGenerated": response })

    }

    catch (err) {
        console.log(err);
       return res.status(500).json({ "message": "Something went wrong with generating unique nos for triveeea" });
    }
}


const uploadAdminData = async (req, res) => {
    try {
        const NoOfQues = req.body.NoOfQues
        const answers = []
        for (i = 0; i < NoOfQues; i++)
            answers[i] = req.body.answers[i]

        const user = {
            questions: NoOfQues,
            answers: answers
        }
        console.log(user)

        const result = await triveeeaAdminSchema.updateOne(user)
        return res.status(200).json({ "adminDataUpdated": result })
    }

    catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "Something went wrong with entering admin data" })
    }
}


const validateUniqueIds = async(req,res) => {
    try{
        const {userUniqueId} = req.body;
        const EventName = req.body.EventName; 
        console.log({userUniqueId})
        console.log(EventName)
        if(EventName === "triveeea")
            result = await triveeeaStudentSchema.findOne({"uniqueId":userUniqueId})? true: false
        if(EventName === "photographia"){
            result = await photographiaStudentSchema.findOne({"uniqueId":userUniqueId})? true: false
            console.log(result)
            console.log(EventName)
        }
        console.log(result)
        if(result)
        return res.status(200).json({"userWithUniqueIdExists":result})
        else
        return res.status(404).json({"message":"unique Id not found"})
    }
    catch(err){
        console.log(err)
       return res.status(404).json({"message":"unique Id not found"})
    }

}

const updateStudentData = async(req,res) => {
    try{
        const {EventName} = req.body
        console.log(EventName)
        if(EventName === "triveeea")
        {
            const {uniqueId} = req.body
            console.log(uniqueId)
            const user = {
                "name":req.body.name,
                "usn" :req.body.usn
            }
            console.log(user)
            const result = await triveeeaStudentSchema.findOneAndUpdate({uniqueId},user)
            console.log(result)
            return res.status(200).json({"studentSuccessfullyUpdated":result})
        }

        if(EventName === "photographia")
        {
            const {email} = req.body 
            const {uniqueId} = req.body
            console.log(email)
            console.log(uniqueId)

            if(email)
            {
                console.log("EMail is being used to login")
                const user = {
                    "email":req.body.email,
                    "name":req.body.name
                }
                const validateEmail = await photographiaStudentSchema.findOne({email})?true:false
                console.log(validateEmail)
                if(!validateEmail){
                    const result = await photographiaStudentSchema.create(user)
                    console.log(result)
                    return res.status(200).json({"studentSuccessfullyUpdated":result})
                }
               else{
                return res.status(403).json({"error":"user already exists"})
               }
            }
 
            if(uniqueId)
            {
                console.log("EMail is not being used to login")

                const user = {
                    "name":req.body.name,
                    "usn":req.body.usn
                }
                const result = await photographiaStudentSchema.findOneAndUpdate({uniqueId},user)
                console.log(result)
                return res.status(200).json({"studentSuccessfullyUpdated":result})
            }
        }
    }
    catch(err){
        console.log(err)
        return res.status(404).json({"message":"Student not found"})
    }
}

const uploadStudentResponse = async(req,res) => {
    try{
        const {uniqueId,studentResponse} = req.body
        console.log(uniqueId)
        console.log(studentResponse)
        const updateObj = {
            $push:{answersSelected:{$each:studentResponse,slice:-studentResponse.length}},
            "hasSubmitted":true
        }
        const response = await triveeeaStudentSchema.findOneAndUpdate({uniqueId},updateObj)
    //    const response = await triveeeaStudentSchema.findOneAndUpdate({uniqueId},{
    //     "answersSelected":studentResponse,"hasSubmitted":true})
    //     // console.log(studentResponse)
        // console.log(response)
       return res.status(200).json({"message":response})
        }
    catch(err){
        console.log(err)
        return res.status(500).json({"message":"error in uploading student response"})
    }
}
const validateStudentResult = async(req,res) => {
    try{
        const {uniqueId} = req.body
        console.log(uniqueId)
        const hasSubmitted = await triveeeaStudentSchema.findOne({uniqueId})
        if(hasSubmitted){
            const response = await triveeeaStudentSchema.findOne({uniqueId},{answersSelected:1,score:1})
            const adminData = await triveeeaAdminSchema.find({},{answers:1});
            // console.log(response)
            // console.log(adminData)
            // console.log(adminData[0].answers[0])
            // console.log(response.answersSelected[1].answer)
            // console.log(adminData[0].answers.length) 
            for(i = 0 ;i<adminData[0].answers.length;i++)
            {
                // console.log(adminData[0].answers[i])
                // console.log(response.answersSelected[i].answer)
                if(adminData[0].answers[i] == response.answersSelected[i].answer)
                {
                    response.score++
                    console.log(response.score)
                }
            }
            console.log(response.score) 

            const result = await triveeeaStudentSchema.findOneAndUpdate({uniqueId},{score:response.score})
            return res.status(200).json({"studentScore":result})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({"message":"Something went wrong with validating student response"})
    }
}
module.exports.uploadAdminData = uploadAdminData;
module.exports.updateStudentData = updateStudentData;
module.exports.generateUniqueIds = generateUniqueIds;
module.exports.validateUniqueIds = validateUniqueIds;
module.exports.uploadStudentResponse = uploadStudentResponse;
module.exports.validateStudentResult = validateStudentResult;