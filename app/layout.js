
import './globals.css';
import { montserrat, playfair } from './fonts';

export const metadata = {
  metadataBase: new URL("https://evataxsolutions.ca"),
  title: {
    default: "Eva Tax Solutions | CRA Certified Tax Services in Canada",
    template: "%s | Eva Tax Solutions",
  },
  description:
    "Professional Canadian tax services including T1 personal tax, T2 corporate tax, GST/HST filing and bookkeeping. CRA certified experts serving Toronto and all of Canada.",
  keywords: [
    "Tax Services Canada",
    "Toronto Tax Consultant",
    "CRA Certified Tax Expert",
    "T1 Personal Tax Canada",
    "T2 Corporate Tax Filing",
    "GST HST Filing Ontario",
    "Bookkeeping Services Toronto",
    "Tax refund Canada",
    "T1 tax filing help",
    "T2 corporate tax return",
    "Small business tax Ontario"
  ],
  openGraph: {
    title: "Eva Tax Solutions | Canadian Tax Experts",
    description:
      "Professional Canadian tax services including T1 personal tax, T2 corporate tax, GST/HST filing and bookkeeping.",
    url: "https://evataxsolutions.ca",
    siteName: "Eva Tax Solutions",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/tab_logo.svg", // Using the tab logo as explicitly requested for SEO
        width: 800,
        height: 600,
        alt: "Eva Tax Solutions Logo",
      },
    ],
  },
  icons: {
    icon: "/images/tab_logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Eva Tax Solutions",
  url: "https://evataxsolutions.ca",
  logo: "https://evataxsolutions.ca/images/tab_logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M1H 2Y4",
    addressCountry: "CA",
  },
  areaServed: "Canada",
  telephone: "+1-705-555-7890",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-700 bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
