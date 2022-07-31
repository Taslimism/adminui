import first from "../assets/first.png";
import last from "../assets/last.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

const Pagination = ({ activePage, setActivePage, count, setAllChecked }) => {
	const pages = new Array(Math.ceil(count / 10)).fill(0);

	return (
		<div className='flex gap-4 mx-auto mb-2 text-white'>
			<button
				onClick={() => {
					setActivePage(0);
					setAllChecked(false);
				}}
				disabled={activePage === 0}
				className='bg-blue-300 px-4 py-2 rounded-md'>
				<img className='h-2' src={first} alt='double-left-arrow' />
			</button>
			<button
				disabled={activePage === 0}
				onClick={() => {
					setActivePage(activePage - 1);
					setAllChecked(false);
				}}
				className='bg-blue-300 px-4 py-2 rounded-md disabled:cursor-not-allowed'>
				<img className='h-2' src={prev} alt='left arrow' />
			</button>
			{pages.map((_, i) => (
				<button
					key={i}
					onClick={() => {
						setActivePage(i);
						setAllChecked(false);
					}}
					className={`${
						!(activePage === i) ? "bg-blue-300" : "bg-blue-800"
					}  px-4 py-2 rounded-md`}>
					{i + 1}
				</button>
			))}
			<button
				disabled={activePage === pages.length - 1}
				onClick={() => {
					setActivePage(activePage + 1);
					setAllChecked(false);
				}}
				className='bg-blue-300 px-4 py-2 rounded-md disabled:cursor-not-allowed'>
				<img className='h-2' src={next} alt='double-left-arrow' />
			</button>
			<button
				onClick={() => {
					setActivePage(pages.length - 1);
					setAllChecked(false);
				}}
				disabled={activePage === pages.length - 1}
				className='bg-blue-300 px-4 py-2 rounded-md '>
				<img className='h-2' src={last} alt='left arrow' />
			</button>
		</div>
	);
};

export default Pagination;
