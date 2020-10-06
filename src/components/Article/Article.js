import React from "react"
import './Article.css';

const Article = (props) => {
    console.log("testing props from Article", props.newsData.articles)

    const data = props.newsData.articles

    let displayNews = data.map( (article, index) => {
        return (
            <div>
                <p>Article Title: {article.title}</p>
                <p>News Source Name: {article.source.name}</p>
                <p>Article Author: {article.author}</p>
                <p>Description: {article.description}</p>
                <img src={article.urlToImage} />
                <p><a href={article.url} target=
                "_blank">Read Full Article</a></p>
                <p>Date: {article.publishedAt}</p> 
            </div>
        )
    })
    return (
        <>
        {displayNews}
        </>
    )
}

export default Article