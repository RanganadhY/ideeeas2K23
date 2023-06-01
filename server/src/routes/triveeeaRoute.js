const express = require('express')
const router = express.Router();

const triveeeaController = require('../controllers/triveeeaControllers')
// router.post('/uniqueId',triveeeaController.generateRandomNum);
router.post('/uniqueId',triveeeaController.generateRandomNum, async(req,res) => {
    req.body.max = 999999;
    req.body.min = 100000;
    console.log("post request called")
})

// router.post('/uniqueId',async(req,res) => {
//     console.log("post req");
//     res.send('post req');
// })
module.exports = router;