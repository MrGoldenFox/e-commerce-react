import { ArrowBigDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import reactImg from '../assets/react.svg'
import { navLinks } from '../constants/navLinks'
import BurgerMenu from './BurgerMenu'

export function Header() {
	const [menu, setMenu] = useState(false)

	const locationPath = useLocation().pathname

	useEffect(() => {
		document.body.style.overflowY = menu ? 'hidden' : 'auto'
	}, [menu])

	const renderedLinks = () => (
		<ul className='w-full sm:flex'>
			{navLinks.map(link => (
				<li key={link.name} className='w-full'>
					<Link
						to={link.link}
						className='py-3 w-full border-b flex justify-between items-center sm:border-b-0 sm:px-3'
						onClick={() => setMenu(false)}
					>
						{link.name}
						<ArrowBigDownIcon
							size={'1rem'}
							strokeWidth={'0.075rem'}
							className='text-[--color-accent] sm:hidden'
						/>
					</Link>
				</li>
			))}
		</ul>
	)

	return (
		<>
			<header className='w-full h-12 flex justify-between items-center py-2 px-[5vw] border-b-1 border-bg z-40'>
				<div className='flex items-center gap-1'>
					<img src={reactImg} alt='React e-commerce fake store' />
					<p>{navLinks.find(link => link.link === locationPath)?.name}</p>
				</div>

				<BurgerMenu
					renderedLinks={renderedLinks}
					setMenu={setMenu}
					menu={menu}
				/>

				<nav className='hidden sm:flex'>{renderedLinks()}</nav>
			</header>
		</>
	)
}
