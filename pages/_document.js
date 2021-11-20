import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
  render () {
    return (
            <Html>
                <Head>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="/static/assets/img/favicon.png" />
                <link href="/static/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/static/assets/vendor/fontawesome/css/all.min.css" rel="stylesheet" />
                <link href="/static/assets/vendor/custom-icon/style.css" rel="stylesheet" />
                <link href="/static/assets/vendor/vl-nav/css/core-menu.css" rel="stylesheet" />
                <link href="/static/assets/vendor/animate.min.css" rel="stylesheet" />
                <link
                    href="/static/assets/vendor/magnific-popup/magnific-popup.css"
                    rel="stylesheet"
                />
                <link href="/static/assets/vendor/owl/assets/owl.carousel.min.css" rel="stylesheet" />
                <link
                    href="/static/assets/vendor/owl/assets/owl.theme.default.min.css"
                    rel="stylesheet"
                />
                <link href="/static/assets/css/main.css" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="/static/assets/vendor/vl-nav/css/effects/slide-menu.css"
                />
                </Head>
                <body className="bg-gray">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
    )
  }
}
