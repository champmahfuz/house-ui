import React from 'react';
import './AboutUs.css';
import img01 from '../../../images/about/about.jpg'
const AboutUs = () => {
    return (
        <div id="about">
            <h2 className="text-primary">About Us</h2>
            <section id="aboutUs" className="watch-now">
                <div className="banner flex items-center justify-between">

                    <div className="left flex-1">
                        <h2>Who are we</h2>

                        <p className="match-desc">
                            'DREAM HOUSE PROPERTIES LTD' is a real estate entrepreneur, who designs and helps to create great experiences and journeys for their clients. Our own journey began from the tea table of Bangladesh University of Engineering and Technology (BUET) cafeteria all the way to international conference table. The word 'SUVASTU' is an amalgamation of the Bengali words 'Su' meaning good experience, and 'Vastu' meaning ecology/ habitat.
                        </p>
                    </div>
                    <div className="right flex-1 flex justify-center">
                        <img src={img01} alt="" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AboutUs;