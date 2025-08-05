import { useEffect, useState } from 'react'
import { productsService } from '../services/productService'
import { ListOfCategory } from './ListOfCategory'
import { ProductsList } from './ProductsList'
import { SearchInput } from './SearchInput'

export const Shop = () => {
	const [filteredProducts, setFilteredProducts] = useState([])
	const [products, setProducts] = useState([])
	const [value, setValue] = useState('')
	const [selectedCategories, setSelectedCategories] = useState([])

	useEffect(() => {
		const loadProducts = async () => {
			const data = await productsService()
			setProducts(data)
		}

		loadProducts()
	}, [])

	useEffect(() => {
		let filtered = products

		if (selectedCategories.length > 0) {
			filtered = filtered.filter(product =>
				selectedCategories.includes(product.category)
			)
		}

		if (value.trim() !== '') {
			filtered = filtered.filter(product =>
				product.title.toLowerCase().includes(value.toLowerCase())
			)
		}

		setFilteredProducts(filtered)
	}, [value, products, selectedCategories])

	return (
		<>
			<SearchInput value={value} setValue={setValue} />
			<ListOfCategory
				products={products}
				setSelectedCategories={setSelectedCategories}
				selectedCategories={selectedCategories}
			/>
			<ProductsList products={filteredProducts} value={value} />
		</>
	)
}
