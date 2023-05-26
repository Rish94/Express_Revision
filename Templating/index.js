const express = require('express');
const app = express();


const path = require('path'); //require for set path



app.set('view engine','ejs'); //express ko bata rahe he use ejs for templating

app.set('views',path.join(__dirname,'views')); //set the templates view files folder



app.use(express.static(path.join(__dirname,'public'))); // abb ham css files images use kr skte he ejs me





app.get('/',(req,res)=>{
    res.render('index');
})



app.get('/random',(req,res)=>{


    const randomno = Math.floor(Math.random()*100);

   // res.render('random');//without passing random value from server

    res.render('random',{randomno});//with passing random value from server
})




const todos = [
    "rishabh",
    "ashish",
    "ram"
];

app.get('/todos',(req,res)=>{

    res.render("todos",{todos})
})







app.listen(8000,()=>{
    console.log("Server listen");
})