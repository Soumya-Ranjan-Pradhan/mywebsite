import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Hero from './home/page'
import { ThemeProvider } from '@/components/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
      <Navbar />
      <Hero />
      {children}
      <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}
