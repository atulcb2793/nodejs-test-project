const express = require('express')
const path = require('path')
const app =express();

app.use(express.static(path.join(__dirname,'../public')))

app.get('/about', (req,res)=> {
    res.send('About page!');
})


app.get('/weather', (req,res)=> {
    res.send('weather page!');
})

app.get('/products', (req,res)=>{
    if(!req.query.test){
        return res.send('product missing')
    }
    res.send({
        address: req.query.test
    })
})

app.listen(3000,()=>{
    console.log('server is up')
})