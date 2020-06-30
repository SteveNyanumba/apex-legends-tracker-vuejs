const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})
const app = express()
const routes = require('./routes/Web')
const PORT = process.env.PORT || 5000


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/profile', routes)

app.listen(PORT, ()=>{
    console.log(`App running in ${process.env.NODE_ENV} on port ${PORT}`);
    
})