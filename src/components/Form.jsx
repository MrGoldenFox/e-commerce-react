import { FormInput } from './FormInput'

export const Form = () => {
	return (
		<form
			style={{ cursor: 'url(../assets/cursor.svg), auto' }}
			className='space-y-4 max-w-md mx-auto'
		>
			<FormInput
				label={'First Name'}
				id={'first_name'}
				name={'first_name'}
				type={'text'}
			/>
			<FormInput
				label={'Last Name'}
				id={'first_name'}
				name={'first_name'}
				type={'text'}
			/>
			<FormInput label={'Email'} id={'email'} name={'email'} type={'email'} />
			<FormInput
				label={'Phone Number'}
				id={'number'}
				name={'number'}
				type={'tel'}
			/>

			<div>
				<h6>Select Subject</h6>

				<div>
					<input
						type='checkbox'
						id='subject_tshirt'
						name='subject'
						value='tshirt'
					/>
					<label htmlFor='subject_tshirt'>General T-shirt</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='subject_laptop'
						name='subject'
						value='laptop'
					/>
					<label htmlFor='subject_laptop'>General Laptop</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='subject_food'
						name='subject'
						value='food'
					/>
					<label htmlFor='subject_food'>General Food</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='subject_perfume'
						name='subject'
						value='perfume'
					/>
					<label htmlFor='subject_perfume'>General Perfume</label>
				</div>
			</div>

			<div>
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' rows='4' required></textarea>
			</div>

			<button type='submit'>Send Message</button>
		</form>
	)
}
