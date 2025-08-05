import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Store } from './pages/Store'

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className='px-[5vw] py-2.5 md:pt-5'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/store' element={<Store />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</>
	)
}
