const triveeeaStudentSchema = require('../models/triveeeaStudentModel')
const triveeeaAdminSchema = require('../models/triveeeaAdminModel')
const photographiaStudentSchema = require('../models/photographiaStudentModel')
const photographiaAdminSchema = require('../models/photographiaAdminModel')
const AdmZip = require("adm-zip");
const fs = require("fs-extra");
const XLSX = require("xlsx");

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
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(uniqueIds);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'uniqueIds');

        const folderName = Date.now().toString();
        const folderPath = require('path').resolve(__dirname) + "/temp/";

        fs.mkdirSync(`${folderPath}/${folderName}`);
        const workbookName = `${new Date().getTime()}.xlsx`
        const workbookFilePath = `${folderPath}/${folderName}/${workbookName}`; // Set the temporary file path
        XLSX.writeFile(workbook, workbookFilePath);

        // snippet for creating zip file for the coupon codes excel sheet
        const zip = new AdmZip();
        const files = fs.readdirSync(`${folderPath}/${folderName}`);
        files.forEach((file)=>{
            const filePath = `${folderPath}/${folderName}/${file}`;
            zip.addLocalFile(filePath);
        })
        const zipFilePath = `${folderPath}/${folderName}.zip`;
        zip.writeZip(zipFilePath);
        const zipFileData = fs.readFileSync(zipFilePath);
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

const displayUniqueIds = async(req,res) => {
    try{
        const response = await photographiaStudentSchema.findById({"uniqueId":1})
        console.log('in display route')
        console.log(response)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({"error":"unable to get the unique Ids"})
    }
}

const validateUniqueIds = async(req,res) => {
    try{
        const uniqueId = req.body.userUniqueId;
        const EventName = req.body.EventName; 
        const addr = require("address")
        console.log(addr.ip())

        let result = {};
        if(EventName === "triveeea"){
            const response =  await triveeeaStudentSchema.find({"uniqueId":uniqueId});
            console.log(response);
            if(!response){
                return res.status(404).json({"message":"unique Id not found"})
            }
            else{
                return res.status(200).json({"message":"succesfull"});
            }
        }
        if(EventName === "photographia"){
            console.log(uniqueId)
            const response = await photographiaStudentSchema.findOne({"uniqueId":uniqueId})
            console.log(response)
            if(!response){
                return res.status(404).json({"message":"unique Id not found"})
            }
            else if(response&&(response.name != null)){
                console.log("hello")
                result= {
                    "isUniqueIdFound":true,
                    "isUserDetailsUpdated":true
                }
            }
            
            else if(response&& (response.name == null)){

                result= {
                    "isUniqueIdFound":true,
                    "isUserDetailsUpdated":false
                }
            }
        }
        console.log(result)
        return res.status(200).json({"uniqueIdDetails":result})
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
        const addr = require("address")
        console.log(addr.ip())
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
        
        // if(EventName === "photographia")
        // {
        //     const {email} = req.body 
        //     const {uniqueId} = req.body
        //     const {ipAddress} = req.body.ipAddress
        //     console.log(email)

        //     if(email && ipAddress)
        //     { 
        //         console.log("EMail is being used to login")
        //         const user = {
        //             "email":req.body.email,
        //             "name":req.body.name,
        //             "ipaddress":req.body.ipAddress
        //         }
        //         const validateEmail = await photographiaStudentSchema.findOne({ipAddress})
        //         console.log(validateEmail)
        //         if(!validateEmail)
        //         {
        //             console.log()
        //             const result = await photographiaStudentSchema.create(user)
        //             console.log(result)
        //             return res.status(200).json({"studentCreatedSuccessfully":result})
        //         }
        //         else if(validateEmail && validateEmail.hasVoted === false){
        //             const result = await photographiaStudentSchema.findOneAndUpdate({ipAddress},user)
        //             console.log(result)
        //             return res.status(200).json({"studentSuccessfullyUpdated":result})
        //         }
        //        else{
        //         return res.status(403).json({"error":"user already exists"})
        //        }
        //     }
            
        //     if(uniqueId)
        //     {
        //         console.log("EMail is not being used to login")

        //         const user = {
        //             "name":req.body.name,
        //             "usn":req.body.usn
        //         }
        //         if(user.name && user.usn){
        //             const result = await photographiaStudentSchema.findOneAndUpdate({uniqueId},user)
        //             console.log(result)
        //             return res.status(200).json({"studentSuccessfullyUpdated":result})
        //         }
        //         else
        //         return res.status(401).json({'message':'invalid credentials'})
        //     }
        // }

        if(EventName === 'photographia')
        {
            const {email,ipAddress,name} = req.body
            const user ={
                'email':email,
                'ipaddress':ipAddress,
                'name':name
            }
            const isIpPresent = await photographiaStudentSchema.findOne({"ipaddress":ipAddress})
            const isEmailPresent = await photographiaStudentSchema.findOne({email})
            console.log(isIpPresent,isEmailPresent)
            if(!isIpPresent && !isEmailPresent)
            {
                console.log(1)
                const result = await photographiaStudentSchema.create(user)
                console.log(result)
                return res.status(200).json({'isEligibleToMove':true})
            }
            else if(!isIpPresent && isEmailPresent)
            {
                if(!isEmailPresent.hasVoted)
                {
                    console.log(2.1)
                    return res.status(200).json({'isEligibleToMove':true})
                }   
                else
                {
                    console.log(2.2)
                    return res.status(200).json({'isEligibleToMove':false})
                }
            }

            else if(isIpPresent && isEmailPresent)
            {

                if(!isEmailPresent.hasVoted)
                {
                    console.log(3.1)
                    return res.status(200).json({'isEligibleToMove':true})
                }   
                else
                {
                    console.log(3.2)
                    return res.status(200).json({'isEligibleToMove':false})
                }
            }

            else if(isIpPresent && !isEmailPresent)

            {
                console.log(4)
                return res.status(200).json({'isEligibleToMove':false})
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

const getQuestionsCount = async(req,res)=>{
    try{
        const questionCount = await triveeeaAdminSchema.find()
        return res.status(200).json({"questionCount":questionCount[0].questions})
    }catch(e){
        console.log(e)
        return res.status(500).json({"message":"Something went wrong"})
    }
}

const saveTimeStamp = async(req, res)=>{
    try{
        const uniqueId = req.body.uniqueId;
        const time = req.body.timeStamp;

        if(!uniqueId || !time){
            return res.status(400).json({"message":"Something went wrong"});
        }

        const details = await triveeeaStudentSchema.find({uniqueId:uniqueId});

        if(details.length === 0 ){
            const triveeeaStudentSchema = new triveeeaAdminSchema({
                uniqueId:uniqueId,
                clickedAt:time
            }).save();
        }else{
            details[0].clickedAt = time;
            details[0].save();
        }
        res.status(200).json({"message":"successfull"})
    }catch(err){
        console.log(err);
        return res.status(500).json({"message":"Something went wrong"});
    }
}

const changeStatus = async(req, res)=>{
    try{
        console.log("hi")
        const buzzer = triveeeaAdminSchema.find({});
        console.log(buzzer)
        buzzer[0].status = !buzzer[0].status;
        await buzzer[0].save();
        res.status(200).send({"message":"successfull","status":!buzzer[0].status})
    }catch(err){
        console.log(err);
        return res.status(500).json({"message":"Something went wrong"});
    }
}

module.exports.uploadAdminData = uploadAdminData;
module.exports.updateStudentData = updateStudentData;
module.exports.generateUniqueIds = generateUniqueIds;
module.exports.displayUniqueIds = displayUniqueIds;
module.exports.validateUniqueIds = validateUniqueIds;
module.exports.uploadStudentResponse = uploadStudentResponse;
module.exports.validateStudentResult = validateStudentResult;
module.exports.getQuestionsCount = getQuestionsCount;
module.exports.saveTimeStamp = saveTimeStamp;
module.exports.changeStatus = changeStatus;