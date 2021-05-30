const express = require('express')
const router = express.Router()

let users = [
  {id: 1, name: "Hadi Prasetyo", email: "hadipsy27@gmail.com"},
  {id: 2, name: "Andi Suryanto", email: "andi@gmail.com"}
]

router.route('/users')
  .get(function(req, res){
    if(users.length > 0){
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      })
    } else{
      res.json({
        status: false,
        message: "Data Users masih kosong sob!"
      })
    }
  })
  .post(function(req, res){
    users.push(req.body)
    res.json({
      status: true,
      data: users,
      message: "Data User berhasil disimpan sob!",
      method: req.method,
      url: req.url
    })
  })

router.put('/users/:id', function(req, res){
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
    url: req.url
  })
})

router.delete('/users/:userId', function(req, res){
  // res.send(req.params.userId)
  let id = req.params.userId
  users = users.filter(user => user.id != id) // jika id user sama maka di hapus(di filter), jika beda maka di biarkan
  res.send({
    status: true,
    data: users,
    message: "Data User berhasil dihapus sob!",
    method: req.method,
    url: req.url
  })
})

module.exports = router
