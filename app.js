const express = require('express')
const mongoose = require('mongoose')
const _ = require('lodash')
const morgan = require('morgan')
const blogRoutes = require('./routes/blogs')
// express app
const app = express()

//ejs view engine
app.set('view engine', 'ejs')

//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

//mongoDB
const mongoURI = 'mongodb+srv://alekos_blog:alekos_blog@cluster0.e63ohlp.mongodb.net/Blogger?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI)
    .then(result => {
        console.log('Connected to mongoDB')
        app.listen(3000)
        console.log('Connected on port 3000')
    }).catch(err=> {
        console.log(err)
    })


//ROUTES

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

//about route
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

//blogs display
app.use('/blogs', blogRoutes)

//404 page
app.use((req, res) => {
    res.render('404', {title : '404'})
})


