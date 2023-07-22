const express=require("express")
const newsRouter = express.Router();
const axios = require("axios")

newsRouter.get("",async (req,resp)=>{
    // resp.render("news");
    try{
        const newsAPI= await axios.get('https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=93058090609f431a854da705362d30be')
        const {data} = newsAPI;
        const {articles}=data;
        console.log(articles)
        resp.render("news",{articles});
    }
    catch(error)
    {
        if(error.response)
        {
            resp.render("news",{articles:null})
            console.log(error.response.data)
            console.log(error.response.status)
        }
    }
    
})

module.exports = newsRouter;