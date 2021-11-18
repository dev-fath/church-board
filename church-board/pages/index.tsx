import React, { useState } from "react";
import Head from "next/head";
import {Button} from "antd";

export default function Home() {
    const [text, setText] = useState<string>("자바스크립트");

    setTimeout(() => {
        setText("타입스크립트")
    }, 1000)

    return (
        <div className="container">
            <div>
                <Button type={'primary'}>{text} 적용 완료</Button>
            </div>
        </div>
    );
}
