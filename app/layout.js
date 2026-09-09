import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import CustomCursor from '@/components/CustomCursor';

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
          <CustomCursor />
          <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'flex-end'
          }}>
            <ThemeToggle label />
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
            [data-theme="light"] [style*="background: rgba(255, 255, 255, 0.05)"],
            [data-theme="light"] [style*="background: rgba(255,255,255,0.05)"] {
              background: var(--surface) !important;
            }
            [data-theme="light"] [style*="background: rgba(255, 255, 255, 0.1)"],
            [data-theme="light"] [style*="background: rgba(255,255,255,0.1)"] {
              background: var(--surface-hover) !important;
            }
            [data-theme="light"] [style*="background: rgba(255, 255, 255, 0.02)"],
            [data-theme="light"] [style*="background: rgba(255,255,255,0.02)"] {
              background: var(--glass-bg) !important;
            }
            [data-theme="light"] [style*="color: #fff"],
            [data-theme="light"] [style*="color: white"] {
              color: var(--text-main) !important;
            }
            [data-theme="light"] [style*="border: 1px solid rgba(255, 255, 255, 0.1)"],
            [data-theme="light"] [style*="border: 1px solid rgba(255,255,255,0.1)"] {
              border-color: var(--border-glass) !important;
            }
            [data-theme="light"] [style*="border: 1px solid rgba(255, 255, 255, 0.05)"],
            [data-theme="light"] [style*="border: 1px solid rgba(255,255,255,0.05)"] {
              border-color: var(--border-glass) !important;
            }
            [data-theme="light"] [style*="color: rgba(255, 255, 255, 0.1)"],
            [data-theme="light"] [style*="color: rgba(255,255,255,0.1)"] {
              color: var(--text-dim) !important;
            }
          `}} />
        </ThemeProvider>
      </body>
    </html>
  );
}
