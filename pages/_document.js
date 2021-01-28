import Document, { Head } from "next/document";
import { Fragment } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <Fragment>
                <Head>
                  <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-K6LDVC7P76"
                  ></script>
                  <script>
                    dangerouslySetInnerHTML=
                    {{
                      __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', G-K6LDVC7P76);`,
                    }}
                  </script>
                </Head>
                <App {...props} />
              </Fragment>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
