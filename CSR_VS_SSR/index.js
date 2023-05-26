const express = require('express');
const app = express();

const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    res.send("CSR VS SSR");
})





const todos = ["Go to GYM","Buy Groceries","Watch Movies","Radhe Radhe Shyam","Go to Shopping"]


app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.listen(8000,()=>{
    console.log("Server Started");
})