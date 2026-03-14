import Image from 'next/image'
import styles from './style.module.css'

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container h-full flex-col-reverse lg:flex-row flex gap-x-5.5 items-center">
				<div className="flex flex-col gap-y-7.5 max-w-155">
					<h1 className="font-semibold text-4xl lg:text-5xl leading-normal text-red text-center lg:text-start">
						Sun’iy Intellekt olamiga qadam qo‘ying!
					</h1>
					<p className="md:text-xl text-[#777777] text-center lg:text-start">
						15 ta dars davomida siz prompt engineering, neyrofotosessiya, video
						va reklama kontentlarini AI orqali professional darajada ishlab
						chiqishni o&#39;rganasiz.
					</p>
					<button className={styles.button}>Batafsil ma&#39;lumot</button>
				</div>
				<div className={`${styles.hero_image} relative z-0`}>
					<Image
						src={`/images/hero_image_lg.png`}
						width={540}
						height={490}
						alt="Hero image"
						className="w-full h-auto object-cover aspect-square"
					/>
				</div>
			</div>
		</section>
	)
}
