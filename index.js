require('dotenv').config()

// import lib
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const productsRoute = require('./routes/products')

// import lib
const handleError = require("./middlewares/error")
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routing
app.use('/api', productsRoute)

//error
app.use(handleError)

// start server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on port  ${PORT}`))