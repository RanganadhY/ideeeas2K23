require('./db/mongoose')
const express = require("express")
const app = express()

const env = require('dotenv')
env.config({ path: __dirname + "/env/.env" })
console.log(__dirname)

const cors = require('cors')
app.use(express.json());
app.use(cors());

const triveeeaRoutes = require("./routes/triveeearoutes")
const photographiaRoutes = require('./routes/photographiaroutes')

app.use("/api/triveeea-routes/",triveeeaRoutes)
app.use("/api/photographia-routes/",photographiaRoutes)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})