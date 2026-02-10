import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const neuePower = localFont({
  src: [
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/NeuePowerTrial/NeuePowerTrial-Ultra.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://davaoyoungexecutives.com'),
  title: "Davao Young Executives - Empowering Future Leaders",
  description: "A non-profit organization dedicated to empowering young professionals and executives in Davao City through networking, mentorship, and community service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${neuePower.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
