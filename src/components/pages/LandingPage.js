import React from 'react';
import './pages.css';

var services = [
    {
        "name": "Branding",
        "desc": "corporate identity"
    },
    {
        "name": "Graphic Design",
        "desc": "design layout"
    },
    {
        "name": "Photography",
        "desc": "products, events and more"
    },
    {
        "name": "Stickers",
        "desc": "customized, die-cut stickers, packaging labels and more"
    },
    {
        "name": "Prints",
        "desc": "stickers, invitations, calling cards"
    },
    {
        "name": "Web Design",
        "desc": "responsive web designs, ecommerce, CMS"
    },
    {
        "name": "Digital Marketing",
        "desc": "marketing using facebook, twitter, and instagram"
    },
    {
        "name": "Digital Marketing",
        "desc": "marketing using facebook, twitter, and instagram"
    },
];

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    hoverOn() {
        this.setState({hover: true})
    }
    hoverOff() {
        this.setState({hover: false})
    }
    render() {
        return(
            <div className="">
                <div className="landing-page">
                    <div className="slogan">
                        {/* <span>Ketchup on paper</span> */}
                        <span>Spice up your ideas!</span>
                    </div>
                    <div className="services-container">
                        <h1>What We Do</h1>
                        {/* <div className="services"> */}
                        {
                            // services.map((item) =>
                            // <div key={item.name} className="service-item">
                            //     {item.name}<br/>
                            //     <div className="service-overlay">
                            //         <p className="service-desc">{item.desc}</p>
                            //     </div>
                            // </div>
                            // )
                        }
                        {/* </div> */}
                        {/* <div className="services"> */}
                            <div className="wrapper">
                                {/* <div className="branding">Branding</div>
                                <div className="graphics">Graphic Design</div>
                                <div className="photog">Photography</div>
                                <div className="web">Web Design</div>
                                <div className="digital">Digital Marketing</div>
                                <div className="stickers">Stickers</div> */}
                                {
                                services.map((item) =>
                                <div key={item.name} className="service-item">
                                    {item.name}
                                    <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" alt="sample" className="service-img" />
                                    <div className="service-overlay">
                                        <p className="service-desc">{item.desc}</p>
                                    </div>
                                </div>
                                )
                                }
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;