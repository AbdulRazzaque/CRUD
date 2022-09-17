// const express = require('express')
import express from 'express'
const app=express()
import connectDB from './db/connectdb.js'
import {join} from 'path'
const port = process.env.PORT || '3000'
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
import web from './routes/web.js'
connectDB(DATABASE_URL)

// Middle ware 
app.use(express.urlencoded({extended:false}))

// Static File 
app.use(express.static(join(process.cwd(),"public")))
app.use('/edit',express.static(join(process.cwd(),"public")))

// import './view/partials/'

// Load Routes 
app.use('/',web)

// Load ejs engin
app.set('views','./view')

app.set("view engine", "ejs");


app.listen(port,()=>{
    console.log(`Server is Listing at htt://localhost:${port}`)
})
