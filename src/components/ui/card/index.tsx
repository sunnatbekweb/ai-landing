import Image from 'next/image'

export const Card = ({ item }: { item: string }) => {
	return (
		<div className="card p-5 bg-[#F9F9F999] border border-black/10">
			<div className="w-16 h-16 bg-[#F4F4F4] rounded-[10px] grid place-content-center">
				<Image
					src={`/icons/${item}.svg`}
					width={34}
					height={34}
					alt="Icon"
				/>
			</div>
			<Image
				src={'/images/card_bg.png'}
				width={156}
				height={152}
				alt="Card background image"
				className="absolute top-0 right-0 z-0"
			/>
			<div className="flex flex-col gap-y-3.5 mt-8">
				<strong className="font-medium text-lg leading-[100%] text-red">
					AI Image Generation
				</strong>
				<p className="leading-tight text-[#2F2F2F]">
					Freepik AI yordamida professional rasmlar, reklama vizuallari va
					dizayn elementlarini bir necha daqiqada yaratishni o‘rganasiz.
				</p>
			</div>
		</div>
	)
}
