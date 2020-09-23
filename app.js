const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')


const db = require('./config/database')


db.authenticate().then(() => console.log('database connected')).catch((err) => {
  console.log(err)
})


const app = express()

app.get('/', (req, res) => {
  res.send('INDEX')

})


//routes

app.use('/gigs', require('./routes/gigs'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server started on port 5000'));
