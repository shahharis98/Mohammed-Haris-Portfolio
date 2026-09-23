import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "./navbar";
import ThemeRegistry from "./themeRegistry";
import Footer from "./footer";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
    title: 'Mohammed Haris | Software Engineer',
  description: 'Portfolio of Mohammed Haris, Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
    className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`} 
    >
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
        <Navbar />
        {children}
        <Footer/>

        </ThemeRegistry>
      </body>
    </html>
  );
}
