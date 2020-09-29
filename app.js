const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const User = require('./models/User')

const db = require('./config/database')

db.authenticate().then(() => console.log('database connected')).catch((err) => {
  console.log(err)
})


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/load', (req, res) => {
  const data = fs.readFileSync('./data.json', 'utf-8')
  const actualData = JSON.parse(data)
  actualData.map(async user => {
    try {
      await User.create(user)
    }
    catch {
      res.send('something wrong')
    }

  })
  res.send('data loaded sucessfully')
})




//routes

app.use('/user', require('./routes/user'))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server started on port 5000'));
