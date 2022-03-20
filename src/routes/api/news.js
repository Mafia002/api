const axios  = require('axios');
const  Cheerio  = require('cheerio');
const express = require('express');

const routes = express.Router()


async function getArticles() {
    const articles = []

    try{
        const response = await axios.get('https://www.nytimes.com/news-event/coronavirus')

        const html = response.data
        const $ = Cheerio.load(html)
        $("a:contains('coronavirus'),a:contains('Coronavirus')").each(function () {
            const articlesTitle = $(this).text().trim()
            const articleUrl = $(this).attr('href')
            
            articles.push({
                title: articlesTitle,
                Url : `https://www.nytimes.com/${articleUrl}`,
                
            })
            console.log(articlesTitle);

        })
        return articles
    }catch(error){
        console.log(error.message);
    }
    
}



routes.get('/', async(req, res) => {
    try{
        const articles = await getArticles();
        res.json({
            status: "success",
            data: articles,
            message: 'from api/news'
        })
    } catch (error){
        console.log(error.message);
    }
})



module.exports = routes
