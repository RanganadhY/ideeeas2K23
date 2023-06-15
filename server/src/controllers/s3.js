require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')


const s3 = new S3({

})

//uploads a file to s3
function uploadFile(bucketName,file) {
    const fileStream = fs.createReadStream(file.path)
  console.log(bucketName)
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename
    }
  
    return s3.upload(uploadParams).promise()
  }
  exports.uploadFile = uploadFile