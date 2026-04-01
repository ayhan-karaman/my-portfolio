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
      <body suppressHydrationWarning className="min-h-full dark:bg-[#0e2136]">
        <ThemeProvider>
          <main className="flex-1 justify-center flex py-6 w-full">
            <div className="container">
                <Navbar />
                {children}
                 <Footer /> 
            </div>
        </main>
        </ThemeProvider>
  
      </body>
    </html>
  );
}
