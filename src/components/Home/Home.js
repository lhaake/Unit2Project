import React, {useState} from "react"
import Form from "../Form/Form"
import Article from "../Article/Article"
import './Home.css';

const Home = () => {
//state to keep track of news data from API
const [newsData, setNewsData] = useState([])


//JS Date 
    const dateString = new Date().toDateString();
    const date = new Date().toISOString().slice(0, 10); 

// Make API Call
const getNews = async (input) => {
    console.log("Testing API data")

    let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=${date}&sortBy=relevancy&language=en&apiKey=7967fe7ec6e44428a417b6bc133b26f4`


    const response = await fetch(newsUrl)
    const json = await response.json()
    setNewsData(json)
    console.log(json)
}

    return (
        <>
            <h1>Top Headlines for Today, {dateString}</h1>
            <h1>This is the Homepage</h1>
            <Form getNews={getNews} />
            {/* Conditional rendering   */}

            { newsData.articles ? <Article newsData={newsData} /> : null }

        </>
    )
}

export default Home


//     let newsUrl = `http://newsapi.org/v2/everything?q=${input}&from=2020-10-05&sortBy=popularity&apiKey=7967fe7ec6e44428a417b6bc133b26f4`