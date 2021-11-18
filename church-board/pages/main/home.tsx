import Head from "next/head";
import React from "react";
import SideBar from "../../components/side-bar";

export default function Home() {
    return (
        <>

            <Head>
                <title>
                    Sckim New Home
                </title>
            </Head>
            <SideBar/>
            <div> this is home </div>
        </>
    )
}
