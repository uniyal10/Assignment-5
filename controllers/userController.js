

const User = require('../models/User')



module.exports = function getUser(req, res) {
  User.findAll().then(data => res.send(data)).catch(err => console.log(err))
}

// module.exports = function updateUser(req, res) {
//   // User.update(req.body, {
//   //   where: {
//   //     id: req.body.id
//   //   }
//   // })
// }