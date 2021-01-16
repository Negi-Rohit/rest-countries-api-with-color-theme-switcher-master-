import { useEffect, useState } from "react";
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';


const Navbar = () => {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem("Theme");
		 theme === "dark" ? setDark(true) : setDark(false);
	}, []);

	useEffect(() => {
		const mode = document.getElementById("app");

		
			if (!dark) {
				mode.classList.replace("dark", "light");
				localStorage.setItem("Theme", "light");
			} else {
				mode.classList.replace("light", "dark");
				localStorage.setItem("Theme", "dark");
			}

	}, [dark]);

	return (
		<div className="navbar">
			<h2>Where in the world ?</h2>
			<div className="select-mode" onClick={() => setDark(!dark)}>
				{dark ? <WbSunnyOutlinedIcon /> : <Brightness2OutlinedIcon />}	
			</div>
		</div>
	);
};

export default Navbar;