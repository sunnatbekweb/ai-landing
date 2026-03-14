import Link from 'next/link'

export const Header = () => {
	return (
		<header className="sticky top-0 z-10 h-20 flex items-center bg-white border-b border-[#FFD8D8]">
			<div className="container flex items-center justify-between">
				<Link
					href={'/'}
					className="font-semibold leading-[100%] text-red"
				>
					AI FOR VISUALS
				</Link>
				<Link href="#contact">
					<button className="h-11 px-5 rounded-[10px] bg-red leading-[100%] text-white">
						Ro’yhatdan o’tish
					</button>
				</Link>
			</div>
		</header>
	)
}
