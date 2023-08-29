const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Posts');


const dburi = 'mongodb+srv://ahd:JnZoTn5lLZpOSWNa@cluster0.eh9taen.mongodb.net/timeline?retryWrites=true&w=majority'
mongoose.connect(dburi)
.then((result)=> app.listen(3000))  
.catch((err)=> console.log(err));
const app = express();


app.set('view engine','ejs');  


app.use(express.static('public')) 

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.redirect('/home')
});



app.post('/',(req,res)=>{
    const post = new Post(req.body);
    post.save()
    .then((result)=>{
          res.redirect('/')
    })
    .catch((err)=>{
       console.log(err)
    })
})


app.get('/home',(req,res)=>{
    Post.find().sort({createdAt: -1})   
    .then((result)=>{
       res.render('index',{posts: result});
    })
    .catch((err)=>{
        console.log(err)
    })
})

