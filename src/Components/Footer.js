import React from "react";

import LogoImage from "../Assets/Logo.png"; // Import your logo image

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundColor: "#5a2fb9" }}>
            <div className="sb__footer section_padding" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="sb__footer-links" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', textAlign: 'left', marginBottom: '0rem' }}>

                    <div className="sb__footer-links-div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <div className="logo-section" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <img src={LogoImage} alt="AT DIGITAL Logo" className="footer-logo" style={{ width: '150px' }} /> 
                            
                            {/* Adjust width as needed */}
                        </div>
                        <a href="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Your goal is our target. Not anything in between. 
                            We use online marketing platforms and tools to achieve single objective - your business results.</p>
                        </a>


                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Our Technologies</h4>
                        <a href="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>ReactJS</p>
                        </a>
                        <a href="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Gatsby</p>
                        </a>
                        <a href="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>NextJS</p>
                        </a>
                        <a href="/employer" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>NodeJS</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Our Services</h4>
                        <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Social Media Marketing</p>
                        </a>
                        <a href="/press" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Web & Mobile App Development</p>
                        </a>
                        <a href="/career" style={{ color: 'white', textDecoration: 'none' }}>
                            <p style={{ fontSize: '12px', lineHeight: '15px', margin: '0.5rem', cursor: 'pointer' }}>Data & Analytics</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div" style={{ width: '150px', margin: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', color: 'white' }}>
                        <h4 style={{ fontSize: '16px', lineHeight: '17px', marginBottom: '0.9rem', color: 'white' }}>Stay With Us</h4>
                        <div className="socialmedia" style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-linkedin"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0.5rem' }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <hr style={{ color: 'white !important', width: '100%' }} />
                <div className="sb__footer-below" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '0.2rem' }}>
                    <div className="sb__footer-copyright" style={{ fontSize: '13px', lineHeight: '15px', color: 'rgb(255, 255, 255)', fontWeight: '600' }}>
                        <p>
                            @{new Date().getFullYear()} Shanuka. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <a href="/terms" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '13px', lineHeight: '15px', marginRight: '2rem', color: 'white', fontWeight: '600' }}>
                                <p>Terms & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '13px', lineHeight: '15px', marginRight: '40rem', color: 'white', fontWeight: '600' }}>
                                <p>Privacy</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;

