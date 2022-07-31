import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
	const [searchValue, setSearch] = useState("");
	const [searchedData, setSearchData] = useState("");
	const [userData, setUserData] = useState([]);
	const [userPaginatedData, setUserPaginatedData] = useState([]);
	const [activePage, setActivePage] = useState(0);
	const [checkbox, setCheckbox] = useState([]);
	const [allChecked, setAllChecked] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [editFormData, setEditFormData] = useState({
		id: "",
		name: "",
		email: "",
		role: "",
	});

	const handleDelete = (id) => {
		setUserData((prevData) => {
			const newData = [...prevData];
			const data = newData.filter((data) => Number(data.id) !== id);
			console.log(data);
			return data;
		});
	};

	const handleEdit = (index, data) => {
		setUserData((prevData) => {
			const newData = [...prevData];
			newData[index] = data;
			return newData;
		});
	};

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					"https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
				);
				setUserData(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	useEffect(() => {
		if (searchValue) {
			const newData = [];
			userData.forEach((row) => {
				if (
					row.name.includes(searchValue) ||
					row.email.includes(searchValue) ||
					row.role.includes(searchValue)
				) {
					newData.push(row);
				}
			});
			setSearchData(newData);
			setActivePage(0);
		}
	}, [searchValue, userData]);

	useEffect(() => {
		if (!searchValue) {
			const paginatedData = userData.slice(
				activePage * 10,
				activePage * 10 + 10
			);
			setUserPaginatedData(paginatedData);
			setCheckbox(new Array(paginatedData.length).fill(false));
		} else {
			const paginatedData = searchedData.slice(
				activePage * 10,
				activePage * 10 + 10
			);
			setUserPaginatedData(paginatedData);
			setCheckbox(new Array(paginatedData.length).fill(false));
		}
	}, [activePage, searchValue, userData, searchedData]);

	return (
		<div className='flex flex-col '>
			<div className='flex justify-center mx-auto mt-4 flex-col align-center border'>
				<Search search={searchValue} setSearch={setSearch} />
				<Table
					userData={userPaginatedData}
					onDelete={handleDelete}
					onEdit={handleEdit}
					checkbox={checkbox}
					setCheckbox={setCheckbox}
					allChecked={allChecked}
					setAllChecked={setAllChecked}
					showEdit={showEdit}
					setShowEdit={setShowEdit}
					editFormData={editFormData}
					setEditFormData={setEditFormData}
					handleEdit={handleEdit}
				/>
				{userPaginatedData.length > 0 && (
					<Pagination
						setAllChecked={setAllChecked}
						activePage={activePage}
						setActivePage={setActivePage}
						count={searchValue ? searchedData.length : userData.length}
					/>
				)}
				<button
					onClick={() => {
						checkbox.forEach((isMarked, index) => {
							if (isMarked) {
								handleDelete(index + 1);
							}
						});
						setAllChecked(false);
					}}
					type='button'
					className='bg-red-400 mb-4 mx-auto rounded-lg px-4 py-2 text-white'>
					Delete Selected
				</button>
			</div>
		</div>
	);
}

export default App;
