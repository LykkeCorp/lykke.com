import React from 'react';

import Head from '../components/Head';
import {ApiFees} from '../components/ApiFees/ApiFees';


const ApiFeesPage = (props) => {
    return (
        <>
            <Head
                title="Lykke – Buy and sell cryptocurrency and digital assets"
                description="Global marketplace for any kind of assets built on the top of blockchain technology"
            />
            <ApiFees/>
        </>
    )
}

export default ApiFeesPage