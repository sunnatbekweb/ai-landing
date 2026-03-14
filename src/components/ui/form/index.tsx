'use client'
import styles from './style.module.css'

export const Form = () => {
	return (
		<form
			onSubmit={e => e.preventDefault()}
			className={styles.form}
		>
			<label className="flex flex-col gap-y-2">
				<span>Ismingiz</span>
				<input
					type="text"
					placeholder="Sardor"
				/>
			</label>
			<label className="flex flex-col gap-y-2">
				<span>Viloyat</span>
				<select
					className={styles.select}
					defaultValue={''}
				>
					<option
						value=""
						disabled
					>
						Viloyatni tanlang
					</option>
				</select>
			</label>
			<div className="flex flex-col gap-y-2">
				<span>Ta&apos;lim shaklini tanlang</span>
				<div className="flex items-center gap-x-8.75">
					<label className="flex gap-x-2">
						<input
							type="radio"
							value={'offline'}
							name="type"
						/>
						<span className="text-lg">Offline</span>
					</label>
					<label className="flex gap-x-2">
						<input
							type="radio"
							value={'online'}
							name="type"
						/>
						<span className="text-lg">Online</span>
					</label>
				</div>
			</div>
			<label className="flex flex-col gap-y-2">
				<span>Telefon raqamingiz</span>
				<input
					type="tel"
					name="phone"
					placeholder="+998 00 000-00-00"
				/>
			</label>
			<div className="flex flex-col gap-y-2">
				<span>Sizga aloqaga chiqish uchun qaysi vaqt qulay</span>
				<div className="flex flex-wrap items-center gap-y-2 gap-x-8.75">
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							name="time"
							value={'9:00 - 12:00'}
						/>
						<span className="text-lg">9:00 dan 12:00 gacha</span>
					</label>
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							name="time"
							value={'14:00 - kechgacha'}
						/>
						<span className="text-lg">14:00 dan kechgacha</span>
					</label>
				</div>
			</div>
			<button className="h-12.5 lg:h-15 rounded-[14px] bg-red font-medium text-white mt-1.5">
				Yuborish
			</button>
		</form>
	)
}
