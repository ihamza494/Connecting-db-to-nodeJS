const express= require('express');
const app = express();
const PORT = 3030;
const db = require('./models');
const EmpDataRouter = require('./routes/EmpData');
const ReviewRouter = require('./routes/Reviews');
const cors =  require("cors");

app.use(express.json());

app.use(cors());

app.use('/EmpData', EmpDataRouter)
app.use('/reviews', ReviewRouter)

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server listening on ${PORT}`);
    });
});
