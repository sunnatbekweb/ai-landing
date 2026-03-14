import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600']
})

export const metadata: Metadata = {
	title: 'AI FOR VISUALS',
	description:
		"Sun’iy Intellekt olamiga qadam qo‘ying! 15 ta dars davomida siz prompt engineering, neyrofotosessiya, video va reklama kontentlarini AI orqali professional darajada ishlab chiqishni o'rganasiz."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
