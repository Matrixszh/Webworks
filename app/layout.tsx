import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Works',
  description: 'Build your dream website with us!',
}

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
