import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Hero } from '@/components/ui/hero'

const list = ['image', 'video', 'profit']

export default function Home() {
	return (
		<main>
			<Hero />
			<section className="pt-30 lg:pt-37.5 pb-15 lg:pb-18.75">
				<div className="container">
					<div className="max-w-138 mx-auto">
						<h2 className="font-semibold text-[32px] leading-[100%] text-red text-center">
							Kurs haqida
						</h2>
						<p className="leading-[100%] text-[#797676] text-center mt-2.25">
							Sun’iy intellekt yordamida kontent yaratish va daromad topish
							ko‘nikmalarini o‘rganing.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-5 mt-10">
						{list.map((item, index) => (
							<Card
								key={index}
								item={item}
							/>
						))}
					</div>
					<div className="flex justify-center mt-10">
						<Button className="shadow-[0px_5px_44px_0px_#ff000080]">
							Batafsil ma&#39;lumot
						</Button>
					</div>
				</div>
			</section>
			<section
				id="contact"
				className="pt-15 lg:pt-18.75 pb-30 lg:pb-37.5"
			>
				<div className="container grid lg:grid-cols-2 gap-y-10 gap-x-5">
					<div>
						<h2 className="font-semibold text-3xl lg:text-[42px] text-red leading-normal text-center lg:text-start">
							Sun’iy Intellekt Kursiga Yoziling
						</h2>
						<p className="text-lg text-[#797676] text-center lg:text-start mt-6 max-w-105 mx-auto lg:mx-0">
							Sun’iy intellekt yordamida kontent yaratish va daromad topish
							ko‘nikmalarini o‘rganing.
						</p>
					</div>
					<Form />
				</div>
			</section>
		</main>
	)
}
