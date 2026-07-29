import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KZ COMPUTERS | Premium Computer Services',
  description: 'Pro-level computer repairs, CCTV installation, and custom PC building in Bangalore. Experience the next level of service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="main-container">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
