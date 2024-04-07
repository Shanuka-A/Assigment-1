import { Component } from "react";
import "../Components/CSS/DestinationStyle.css";

class DesData extends Component {
    render() {
        const headingStyle = {
            color: "#6B3CC9" 
        };

        const buttonStyle = {
            backgroundColor: "#F28D35", 
            color: "white", 
            padding: "10px 20px",
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
        };

        return (
            <div className={this.props.className}>
                <div className='des-text'>
                    <h2 style={headingStyle}>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <br />
                    <button style={buttonStyle}>LEARN MORE</button>
                </div>

                <div className='image'>
                    <img alt='img' src={this.props.img1} />
                </div>
            </div>
        );
    }
}

export default DesData;
