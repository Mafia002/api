const express = require('express')

const routes = express.Router()
const newsRoutes = require('./api/news')
routes.use('news', newsRoutes)

routes.get('/', (req,res) => {
    res.json({
        message: 'from api/routes'
    })
})

module.exports = routes