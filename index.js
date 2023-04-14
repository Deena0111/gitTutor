const express =require('express')
const app=express();

app.listen(3000)

app.post('/user',(req,res)=>{
    const user={
        fullName:req.body.fullName,
        age:req.body.age
    }
    res.send(`your name is ${user.fullName} and age is ${user.age}`)
})

