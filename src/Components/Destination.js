import React from 'react';
import "../Components/CSS/DestinationStyle.css";
import DesData from './DesData';
import image1 from '../Assets/image 1.png';
import image2 from '../Assets/image 2.png';



export default function Destination() {
    return (
        <div className='destination'>
           

            <DesData
                className="first-des"
                heading="Web & Mobile App Development"
                text="Your web and mobile Apps are pieces of the puzzle to grow your business. 
                We use frameworks which tailor content and engagement methods to respond to different 
                intents shown by your potential customers who interact with your business online."
            
                img1={image1}
                
            />
            


            <DesData
                className="first-des-reverse"
                heading="Digital Strategy Consulting"
                text="Your digital strategy should complement the overall marketing strategy of the company. 
                In online marketing, each component will never work in isolation and every business needs a different mix. 
                We provide a clear concept and strategic overview to find the most efficient model for your business."

                img1={image2}
                
            />
        </div>
    )
}
