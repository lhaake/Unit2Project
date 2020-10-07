import React from "react"
import './Article.css';

const Article = (props) => {
    console.log("testing props from Article", props.newsData.articles)

    const data = props.newsData.articles

    let displayNews = data.map((article, index) => {
        return (
            <div className="article">
                { article.urlToImage ?
                    <img src={article.urlToImage} /> : ""}
                {/* { article.title !== article.title ?
                    <h3 className="title">Title: {article.title}</h3>: null }  */}
                {/* if the article.title is equal to a title in the array that has already been rendered, dont render (handling duplicate articles). data.includes(article.title) */}
                <h3 className="title">Title: {article.title}</h3>
                <ul>
                    <li>News Source: {article.source.name}</li>
                    <li>Author: {article.author}</li>
                    <li>Description: {article.description}</li>
                    <li><a href={article.url} target=
                        "_blank">Read Full Article</a></li>
                </ul>


                {/* <p>Date: {article.publishedAt}</p>  */}
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