import React from 'react';
import App from 'next/app';
import "antd/dist/antd.css"
import SideBar from "../components/side-bar";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return <SideBar>
            <Component {...pageProps} />
        </SideBar>
    }
}

export default MyApp;
