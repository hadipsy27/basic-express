const express = require('express')
const router = express.Router()

let users = [
  {id: 1, name: "Hadi Prasetyo", email: "hadipsy27@gmail.com"},
  {id: 2, name: "Andi Suryanto", email: "andi@gmail.com"}
]

router.route('/users')
  .get(function(req, res){
    // res.send('Get Users')
    res.json(users)
  })
  .post(function(req, res){
    // res.send('Post Users')
    users.push(req.body)
    res.json(users)

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
  res.json(users)
})

router.delete('/users/:userId', function(req, res){
  // res.send(req.params.userId)
  let id = req.params.userId
  users = users.filter(user => user.id != id) // jika id user sama maka di hapus(di filter), jika beda maka di biarkan 
  res.send(users)
})

module.exports = router
