import { Menu } from 'antd';
import {
    HomeOutlined, UnorderedListOutlined,
} from '@ant-design/icons';
import React from "react";
import Link from "next/link";
import HomeImage from "./home-image";

const SideBar = () => {
    return (
        <>
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
        </>
    );
};

export default SideBar;
