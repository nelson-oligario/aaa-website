const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const env = require('dotenv').config()
const port = process.env.PORT || 5500

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.once('open',() => {
   console.log("Database Online")
})

const userScehma = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   phone: String
})

const users = mongoose.model('data', userScehma)

app.get('/', (req,res) => {
   res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post', async (req,res) => {
   console.log(req.body)
   const {firstName, lastName, email, phone} = req.body
   const user = new users({
      firstName,
      lastName,
      email,
      phone
  });
   await user.save()
   // console.log(user)
   res.sendFile(path.join(__dirname, 'appreciation.html'))
})

app.listen(port, () => {
   console.log("Server Online")
})