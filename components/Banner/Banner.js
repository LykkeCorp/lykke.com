import React from 'react'
import {Banner, BannerHeader, BannerTitle, BannerText} from './styled'
import {bool} from 'prop-types';

const BannerComponent = (props) => (
  <Banner className={props.wide ? "wide" : ""}>
      <BannerHeader>
          <BannerTitle>{props.title}</BannerTitle>
      </BannerHeader>
      <BannerText className={props.smallText ? "small" : ""}>{props.text}</BannerText>
      {props.footer}
  </Banner>
);

BannerComponent.propTypes = {
  wide: bool,
  smallText: bool
}

export default BannerComponent