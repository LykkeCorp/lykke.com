import React from "react";
import {Grid, Row, Col} from 'react-styled-flexboxgrid';

import Head from "../components/Head";
import {Policy} from "../components/PrivacyPolicy/Policy";


const PrivacyPolicy = (props) => {
    return (
        <>
            <Head
                title="Lykke – Buy and sell cryptocurrency and digital assets"
                description="Global marketplace for any kind of assets built on the top of blockchain technology"
            />
            <Policy/>
        </>
    )
}

export default PrivacyPolicy