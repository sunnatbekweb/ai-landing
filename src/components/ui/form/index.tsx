'use client'
import { Controller, useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import styles from './style.module.css'

interface IContactForm {
	name: string
	region: string
	study_type: string
	phone_number: string
	contact_time: string
}

export const Form = () => {
	const { register, control, handleSubmit } = useForm<IContactForm>({
		mode: 'onChange'
	})

	const onSubmit = (data: IContactForm) => console.log(data)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<label className="flex flex-col gap-y-2">
				<span>Ismingiz</span>
				<input
					type="text"
					{...register('name', { required: true })}
					placeholder="Sardor"
				/>
			</label>
			<label className="flex flex-col gap-y-2">
				<span>Viloyat</span>
				<select
					className={styles.select}
					defaultValue={''}
					{...register('region', { required: true })}
				>
					<option
						value=""
						disabled
					>
						Viloyatni tanlang
					</option>
					<option value="Tashkent">Toshkent</option>
				</select>
			</label>
			<div className="flex flex-col gap-y-2">
				<span>Ta&apos;lim shaklini tanlang</span>
				<div className="flex items-center gap-x-8.75">
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							value={'offline'}
							{...register('study_type', { required: true })}
						/>
						<span className="text-lg">Offline</span>
					</label>
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							value={'online'}
							{...register('study_type', { required: true })}
						/>
						<span className="text-lg">Online</span>
					</label>
				</div>
			</div>
			<Controller
				name="phone_number"
				control={control}
				rules={{
					required: true,
					pattern: {
						value: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
						message: 'Enter correct number'
					}
				}}
				render={({ field }) => (
					<label className="flex flex-col gap-y-2">
						<span>Telefon raqamingiz</span>

						<IMaskInput
							type="tel"
							{...field}
							mask="+998 (00) 000-00-00"
							placeholder="+998 (__) ___-__-__"
							onAccept={value => field.onChange(value)}
						/>
					</label>
				)}
			/>
			<div className="flex flex-col gap-y-2">
				<span>Sizga aloqaga chiqish uchun qaysi vaqt qulay</span>
				<div className="flex flex-wrap items-center gap-y-2 gap-x-8.75">
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							value={'9:00 - 12:00'}
							{...register('contact_time', { required: true })}
						/>
						<span className="text-lg">9:00 dan 12:00 gacha</span>
					</label>
					<label className="flex items-center gap-x-2">
						<input
							type="radio"
							value={'14:00 - kechgacha'}
							{...register('contact_time', { required: true })}
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
