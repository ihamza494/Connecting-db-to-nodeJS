const express= require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
const EmpDataRouter = require('./routes/EmpData');

app.use(express.json());



app.use('/EmpData', EmpDataRouter)

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server listening on ${PORT}`);
    });
});
