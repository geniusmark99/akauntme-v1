import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
