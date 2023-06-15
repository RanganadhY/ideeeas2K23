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


const getAdminData = async (req, res) => {
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
        return res.status(200).json({"userWithUniqueIdExists":result})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({"message":"something went wrong with finding the unique id"})
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
                console.log("EMail is present")
                const user = {
                    "email":req.body.email,
                    "name":req.body.name
                }
                const result = await photographiaStudentSchema.create({email},user)
                console.log(result)
                return res.status(200).json({"studentSuccessfullyUpdated":result})
            }

            if(uniqueId)
            {
                console.log("EMail is not present")

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
        return res.status(500).json({"message":"error in updating student details"})
    }
}

module.exports.getAdminData = getAdminData;

module.exports.updateStudentData = updateStudentData;
module.exports.generateUniqueIds = generateUniqueIds;
module.exports.validateUniqueIds = validateUniqueIds;