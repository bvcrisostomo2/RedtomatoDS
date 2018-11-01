import React from 'react';
import { Icon } from 'antd';

class ContactPage extends React.Component {
    render() {
        return(
            <div className="page-container">
                <h1 className="page-header">CONTACT</h1>
                <div className="contact-content">
                    <div className="contact-item">
                        <h2>Send us a message:</h2>
                        <form method="POST" action="https://formspree.io/info@redtomatodesignstudio.com">
                            <input type="text" name="name" placeholder="Name"/><br/>
                            <input type="text" name="email" placeholder="Email Address" /><br/>
                            <textarea name="message" placeholder="Message"></textarea><br/>
                            <button type="submit" className="send-btn" >Send</button>
                        </form>
                        <br/><br/>
                    </div>
                    <div className="contact-item">
                        <h2>Email us at <a href="mailto:info@redtomatodesignstudio.com">info@redtomatodesignstudio.com</a>:</h2>
                        <br/><br/>
                        <h2>Stay connected:</h2>
                        {/* <span><img src={fb} alt="fb-icon" width="40px" height="40px"/></span> */}
                        {/* <span><img src={insta} alt="instagram-icon" width="40px" height="40px"/></span> */}
                        <span>facebook @redtomatoDS</span><br/>
                        <span>instagram @redtomatoDS</span>
                        <br/><br/>
                        
                        <h2>Reach us:</h2>
                        <p><Icon type="mail" /> info@redtomatodesignstudio.com</p>
                        <p><Icon type="phone" /> +639xxxxxxxxx</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;