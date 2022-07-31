import edit from "../assets/edit.png";
import trash from "../assets/trash.png";
import Edit from "./Edit";

const Table = ({
	userData,
	onDelete,
	checkbox,
	setCheckbox,
	allChecked,
	setAllChecked,
	setShowEdit,
	showEdit,
	editFormData,
	setEditFormData,
	handleEdit,
}) => {
	return (
		<div className='radius-md px-16 py-4 mb-2 w-[90%]'>
			<table>
				<thead>
					<tr className='border'>
						<th className='px-8 text-left'>
							<input
								checked={allChecked}
								onChange={() => {
									setCheckbox(checkbox.map((data) => !data));
									setAllChecked(!allChecked);
								}}
								type='checkbox'
							/>
						</th>
						<th className='px-8 text-left'>Name</th>
						<th className='px-8 text-left'>Email</th>
						<th className='px-8 text-left'>Role</th>
						<th className='px-8 text-left'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{userData.length > 0 &&
						userData.map((data, index) => (
							<tr
								className={`border ${checkbox[index] ? "bg-gray-400" : ""}`}
								key={data.id}>
								<td className='px-8 py-2'>
									<input
										checked={checkbox[index]}
										onChange={() =>
											setCheckbox((prev) => {
												return prev.map((value, i) => {
													if (i === index) {
														return !value;
													}
													return value;
												});
											})
										}
										type='checkbox'
									/>
								</td>
								<td className='px-8'>{data.name}</td>
								<td className='px-8'>{data.email}</td>
								<td className='px-8'>{data.role}</td>
								<td className='px-8 flex gap-2 py-4'>
									<button
										onClick={() => {
											setShowEdit(true);
											setEditFormData({
												id: data.id,
												name: data.name,
												email: data.email,
												role: data.role,
											});
										}}
										type='button'>
										<img className='h-4' src={edit} alt='edit' />
									</button>
									<button onClick={() => onDelete(data.id)} type='button'>
										<img className='h-4' src={trash} alt='delete' />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			{showEdit && (
				<Edit
					editFormData={editFormData}
					setEditFormData={setEditFormData}
					setShowEdit={setShowEdit}
					handleEdit={handleEdit}
				/>
			)}
		</div>
	);
};

export default Table;
