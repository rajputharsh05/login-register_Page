const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 8000;
const cors = require("cors")
const UserData = require('./mongoDB')
const bodyparser = require('body-parser');
const { Await } = require('react-router-dom');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect('mongodb+srv://hs7992476139:KOSgem8tijMk0Nws@cluster0.whwoemb.mongodb.net/?retryWrites=true&w=majority').catch((e)=>console.log(e)).then(
    app.listen(PORT,()=>{
        console.log('Server Running')
    })
)


app.post('/register',async (req,res)=>{
    console.log(req.body)
    const user = new UserData;
    user.Fname = req.body.Fname
    user.Lname = req.body.Lname
    user.password = req.body.Password
    user.Username = req.body.Username
    user.email = req.body.Email
    try{
        await user.save()
        console.log("require recived")
        res.send('End')
    }catch(err)
    {
        res.send("UserName is taken Enter another one")
    }
})

app.post('/login', async (req,res) => {
    const data = await UserData.find({Username:req.body.username}).catch((err)=>console.log(err)).then((docs)=>{
            if(docs.length === 0)
            res.send('NOTOK')
            else res.json(docs)
    })
})


// {
//     "fname" : "harsh",
    // "lname" : "singh",
    // "email" : "abs@gmail.com",
    // "username" : "harsh4op",
    // "password" : "password"
//   }