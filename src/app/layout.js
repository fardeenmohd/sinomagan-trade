import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  title: "Sino Magan Indus Global Trade",
  description: "Premier Import-Export Management connecting India, China, and the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-brand-navy">
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}