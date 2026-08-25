import './globals.css'
import Header from "@/components/header/Header.jsx"
import Footer from "@/components/footer/Footer.jsx"
import { Roboto, Lora } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-roboto",
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: "--font-lora",
})

export const metadata = {
  metadataBase: new URL('https://naturity.no'),
  title: 'Naturity',
  description: 'Din butikk for skånsomhet',
  openGraph: {
    images: '/naturity_favicon.png',
  },
  icons: {
    shortcut: '/naturity_favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={`${roboto.variable} ${lora.variable}`}>

        <Header />
        
        {children}
        
        <Footer />
      </body>
    </html>
  )
}