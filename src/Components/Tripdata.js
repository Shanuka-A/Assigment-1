import React, { useState } from 'react';
import "../Components/CSS/TripStyle.css";

export default function Tripdata({ heading, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tripdata">
            <div className="question" onClick={toggleAccordion}>
                <h2>{heading}</h2>
                <span className={isOpen ? "icon-minus" : "icon-plus"}></span>
            </div>
            {isOpen && (
                <div className="answer">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
