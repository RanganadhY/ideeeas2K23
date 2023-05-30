const dataGetFunc = async(req,res)=>{
    console.log("get requeted logged")
}

const dataPostFunc =async(req,res)=>{
    console.log("post request")
}

module.exports.dataGetFunc = dataGetFunc
module.exports.dataPostFunc = dataPostFunc