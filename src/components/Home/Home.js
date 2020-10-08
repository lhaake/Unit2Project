import React, { useState, useEffect } from "react"
import Form from "../Form/Form"
import Article from "../Article/Article"
import './Home.css';

const Home = () => {
    //state to keep track of news data from API
    const [newsData, setNewsData] = useState([])

    //JS Date 
    const dateString = new Date().toDateString();
    const date = new Date().toISOString().slice(0, 10);

    const trusteddomains = [
        "techcrunch.com", "wired.com", "news.vice.com", "usatoday.com/news", "time.com", "washingtonpost.com", "wsj.com", "npr.org", "politico.com", "theatlantic.com", "nytimes.com", "latimes.com", "bostonglobe.com", "nymag.com", "newsweek.com", "nbcnews.com", "news.nationalgeographic.com", "msnbc.com", "fortune.com", "espn.go.com", "us.cnn.com", "cbsnews.com", "buzzfeed.com", "pbs.org/newshour", "bloomberg.com", "bbc.co.uk/news", "axios.com", "apnews.com", "aljazeera.com", "abcnews.go.com"
    ]


    // Make API Call
    const getNews = async (input) => {
        console.log("Testing API data")

        let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=${date}&sortBy=relevancy&language=en&domains=${trusteddomains}&pageSize=10&apiKey=7967fe7ec6e44428a417b6bc133b26f4`

        const response = await fetch(newsUrl)
        const json = await response.json()
        setNewsData(json)
        console.log(json)
    }
    
    useEffect(() => {
        getNews("covid-19")

    }, []);

    return (
        <div className="home">

            <h1>Today's Top Headlines</h1>
            <Form getNews={getNews} />
            {/* Conditional rendering   */}

            { newsData.articles ? <Article newsData={newsData} /> : null}
        </div>
    )
}

export default Home


//     let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=2020-10-05&sortBy=popularity&apiKey=7967fe7ec6e44428a417b6bc133b26f4`