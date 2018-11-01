import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

const navMenu = module.export = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      path: '',
      icon: 'line-chart',
      click: true,
      child: [
            {
                key: 'active_patients',
                name: 'Active Patients',
                path: 'active_patients'
            },
            {
                key: 'statistics',
                name: 'Statistics',
                path: 'statistics'
            },
            {
                key: 'statistics',
                name: 'Statistics',
                path: 'statistics'
            }
        ]
    },
    {
        key: 'favorites',
        name: 'Favorites',
        icon: 'star-o',
        click: false,
        child: [
            {
                key: 'active_patients',
                name: 'Active Patients',
                path: 'active_patients'
            },
            {
                key: 'statistics',
                name: 'Statistics',
                path: 'statistics'
            }
        ]
    }
  ];


class AppHeader extends Component {
    render() {
        return(
            <Header className="header">
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <nav className="navbar">
                    <div className="logo">
                        <span style={{padding: '15px'}}><Icon type="api" style={{ fontSize: 20, color: '#08c' }} /> Redtomato Design Studio</span>
                    </div>
                </nav>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;
