import Head from "next/head";
import React, {useEffect, useState} from "react";
import SideBar from "../../components/side-bar";
import {Button, Space, Table, Tag} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

export default function Board() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/api/board').then(res => res.json()).then((result) => {
            setIsLoaded(true);
            setItems(result)
        }, (error) => {
            setIsLoaded(true);
            setError(error)
        })
    }, [])
    return(
        <>
            <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
            <Table columns={columns} dataSource={items}/>          
        </>
    )
}
