const express = require('express');
const { EmployeeData } = require('../models');
const router = express.Router();

router.get('/',async (req, res)=>{
    const EmpList =await EmployeeData.findAll();

    res.json(EmpList);
});

router.get('/byId/:id', async (req, res) =>{
    const id = req.params.id;
    const employee = await EmployeeData.findByPk(id);
    res.json(employee);
} )

router.post('/',async (req, res)=>{
    const Employee = req.body;
    await EmployeeData.create(Employee);
    res.json(Employee);
})



//router.post();

module.exports = router;