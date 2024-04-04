import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTag(props){
    return (
        <Helmet>
            <title>{props.title}</title>

            <meta name="description" content={props.description} />
            <meta name="robots" content={props.robots} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.imgsrc} />
            <meta property="og:url" content={props.url} />

            <meta name="twitter:card" content="summary" /> 
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={props.imgsrc} />

            {/* <link rel="shortcut icon" href="../images/favicon.ico" />
            <link rel="icon" type="image/png" sizes="192x192" href="../images/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="180x180" href="../images/apple-icon-180x180.png" /> */}

        </Helmet>
    );
};

export default MetaTag;