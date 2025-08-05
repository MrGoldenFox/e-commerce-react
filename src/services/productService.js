const FAKE_API = 'https://dummyjson.com'

export const productsService = async () => {
	const res = await fetch(`${FAKE_API}/products?limit=100`)
	const data = await res.json()

	console.log(data)
	return data.products
}
