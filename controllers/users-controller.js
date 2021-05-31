let users = [
  {id: 1, name: "Hadi Prasetyo", email: "hadipsy27@gmail.com"},
  {id: 2, name: "Andi Suryanto", email: "andi@gmail.com"}
]

module.exports = {
  index: function(req, res){
    if(users.length > null){
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        date: req.time
      })
    } else{
      res.json({
        status: false,
        message: "Data Users masih kosong sob!",
        date: req.time
      })
    }
  },
  store: function(req, res){
    users.push(req.body)
    res.json({
      status: true,
      data: users,
      message: "Data User berhasil ditambahkan sob!",
      method: req.method,
      url: req.url,
      date: req.time
    })
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