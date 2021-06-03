const { v4: uuidv4 } = require('uuid')
const User = require('../models/users-model')

let users = [
  {id: 1, name: "Hadi Prasetyo", email: "hadipsy27@gmail.com"},
  {id: 2, name: "Andi Suryanto", email: "andi@gmail.com"}
]

module.exports = {
  index: function(req, res){
    res.render('pages/users/index', {users})
    // ---------------------------------
    // if(users.length > null){
    //   res.json({
    //     status: true,
    //     data: users,
    //     method: req.method,
    //     url: req.url,
    //     date: req.time
    //   })
    // } else{
    //   res.json({
    //     status: false,
    //     message: "Data Users masih kosong sob!",
    //     date: req.time
    //   })
    // }
  },
  show: function (req, res) {
    // res.send(req.params.id)
    const id = req.params.id
    const dataUser = users.filter(user => {
      return user.id == id
    })

    // res.send(dataUser) // json
    // console.log(dataUser[0])
    res.render('pages/users/show', {userData: dataUser})
    res.end()
  },
  create: function (req, res) {
    res.render('pages/users/create')
  },
  store: function(req, res){

    const user = new User({ // instan object dari model User
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    user.save(function(err, res){
      if(err){
        console.log(err)
      } else {
        console.log(res)
      }
    })
    res.redirect('/users')

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, function(err, res){
      if(err){
        console.log(err)
      } else {
        console.log(res)
      }
    })

    // ------------------------------
    // users.push({
    //   id: uuidv4(),
    //   name: req.body.name,
    //   email: req.body.email      
    // })
    // res.redirect('/users')
    //------------------------------------------
    // users.push(req.body)
    // res.json({
    //   status: true,
    //   data: users,
    //   message: "Data User berhasil ditambahkan sob!",
    //   method: req.method,
    //   url: req.url,
    //   date: req.time
    // })
  },
  update: function(req, res){
    const id = req.params.id
    users.filter(user => {
      if(user.id == id){
        user.id = id,
        user.name = req.body.name,
        user.email = req.body.email
  
        return user
      }
    })
    res.json({
      status: true,
      data: users,
      message: "Data User berhasil diedit sob!",
      method: req.method,
      url: req.url,
      date: req.time
    })
  },
  delete: function(req, res){
    // res.send(req.params.userId)
    let id = req.params.userId
    // jika id user tidak sama maka tidak di filter, jika sama maka difilter(di hapus)
    users = users.filter(user => user.id != id) // jika id user sama maka di hapus(di filter), jika beda maka di biarkan
    res.send({
      status: true,
      data: users,
      message: "Data User berhasil dihapus sob!",
      method: req.method,
      url: req.url,
      date: req.time
    })
  }

}