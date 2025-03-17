import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>novel-from-future</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" href="/icon-192x192.png"/>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
