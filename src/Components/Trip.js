import "../Components/CSS/TripStyle.css";
import React from 'react';
import Tripdata from "./Tripdata";


export default function Trip() {
    return (
        <div className="trip">
            <h1>Frequently asked questions</h1>
            
            <div className="trip-container">
                <div className="tripcard">
                    
                    <Tripdata
                        heading="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                        text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                    />

                    <Tripdata
                        heading="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                        text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                    />

                    <Tripdata
                        heading="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                        text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                    />
                </div>
            </div>
        </div>
    )
}
