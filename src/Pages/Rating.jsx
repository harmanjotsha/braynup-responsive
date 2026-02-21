import React from "react";
import "./rating.css";
import glassdoorImg from "../assets/glassdoor.png";
import googleImg from "../assets/google.png";
import indiamartImg from "../assets/Indiamart.png";
import trustpilotImg from "../assets/Trustpilot.png";
import justdialImg from "../assets/justdial.png";

const Rating = () => {
    const ratings = [
        { name: "Glassdoor", image: glassdoorImg },
        { name: "Google", image: googleImg },
        { name: "Indiamart", image: indiamartImg },
        { name: "Trustpilot", image: trustpilotImg },
        { name: "Justdial", image: justdialImg },
    ];

    return (
        <div className="ratingMainContainer">
            <h1 className="ratingTitle">Our Client Ratings</h1>
            <div className="ratingCardsContainer">
                {ratings.map((rating, index) => (
                    <div key={index} className="ratingCard">
                        <div className="ratingImageContainer">
                            <img src={rating.image} alt={rating.name} className="ratingImage" />
                        </div>
                        <div className="ratingDetails">
                            <p className="ratingStars">⭐⭐⭐⭐⭐</p>
                            <h3 className="ratingText">100+ Rating</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;