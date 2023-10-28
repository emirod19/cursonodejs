//const express =require('express') ESTO ES CON COMMON JS
import express from 'express'//ESTO ES CON ECMASCRIPT 6

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>chupala gato</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>chupala gato con el fucking about</h1>')
})

app.listen(3000)
console.log('Server on port',3000)