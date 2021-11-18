import React from 'react';
import {Image} from "antd";

function HomeImage() {
    return (

        <Image width={144} height={144} src={"/images/angular.png"} alt={"home logo"} preview={false}/>
    );
}

export default HomeImage;
