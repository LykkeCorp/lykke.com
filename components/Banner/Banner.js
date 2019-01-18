import React from 'react'
import {Banner, BannerHeader, BannerTitle, BannerText} from './styled'

export default props => (
    <Banner>
        <BannerHeader>
            <BannerTitle>{props.title}</BannerTitle>
        </BannerHeader>
        <BannerText>{props.text}</BannerText>
        {props.footer}
    </Banner>
);