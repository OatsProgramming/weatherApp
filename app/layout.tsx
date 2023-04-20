import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin-ext']
})

export const metadata = {
  title: 'The Forecast',
  description: 'Find out whether you should wear tennis shoes or rain boots with The Forecast App ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
