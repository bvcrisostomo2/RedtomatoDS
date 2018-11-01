import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {
    render() {
        return(
            <Footer style={{ textAlign: 'center', backgroundColor: 'rgb(171,211,186)' }}>
                © Redtomato Design Studio 2018
            </Footer>
        );
    }
}

export default AppFooter;
