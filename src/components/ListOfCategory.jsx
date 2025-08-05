import { useMemo } from 'react'

export function ListOfCategory({
	products,
	selectedCategories,
	setSelectedCategories,
}) {
	const categories = useMemo(() => {
		return Array.from(new Set(products.map(p => p.category)))
	}, [products])

	const activeCategory = 'bg-accent text-bg'

	const toggleCategories = category => {
		if (!selectedCategories.includes(category)) {
			setSelectedCategories([...selectedCategories, category])
		} else {
			setSelectedCategories(
				selectedCategories.filter(prev => category !== prev)
			)
		}
	}

	return (
		<section className='pt-2'>
			<ul className='flex gap-1 flex-wrap'>
				{categories.map(category => (
					<li key={category}>
						<button
							className={`py-1.5 px-3 rounded-2xl ${
								selectedCategories.includes(category)
									? activeCategory
									: 'bg-bg text-accent'
							}`}
							onClick={() => toggleCategories(category)}
						>
							{category}
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}
