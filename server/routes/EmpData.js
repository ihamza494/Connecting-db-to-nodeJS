const express = require('express');
const { EmployeeData } = require('../models');
const router = express.Router();

router.get('/',async (req, res)=>{
    const EmpList =await EmployeeData.findAll();

    res.json(EmpList);
});

router.post('/',async (req, res)=>{
    const Employee = req.body;
    await EmployeeData.create(Employee);
    res.json(Employee);
})



//router.post();

module.exports = router;