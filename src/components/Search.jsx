const Search = ({ search, setSearch }) => {
	return (
		<input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className='w-[90%] border p-2 mb-1 mx-auto'
			placeholder='Search'
			type='text'
		/>
	);
};

export default Search;
