import { montserrat } from "@/app/ui/fonts";
import FooterSection from "@/components/homePage/Footer";
import Header from "@/components/homePage/Header";
import { Inter } from "next/font/google";
import Script from "next/script";
import "swiper/css";
import "./globals.css";

export const metadata = {
  title: "MHB Academy ",
  description: "mhb academy",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <Script
            src="https://code.jquery.com/jquery-3.6.3.slim.min.js"
        strategy="afterInteractive"

          />
          <Script
            src="https://myhealthbuddy.edmingle.com/js-sdks/signup-sdk/signup-sdk.js?v=2.8"
        strategy="afterInteractive"
        defer
      />

      <body className={`${montserrat.className} text-custom-black`}>
         <iframe
            src="https://myhealthbuddy.edmingle.com/js-sdks/signup-sdk/iframe.php?subdomain=myhealthbuddy"
            id="iframe"
            className="iframe"
            style={{
              width: '100vw',
              height: '100vh',
              border: 'none',
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 10000,
              display: 'none',
            }}
        />




        <Header />
        {children}
        <FooterSection />
        <Script defer src={`/assets/inst.js?c=${new Date().getTime()}`} />
      </body>
    </html>
  );
}
