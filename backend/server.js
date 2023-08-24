const express = require('express')
const color = require('colors')
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`)) 