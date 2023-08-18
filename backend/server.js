// learn the MERN Stack - Express TM
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorhandler')
const port = process.env.PORT || 5002
const color = require('colors')
const connectDB = require('./config/db')

connectDB()

const app = express()

/*app.get('/api/goals', (req, res) => {
    // res.send('Get Goals')
    res.status(200).json({message: 'Get Goals'})
})*/

// add some middleware if you want to use req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(
    port, () => console.log(`Server starter at port ${port}`)
)
