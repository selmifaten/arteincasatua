import "/public/vendor/bootstrap/css/bootstrap.min.css";
import "/public/vendor/bootstrap-icons/bootstrap-icons.css";
import "/public/vendor/fontawesome-free/css/all.min.css";
import "/public/vendor/glightbox/css/glightbox.min.css";
import "/public/vendor/swiper/swiper-bundle.min.css";
import "swiper/css/bundle";
import "/public/vendor/aos/aos.css";

import "./globals.css";

export const metadata = {
  title: "L'Arte in Casa Tua: Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

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
        <script src="/js/main.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
