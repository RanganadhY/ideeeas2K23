// function generateRandomNum(max, min)  {
//     return Math.random() * (max - min ) + min;
// }

const generateRandomNum = async(req,res) => {
    const max = 999999;
    const min = 100000;
    const uniqueIds = [];
    // console.log( Math.random() * (max - min) + (min) )
    for( i = 0; i<3; i++  ) {
         uniqueIds[i] = Math.random().toString().substr(2, 6);
        console.log(uniqueIds);

        // console.log( Math.random().toString().substr(2, 6));
    }
    console.log('hey')
    res.send(uniqueIds)
//  console.log( Math.random() * (req.max - req.min) + (req.min) )
//     return Math.random() * (req.max - req.min) + (req.min) ; 



}

module.exports.generateRandomNum = generateRandomNum;