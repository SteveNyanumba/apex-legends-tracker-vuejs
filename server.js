const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})
const app = express()
const apiroutes = require('./routes/api')
const routes = require('./routes/Web')
const PORT = process.env.PORT


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Main Directory
app.use(express.static(__dirname + '/public'))


// Frontend Router
app.use('/', routes)

// Server Router
app.use('/api/v1/profile', apiroutes)

app.listen(PORT, ()=>{
    console.log(`App running in ${process.env.NODE_ENV} on port ${PORT}`);
    
})