import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  title: "Sino Magan Indus Global Trade",
  description: "Premier Import-Export Management connecting India, China, and the Middle East.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-white text-brand-slate`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-brand-navy py-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Sino Magan Indus Global Trade LLP. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}