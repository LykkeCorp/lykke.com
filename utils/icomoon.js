import {createGlobalStyle} from 'styled-components';

const Icomoon = createGlobalStyle`
  @font-face {
    font-family: icomoon;
    src:  url("static/fonts/icomoon.eot");
    src:  url("static/fonts/icomoon.eot#iefix") format("embedded-opentype"),
      url("static/fonts/icomoon.ttf") format("truetype"),
      url("static/fonts/icomoon.woff") format("woff"),
      url("static/fonts/icomoon.svg#icons") format("svg");
    font-weight: normal;
    font-style: normal;
  }
 
  .icomoon {
    font-family: icomoon !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icomoon-blogpost-icn:before {
    content: "\\e907";
  }
`;

export default Icomoon;
