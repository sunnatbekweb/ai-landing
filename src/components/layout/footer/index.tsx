export const Footer = () => {
	return (
		<footer className="pt-12 pb-8 bg-[#540000] text-white">
			<div className="container">
				<p className="text-center">
					© {new Date().getFullYear()} AI Kurs. Barcha huquqlar himoyalangan.
				</p>
				<div className="flex justify-center mt-3.75">
					<a
						href="https://t.me"
						className="block px-2 border-r border-white"
					>
						Telegram
					</a>
					<a
						href="https://instagram.com"
						className="block px-2 border-r border-white"
					>
						Instagram
					</a>
					<a
						href="https://youtube.com"
						className="block px-2 border-white"
					>
						Youtube
					</a>
				</div>
			</div>
		</footer>
	)
}
