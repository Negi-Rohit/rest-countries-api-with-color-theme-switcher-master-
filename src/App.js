import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import Home from "./components/Home";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState();

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(res => res.json())
			.then(result => {
				setCountries(result);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div id="app" className="light">
			<Navbar />
			{!selectedCountry ? (
				<Home
					countries={countries}
					setCountries={setCountries}
					setSelectedCountry={setSelectedCountry}
				/>
			) : (
				<Country
					country={selectedCountry}
					setSelectedCountry={setSelectedCountry}
				/>
			)}
		</div>
	);
};

export default App;