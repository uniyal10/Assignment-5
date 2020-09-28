const express = require('express')

const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gigs')

const Sequelize = require('sequelize')
const op = Sequelize.Op


router.get('/', async (req, res) => {
  try {
    const data = await Gig.findAll()
    res.render('gigs', { gigs: data })
  }
  catch {
    console.log('something wrong')
  }
})

//add gig form

router.get('/add', function (req, res) {
  res.render('add')
})

//add
router.post('/add', (req, res) => {

  let { title, technologies, budget, description, contact_email } = req.body

  let errors = []

  if (!title) {
    errors.push({ text: 'Please add a title' })
  }
  if (!technologies) {
    errors.push({ text: 'Please add a technology' })
  } if (!description) {
    errors.push({ text: 'Please add a description' })
  } if (!contact_email) {
    errors.push({ text: 'Please add a contact email' })
  }

  if (errors.length > 0) {
    res.render('add', {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email

    })
  } else {
    if (!budget) {
      budget = 'Unknown'
    }
    else {
      budget = `$${budget}`
    }

    technologies = technologies.toLowerCase().replace(/, /g, ',')
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email
    }).then(gig => res.redirect('/gigs'))
      .catch(err => console.log(err))
  }


  //insert



})



router.get('/search', async (req, res) => {
  let { term } = req.query
  term = term.toLocaleLowerCase()
  try {
    const data = await Gig.findAll({ where: { technologies: { [op.like]: '%' + term + '%' } } })
    res.render('gigs', { gigs: data })
  }
  catch {
    console.log('something wrong')
  }

})



module.exports = router