/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="images/logo.png" />
        <link rel="shortcut icon" href="/img/flag.png" />
        <link rel="icon" href="/static/img/favi.png" sizes="32x32" />
        <link rel="icon" href="/static/img/favi.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/static/img/favi.png" />
        {/* <meta name="author" content="nouthemes" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/fonts/Linearicons/Font/demo-files/demo.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>

        {/* bootstrap cdn  */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
