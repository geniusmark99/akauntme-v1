import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Head from 'next/head'


export const metadata: Metadata = {
  title: "Akauntme:",
  description: "Your Accountable Partner Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" data-theme="dark">
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body
        className={`antialiased font-(family-name:--Canva-Sans)`}
      >
        <>
          <Toaster />
          {children}
        </>

      </body>
    </html>
  );
}
