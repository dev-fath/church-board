import { Layout, Menu } from 'antd';
import {
    HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UnorderedListOutlined,
} from '@ant-design/icons';
import React from "react";
import Link from "next/link";
import HomeImage from "./home-image";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;


const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
`;

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <Link href={"/"}><a><HomeImage /></a></Link>
                    <br/>
                    <br/>
                    <Menu
                        style={{width: 256}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        <Menu.Item key="1" icon={<HomeOutlined/>}>
                            <Link href={"/main/home"}>home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UnorderedListOutlined/>}>
                            <Link href={"/main/board"}>board</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <StyledContent>
                        {this.props.children}
                    </StyledContent>
                </Layout>
            </Layout>
        );
    }
}

export default SideBar;
