import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
})



export const metadata: Metadata = {
  title: "Ayhan Karaman",
  description: "I'm Ayhan, Fullstack developer",
  icons: {
    icon: '/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geist.variable} ${jetBrainsMono.className}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-screen dark:bg-[#0e2136]">
        <ThemeProvider>
          <Navbar />
          <main className="mt-8 min-h-screen max-w-7xl mx-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
