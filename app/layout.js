
import './globals.css';
import { montserrat, playfair } from './fonts';

export const metadata = {
  title: 'Eva Tax Solutions - Simplified Taxes for Canadians',
  description: 'Maximize your refunds with trusted, CRA-certified tax experts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-700 bg-background">
        {children}
      </body>
    </html>
  );
}
