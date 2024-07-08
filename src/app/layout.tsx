import { Metadata } from 'next'

import { NextTamaguiProvider } from './NextTamaguiProvider'
export const metadata: Metadata = {

  title: 'Your page title',

  description: 'Your page description',

  icons: '/favicon.ico',

}
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <body>

        <NextTamaguiProvider>{children}</NextTamaguiProvider>

      </body>

    </html>

  )

}