import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import "../styles/scrollsnap.css";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import { HoverProvider } from '@/contexts/HoverContext';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Black Mirage | Marketing & Technology Solutions",
  description: "Black Mirage is a cutting-edge marketing and technology company delivering innovative solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${roboto.variable} font-sans antialiased`}>
        <HoverProvider>
          <Header />
          {children}
          <Footer />
        </HoverProvider>
      </body>
    </html>
  );
}
