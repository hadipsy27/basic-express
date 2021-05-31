const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000

app.use(express.json()) // for parshing/json
app.use(express.urlencoded({ extended: true })) // for parshing application/x-www-form-urlencoded

// middleware
let dataDate = function(req, res, next){
  req.time = new Date().toString()
  next()
}
// run middleware
app.use(dataDate)

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

app.get('/', function(req, res){
  const kelas = {
    id: 1,
    nama: "Nodejs",
    date: req.time
  }
  // res.json(kelas)
  res.render('pages/index', {kelas: kelas})
})

app.get('/about', function(req, res){
  res.render('pages/about')
})

app.use(userRouter)

app.listen(port, function(){
  console.log("Server Success!");
})