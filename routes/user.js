const express = require('express')
const User = require('../models/User')
const router = express.Router()
const db = require('../config/database')
const getUser = require('../controllers/userController')

router.get('/', getUser)


router.get('/add', (req, res) => {
  const user = req.body
  User.create(user).then(data => console.log(data)).catch(err => console.log(err))
})

router.post('/:id', (req, res) => {

  User.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(data => console.log(data)).catch(err => console.log(err))
})



router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => console.log(data)).catch(err => console.log(err))
})

module.exports = router