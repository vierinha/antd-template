import React from 'react';
import { Layout, Menu, Icon, Input } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const App = () => (
    <div className="App">
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={false}>
                <div className="logo"><Icon type="build" /> APP</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="line" />
                        <span>Menu 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="line" />
                        <span>Menu 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="line" />
                        <span>Menu 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="line" />
                        <span>Menu 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#212529', padding: 0, textAlign: 'right', color: '#fff' }} >
                    <Search className="navsearch" placeholder="Search..." onSearch={value => console.log(value)} enterButton />
                    <Icon className="navicons" type="user" />
                </Header>

                <Content
                    style={{
                        margin: '12px 8px',
                        padding: 12,
                        background: '#fff',
                        minHeight: 280,
                    }}
                >
                </Content>
            </Layout>
        </Layout>
    </div>
);

export default App;