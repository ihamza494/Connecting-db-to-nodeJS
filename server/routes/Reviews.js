const express = require('express');
const { Reviews } = require('../models');
const router = express.Router();



router.get('/:id', async (req, res) =>{
    const id = req.params.id;
    const review = await Reviews.findAll({where: { EmployeeDatumId: id}});
    res.json(review);
} )

router.post('/',async (req, res)=>{
    const review = req.body;
    await Reviews.create(review);
    res.json(review);
})



//router.post();

module.exports = router;