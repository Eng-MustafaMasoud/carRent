import type { Metadata } from 'next'
import './globals.css'
import {Navbar,Footer} from '@/components'
import favicon from '../public/model-icon.png'

export const metadata: Metadata = {
  title: 'Automobile',
  description: 'Discover our best Cars',
  icons:{icon:'/model-icon.png'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
