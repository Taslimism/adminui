import { useState } from "react";
import Backdrop from "./Backdrop";

const Edit = ({ setShowEdit, editFormData, setEditFormData, handleEdit }) => {
	const [formData, setFormData] = useState(editFormData);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	return (
		<Backdrop setShowEdit={setShowEdit}>
			<div
				onClick={(e) => e.stopPropagation()}
				className='bg-white py-8 px-10 w-1/3 border rounded-md flex flex-col gap-4'>
				<label htmlFor='name'>Name</label>
				<input
					onChange={handleChange}
					name='name'
					value={formData.name}
					type='text'
					id='name'
					className='border focus:outline-none p-2 rounded-md'
				/>
				<label htmlFor='email'>Email</label>
				<input
					onChange={handleChange}
					value={formData.email}
					name='email'
					type='email'
					id='email'
					className='border focus:outline-none p-2 rounded-md'
				/>
				<label htmlFor='role'>Role</label>
				<input
					onChange={handleChange}
					value={formData.role}
					name='role'
					type='text'
					id='role'
					className='border focus:outline-none p-2 rounded-md'
				/>
				<button
					onClick={() => {
						setEditFormData(formData);
						handleEdit(formData.id - 1, formData);
						setShowEdit(false);
					}}
					type='button'
					className='w-full mt-2 p-2 rounded-md bg-cyan-400'>
					Save
				</button>
			</div>
		</Backdrop>
	);
};

export default Edit;
