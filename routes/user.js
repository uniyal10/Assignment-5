const express = require('express')
const User = require('../models/User')
const router = express.Router()
const db = require('../config/database')
const getUser = require('../controllers/userController')

router.get('/', getUser)


router.get('/add', (req, res) => {
  const user = {
    id: 4,
    firstname: 'kapil',
    middlename: "ranjan",
    lastname: 'uniyal',
    email: 'uniyal1001@gmail.com',
    phonenumber: 7988476924,
    role: 'developer',
    address: 'mystic falls'
  }
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

module.exports = router