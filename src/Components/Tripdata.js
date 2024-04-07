import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import "../Components/CSS/TripStyle.css";

export default function Tripdata({ heading, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tripdata">
            <div className="question">
                <h2>{heading}</h2>
                <span className="icon-wrapper" onClick={toggleAccordion}>
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                </span>
            </div>
            {isOpen && (
                <div className="answer">
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
}
