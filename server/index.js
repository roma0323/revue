const express =require('express');
const app = express()

const Articlerouter = require('./routes/api/post')
app.use('/routes/api',Articlerouter);


app.get('/',(req,res)=>{
    res.send('asdsssf')
})
app.listen(5000)