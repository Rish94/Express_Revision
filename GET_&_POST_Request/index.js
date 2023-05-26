const express = require('express');

const app = express();

const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    console.log("ram");
})


app.get('/form',(req,res)=>{

   console.log(req.body);
    res.render('form');
})

// app.get('/user',(req,res)=>{

//     //console.log(req.query);
//     res.send("Get Request");
// })


app.post('/user',(req,res)=>{

    console.log(req.body);
    res.send("Post Request");
    //res.send(req.body);
})



app.post('/jsondata',(req,res)=>{

    console.log(req.body);
    res.send("Json DATA Conversion");
})


app.listen(5000,(req,res)=>{
    console.log("Server Started")
})