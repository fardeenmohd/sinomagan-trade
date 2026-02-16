import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  // 1. Base URL: specifices the domain for social images to work correctly
  metadataBase: new URL('https://sinomagan.vercel.app'), 

  // 2. Title Template: 
  // If a child page has title: "Contact Us", it becomes "Contact Us | Sino Magan Indus" automatically.
  title: {
    default: 'Sino Magan Indus | Global Trade & Logistics Partner',
    template: '%s | Sino Magan Indus',
  },

  // 3. Global Description
  description: 'Your trusted partner for global trade. Exporter of Premium Indian Spices, Basmati Rice, Halal Meat, and Industrial Components. Bridging markets with integrity.',

  // 4. Keywords for the whole site
  keywords: [
    'Global Trade LLP',
    'Export Import India',
    'Commodity Trading',
    'Sino Magan Indus',
    'Bulk Food Supplier',
    'Industrial Exporter'
  ],

  // 5. Author & Creator info
  authors: [{ name: 'Sino Magan Indus', url: 'https://sinomagan.vercel.app' }],
  creator: 'Sino Magan Indus',

  // 6. Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sinomagan.vercel.app',
    siteName: 'Sino Magan Indus',
    title: 'Sino Magan Indus | Global Trade Excellence',
    description: 'Connecting global markets with premium Indian commodities and industrial solutions.',
    images: [
      {
        url: '/images/og-default.jpg', // Create a 1200x630px generic banner for this
        width: 1200,
        height: 630,
        alt: 'Sino Magan Indus Global Trade',
      },
    ],
  },

  // 7. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Sino Magan Indus | Global Trade Partner',
    description: 'Premium Spices, Rice, Meat & Industrial Supplies from India.',
    images: ['/images/og-default.jpg'], // Reuses the same image
  },

  // 8. Robots (Allow everything by default)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 9. Icons (Favicon)
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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