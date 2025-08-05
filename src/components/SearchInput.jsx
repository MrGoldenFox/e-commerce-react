import { Search } from 'lucide-react'

export function SearchInput({ value, setValue }) {
	return (
		<div className='relative'>
			<input
				type='text'
				className='w-full h-10 border rounded-md border-black/10 p-2 pl-8 outline-0'
				placeholder='Search Anything...'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<Search className='absolute top-2 left-1' strokeWidth={'0.05rem'} />
		</div>
	)
}
