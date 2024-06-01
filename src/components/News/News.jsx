import React from 'react';
import './News.css';
import fort1 from "../../assets/fort1.jpg";
import fort2 from "../../assets/fort2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const News = () => {
    const newsData = [
        {
            date: '26',
            month: 'Mar',
            image: fort1,
            title: 'CURABITUR LOREM UISM QUIS',
            author: 'Admin',
            comments: 15,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...',
        },
        {
            date: '22',
            month: 'Mar',
            image: fort2,
            title: 'CURABITUR LOREM UISM QUIS',
            author: 'Admin',
            comments: 15,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...',
        },
        {
            date: '20',
            month: 'Mar',
            image: fort1,
            title: 'CURABITUR LOREM UISM QUIS',
            author: 'Admin',
            comments: 15,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...',
        },
        {
            date: '15',
            month: 'Mar',
            image: fort2,
            title: 'CURABITUR LOREM UISM QUIS',
            author: 'Admin',
            comments: 15,
            description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...',
        },
    ];

    return (
        <div className="news-container">
            <h2>LATEST NEWS</h2>
            <p>INTEGER CONGUE ELIT</p>
            <div className="news-list">
                {newsData.map((news, index) => (
                    <div className="news-item" key={index}>
                        <div className="image-container">
                            <img src={news.image} alt={news.title} />
                            <div className="news-date">
                                <p className="date">{news.date}</p>
                                <p className="month">{news.month}</p>
                            </div>
                        </div>
                        <div className="news-content">
                            <h5>{news.title}</h5>
                            <div className="news-meta">
                                <span>{news.author}</span>
                                <span className="comments">
                                    <FontAwesomeIcon icon={faComment  }   /> 
                                </span>   {news.comments}
                            </div>
                            <p>{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;