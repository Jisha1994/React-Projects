import React, { useState } from "react";

function NewsInfo() {
    const [news, setNews] = useState('');
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    const apiKey = '4b4e5b006eb84a90b16853f818970c22'
    const fetchNews = async () => {
        if (!news) return;
        
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(news)}&apiKey=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                setArticles(data.articles);
                setError(''); 
            } else {
                setError(data.message || 'Error fetching news data');
            }
        } catch (err) {
            setError('Failed to fetch news data. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h1>News Articles</h1>
            <input 
                type="text" 
                placeholder="Enter search term" 
                value={news} 
                onChange={(e) => setNews(e.target.value)} 
            />
            <button onClick={fetchNews}>Get News</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {articles.length > 0 && (
                <div>
                    {articles.map((article, index) => (
                        <div key={index} className="article">
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" >Read more</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsInfo;
