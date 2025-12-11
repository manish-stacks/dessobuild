import "./globals.css";

export const metadata = {
  title: "DessoBuild - Expert Construction and Architecture Services | Vastu-Compliant Designs",
  description:
    "Transform your space with our comprehensive construction, architecture, and interior design services. We specialize in Vastu-compliant designs and sustainable solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
