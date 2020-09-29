const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')


const db = require('./config/database')

db.authenticate().then(() => console.log('database connected')).catch((err) => {
  console.log(err)
})


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('INDEX')
})




//routes

app.use('/user', require('./routes/user'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server started on port 5000'));
