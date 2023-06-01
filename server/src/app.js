require('./db/mongoose')
const express = require("express")

const app = express()

const env = require('dotenv')
env.config({ path: __dirname + "/env/.env" })
console.log(__dirname)

const port = process.env.PORT
console.log(port)

const cors = require('cors')
const data = require('./routes/dataRoute')

app.use(cors());
app.use('/api/data-routes', data);

const uniqueId = require('./routes/triveeeaRoute')
app.use('/api/triveeeaRoute', uniqueId);
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})