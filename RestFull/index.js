const express = require('express');
const app = express();

const path = require('path');


app.get('/',(req,res)=>{
    res.send("GIST blogs Concept")
})


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded({extended:true}));

const comments = [
    {
       id:0,
        username:'Ram',
        text:"Nice product"
    },
    {
        id:1,
         username:'Shyam',
         text:"Nice product Brother"
     },
     {
        id:2,
         username:'Rishabh',
         text:"Nice product Dear"
     }
]


app.listen(7000,()=>{
    console.log("Gist Started");
})



//list all comments
app.get('/coments',(req,res)=>{
    res.render('index',{comments});
});



//for add new comment page
app.get('/comments/new',(req,res)=>{
    res.render('new'); //ekk new form manao and data manwao form ke throw and send it to commentnew add page and add comments 
})


//after fill details use post method to add the comments in comments array
app.post('/comments/newadd',(req,res)=>{
    const {username,text} = req.body;

    comments.push({username,text,id:comments.length});

    //res.send("Post Request data Save");
    res.redirect('/coments'); //direct add comment pr jake rediect ho jao
})