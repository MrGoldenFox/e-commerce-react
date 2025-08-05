export const FormInput = props => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				name={name}
				className='block border-1 border-black/10'
			/>
		</div>
	)
}
