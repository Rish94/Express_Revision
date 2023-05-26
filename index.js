const express = require('express');
const app = express();


// har ekk path prr request lag jayege yha se 
// app.use((req,res)=>{
//     // console.log(req); //print request object
//     // console.log("You made a request");




//     //send a response to a user
//     //res.send(Buffer.from("Radhe Radhe"));
//     res.send('<p>Response send</p>');
// })


//Routing----------------------------


// app.get('/',(req,res)=>{
//     res.send("Home Page")
// })

// app.get('/cat',(req,res)=>{
//     res.send('<h5>Meaooo</h5>');
// })

// app.get('/dog',(req,res)=>{
//     res.send('<h5>Woof woof</h5>');
// })


// app.get('*',(req,res)=>{
//     res.send('<h5>You Request a wrong Path , Request again</h5>')
// })




//Path parameters

app.get('/r/:subredit',(req,res)=>{


    const {subredit} = req.params; //destructuring object
    console.log(req.params);
    res.send(`radhe with subredit ${subredit}`);
})

//query parameters

app.get('/search',(req,res)=>{

    const {q} = req.query;
    res.send(`radhe with subredit ${q}`)
})




app.listen(8080,()=>{
    console.log("Server Started");


})