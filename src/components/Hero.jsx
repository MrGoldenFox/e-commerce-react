import { Link } from 'react-router-dom'
import hero_img from '../assets/hero.png'

export const Hero = () => {
	return (
		<section className='border border-black/10 my-4 p-5 rounded-md gap-5 flex flex-col sm:flex-row sm:justify-between'>
			<div className='flex flex-col gap-4 md:text-lg relative sm:top-10'>
				<h1 className='text-[8vw] text-balance leading-[0.8] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
					Choose anything u want
				</h1>
				<p className=''>Enjoy your choice in our e-commerce shop</p>
				<Link
					className='w-40 bg-accent text-white py-2.5 px-4 rounded-md text-sm uppercase tracking-wide flex justify-center items-center'
					to={'/store'}
				>
					Explore Shop
				</Link>
			</div>
			<img src={hero_img} alt='Hero image' className='sm:w-1/2' />
		</section>
	)
}
