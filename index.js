const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const morgan = require('morgan')
const config = require('./src/config/index')

const routes = require('./src/routes/api/news')

const app = express()

const PORT = config.port || 2200

app.use(morgan('dev'))


app.use('/api', routes)
app.use('/api/news', routes)

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        messege: 'hey😘'
    })
})



app.listen(PORT, () =>{
    console.log(`server is running on : ${PORT}`);
})
