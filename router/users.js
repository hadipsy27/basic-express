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
  const id = req.params
  res.send(id)
})

router.delete('/users/:userId', function(req, res){
  res.send(req.params.userId)
})

module.exports = router