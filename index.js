const express = require('express')
const userRouter = require('./router/users')
const app = express()

app.use(express.json()) // for parshing/json
app.use(express.urlencoded({ extended: true })) // for parshing application/x-www-form-urlencoded

app.get('/', function(req, res){
  const kelas = {
    id: 1,
    nama: "Nodejs"
  }
  res.json(kelas)
})

app.get('/about', function(req, res){
  // res.redirect('/users')
  res.redirect('https://expressjs.com/')
})

app.use(userRouter)

app.listen(3000, function(){
  console.log("Server Success!");
})