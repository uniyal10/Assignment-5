const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')


const db = require('./config/database')



db.authenticate().then(() => console.log('database connected')).catch((err) => {
  console.log(err)
})


const app = express()


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.use(bodyParser.urlencoded({ extended: false }))


//views

//set static folder


app.use(express.static(path.join(__dirname, 'public')))

//routes

app.use('/gigs', require('./routes/gigs'))

app.get('/', (req, res) => {
  res.render('index', { layout: 'landing' })
})



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server started on port 5000'));
