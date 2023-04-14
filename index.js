const express =require('express')
const app=express();

app.listen(3000)

app.post('/user',(req,res)=>{
    const user={
        fullName:req.body.fullName,
        age:req.body.age,
        mobile:req.body.mobile
    }
    res.send(`your name is ${user.fullName} and age is ${user.age}`)
})

app.get('/getUser',(req,res)=>{
    const user={
        name:"wood",
        age:30
    }
    res.send(`your name is ${user.name} and age is ${user.age}`)
})

