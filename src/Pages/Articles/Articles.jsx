import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import "./Articles.css"
const Articles = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("articles.json")
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div className='articles-container container d-flex justify-content-center align-items-center flex-column'>
            <h2 className='heading my-3'>Recent Articles</h2>
            <div className="float bg-info mb-5"></div>
            <div className="articles">
                {
                    articles.map((article, index) => <Article
                        key={article.id}
                        article={article}
                        index={index}
                    ></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;