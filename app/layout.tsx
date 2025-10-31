import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Abubakar - Senior Data Engineer | AWS & PySpark Specialist',
  description:
    'Senior Data Engineer with 4+ years of experience in AWS, PySpark, Oracle FCCM, and Financial Compliance. Expert in building scalable data pipelines and cloud infrastructure.',
  keywords:
    'Data Engineer, AWS, PySpark, Oracle FCCM, TBAML, Data Pipeline, ETL, Cloud Architecture',
  authors: [{ name: 'Muhammad Abubakar' }],
  openGraph: {
    title: 'Muhammad Abubakar - Senior Data Engineer',
    description: 'AWS & PySpark Specialist | Financial Compliance Expert',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
