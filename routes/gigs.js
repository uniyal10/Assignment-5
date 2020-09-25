const express = require('express')

const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gigs')


router.get('/', (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render('gigs', {
        gigs
      })
    })
    .catch(err => console.log(err))
})


//add
router.get('/add', (req, res) => {
  const data = {
    title: 'looking for a react developer',
    technologies: 'react',
    budget: '$40',
    description: 'lorem ipsum Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes',
    contact_email: 'user@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data

  //insert

  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  }).then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))

})

module.exports = router