const express = require('express');

const app = express();


app.get('/', (req,res)=> {
    return res.json({
        name: "murali",
        email:"mul@22gmail.com",
        age: 12,
    })
})




app.listen(9000, ()=> {
    console.log("server is running...")
})