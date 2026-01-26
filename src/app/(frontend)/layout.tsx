import React from 'react'
import './globals.css'
import Header from '@/components/header/header'
import {Footer} from "@/components/footer";

export const metadata = {
  title: 'Проект 18.12',
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <html lang="en">
    <body>
    <Header/>
      <main className="min-h-screen flex flex-col bg-white">{children}</main>
    <Footer />
    </body>
    </html>
  )
}

export default RootLayout;
