const express =require('express')
const app=express();

app.listen(3000)

app.post('/user',(req,res)=>{
    const user={
        name:req.body.name,
        age:req.body.age
    }
    res.send(`your name is ${name} and age is ${age}`)
})

