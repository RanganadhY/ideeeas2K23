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
        res.status(500).json({ "message": "Something went wrong with generating unique nos for triveeea" });
    }
}


const getAdminData = async (req, res) => {
    try {
        const NoOfQues = req.body.NoOfQues
        // noOfQuestions = {questions:NoOfQues}
        // console.log(noOfQuestions)

        // const NoOfUIds = req.body.NoOfUIds
        // noOfUniqueIds = {NoOfUniqueIds:NoOfUIds}
        // console.log(noOfUniqueIds)

        const answers = []
        for (i = 0; i < NoOfQues; i++)
            answers[i] = req.body.answers[i]

        const user = {
            questions: NoOfQues,
            answers: answers
        }
        console.log(user)

        const result = await triveeeaAdminSchema.updateOne(user)
        res.status(500).json({ "adminDataUpdated": result })
    }

    catch (err) {
        console.log(err)
        res.status(500).json({ "message": "Something went wrong with entering admin data" })
    }
}



module.exports.getAdminData = getAdminData;
module.exports.generateUniqueIds = generateUniqueIds;