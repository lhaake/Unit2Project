import React, { useState, useEffect } from "react"
import Form from "../Form/Form"
import Article from "../Article/Article"
import './Home.css';

const Home = (props) => {
    //state to keep track of news data from API
    const [newsData, setNewsData] = useState([])

    // JS Date 
    const dateString = new Date().toDateString();
    const date = new Date().toISOString().slice(0, 10);

    // News Sources 
    const trusteddomains = [
        "techcrunch.com", "wired.com", "news.vice.com", "usatoday.com/news", "time.com", "washingtonpost.com", "wsj.com", "npr.org", "politico.com", "theatlantic.com", "nytimes.com", "latimes.com", "bostonglobe.com", "nymag.com", "newsweek.com", "nbcnews.com", "news.nationalgeographic.com", "msnbc.com", "fortune.com", "espn.go.com", "us.cnn.com", "cbsnews.com", "buzzfeed.com", "pbs.org/newshour", "bloomberg.com", "bbc.co.uk/news", "axios.com", "apnews.com", "aljazeera.com", "abcnews.go.com"
    ]
    
    const proxyUrl = "http://cors-anywhere.herokuapp.com/"
    
    // Make API Call
    const getNews = async (input) => {

        let newsUrl = `${proxyUrl}http://newsapi.org/v2/everything?q=${input}&from=${date}&sortBy=relevancy&language=en&domains=${trusteddomains}&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`

        const response = await fetch(newsUrl)
        const json = await response.json()
        setNewsData(json)
        console.log(json)
    }
    
    // Articles related to covid-19 on page load
    useEffect(() => {
        getNews("covid-19")

    }, []);

    return (
        <div className="home">

            <h1>Today's Top Headlines</h1>
            <Form getNews={getNews} />
            
            {/* Conditional rendering   */}
            { newsData.articles ? <Article newsData={newsData} handleFavoritesClick={props.handleFavoritesClick} /> : null}
     
        </div>
    )
}

export default Home