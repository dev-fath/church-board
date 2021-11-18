import Head from "next/head";
import React from "react";
import SideBar from "../../components/side-bar";

export default function Board() {
    return(
        <>

            <Head>
                <title>
                    Sckim New Board
                </title>
            </Head>
            <SideBar/>
            <div> this is board </div>
        </>
    )
}
