import Document from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import { resetIdCounter } from 'react-tabs'

export default class LykkeDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    resetIdCounter();

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  }
}
