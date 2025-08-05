import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { AddToCartBtn } from './AddToCartBtn'

export function ModelWindow({
	setOpenModelWindow,
	title,
	category,
	price,
	img,
	description,
}) {
	return createPortal(
		<div className='fixed inset-0 z-30 bg-black/50 flex items-center justify-center'>
			<section className='w-11/12 h-11/12 bg-white p-4 relative overflow-auto rounded-md flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center'>
				<button
					className='absolute top-2 right-2'
					onClick={() => setOpenModelWindow(false)}
				>
					<X strokeWidth={'0.075rem'} />
				</button>
				<p className='absolute top-2 left-2'>{category}</p>

				<img src={img} alt={title} className='rounded max-w-96 flex' />
				<div className='flex flex-col gap-2 sm:max-w-1/2'>
					<h4>{title}</h4>
					<p>{description}</p>
					<div className='flex justify-between items-center my-2'>
						Price:
						<p>{price}$</p>
					</div>
					<AddToCartBtn />
				</div>
			</section>
		</div>,
		document.body
	)
}
