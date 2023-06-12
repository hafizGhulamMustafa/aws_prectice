const express = require('express');
const app = express()
const morgan = require('morgan')
const port = 3002;

app.use(morgan('dev'))

app.get('/user-list',(req, res)=>{
    let result ={
        id:12,
        name:'mustafa'
    }
    res.status(200).json(result)
    console.log("user_list api response")
    console.log("user_list api response")
})

app.get('/user-details',(req, res)=>{
    let result ={
        id:13,
        name:'mustafa'
    }
    res.status(200).json(result)
    console.log("user_details api response")
    console.log("user_details api response")

})

app.listen(port, ()=>{
    console.log('App is running on port '+port)
})