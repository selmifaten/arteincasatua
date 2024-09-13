export const metadata = {
  title: "L'Arte in Casa Tua: Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link
          href="/img/424668747_918110523649811_4874409078525808894_n.jpg"
          rel="icon"
        />
        <link
          href="/img/424668747_918110523649811_4874409078525808894_n.jpg"
          rel="apple-touch-icon"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* <script src="/vendor/glightbox/js/glightbox.min.js"></script> */}
        <script src="/vendor/php-email-form/validate.js"></script>
        <script src="/js/main.js" defer />
      </head>
      <body>{children}</body>
    </html>
  );
}
