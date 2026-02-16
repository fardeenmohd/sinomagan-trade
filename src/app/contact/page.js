import ContactClient from '@/components/ContactClient'; // Import the interactive part

// 👇 Now you can export metadata safely!
export const metadata = {
  title: 'Contact Us - Get a Quote & Global Support',
  description: 'Reach out to Sino Magan Indus for bulk inquiries, export quotes, and partnership opportunities. We offer 24/7 global support.',
  openGraph: {
    title: 'Contact Sino Magan Indus | Let\'s Discuss Global Trade',
    description: 'Ready to ship? Connect with our expert trade team for a seamless sourcing experience.',
    url: 'https://sinomagan.vercel.app/contact',
    images: [
      {
        url: '/images/contact-banner.jpg', 
        width: 1200,
        height: 630,
        alt: 'Contact Sino Magan Indus Support',
      },
    ],
  },
  alternates: {
    canonical: 'https://sinomagan.vercel.app/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Render the client component here */}
      <ContactClient />
    </>
  );
}