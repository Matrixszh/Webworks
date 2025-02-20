import { Metadata } from 'next'
import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const baseUrl = "https://webworks10.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Web Works",
  openGraph: {
    title: "Web Works",
    images: [
      {
        url: new URL("/5.jpg", baseUrl).toString(),
        width: 1200,
        height: 1200,
        alt: "Web Works Square Logo",
      },
      {
        url: new URL("/5.jpg", baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Web Works Rectangle Logo",
      },
    ],
    type: "website",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Works",
    images: [
      {
        url: new URL("/5.jpg", baseUrl).toString(),
        width: 1200,
        height: 1200,
        alt: "Web Works Square Logo",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} background-image text-white mx-auto px-6`}>
        <Navbar />
        {children}
        <Footer/>
        <BackToTopButton />
        </body>
    </html>
  )
}
