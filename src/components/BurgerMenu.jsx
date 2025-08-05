import { Menu, X } from 'lucide-react'

export default function BurgerMenu({ renderedLinks, setMenu, menu }) {
	return (
		<>
			<button onClick={() => setMenu(!menu)} className='sm:hidden'>
				{menu ? (
					<X size={'1.5rem'} strokeWidth={'0.075rem'} />
				) : (
					<Menu size={'1.5rem'} strokeWidth={'0.075rem'} />
				)}
			</button>

			{menu && (
				<div className='fixed inset-0 z-10 bg-black/50 flex items-center justify-center top-12 sm:hidden'>
					<section className='px-[5vw] w-full absolute -top-12 mt-12 bg-bg py-5 z-20 rounded-b-md'>
						<nav className='flex'>{renderedLinks()}</nav>
					</section>
				</div>
			)}
		</>
	)
}
