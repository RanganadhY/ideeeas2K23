require('./db/mongoose')
const express = require("express")
const app = express()

const env = require('dotenv')
env.config({ path: __dirname + "/env/.env" })
console.log(__dirname)

const cors = require('cors')
app.use(express.json());
const allowedDomains=["http://photographia-ideeas2k23.s3-website.ap-south-1.amazonaws.com","http://localhost:3000","http://localhost:3001"]
app.use(cors({  
    credentials:true,
    origin:function (origin, callback) {
        // bypass the requests with no origin
        if (!origin) return callback(null, true);
        if (allowedDomains.indexOf(origin) === -1) {
            let msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const triveeeaRoutes = require("./routes/triveeearoutes")
const photographiaRoutes = require('./routes/photographiaroutes')

app.use("/api/triveeea-routes/",triveeeaRoutes)
app.use("/api/photographia-routes/",photographiaRoutes)
app.all("/*",(req,res)=>{
    res.send("page not found");
});

const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})