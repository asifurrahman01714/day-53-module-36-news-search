import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d2a62c4f79c43268504c5e41f5a3d34';
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.articles);
            setArticles(data.articles);
        })
    }, []);
    
    return (
        <div className="row">
            {
                articles.map(article => <News article={article} key={article.title}></News>)
            }
        </div>
    );
};

export default TopHeadlines;