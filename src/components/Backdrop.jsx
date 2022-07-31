import Aside from "./UI/Aside";
const Backdrop = ({ children, setShowEdit }) => {
	return (
		<Aside>
			<div
				onClick={() => setShowEdit(false)}
				className=' absolute top-0 h-full w-full flex justify-center items-center'>
				{children}
			</div>
		</Aside>
	);
};

export default Backdrop;
