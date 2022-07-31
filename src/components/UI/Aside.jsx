import { createPortal } from "react-dom";
const Aside = ({ children }) => {
	return createPortal(children, document.getElementById("modal"));
};

export default Aside;
