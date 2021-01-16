import { useEffect, useState } from "react";
import Filter from "./Filter";
import Card from "./Card";

const Home = ({ countries, setCountries, setSelectedCountry }) => {
	const [showCountries, setShowCountries] = useState([]);
	const [search, setSearch] = useState(null);

	useEffect(() => {
		if (search) {
			const filtered = countries.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			);
			setShowCountries(filtered);
		} else setShowCountries(countries);
	}, [search, countries]);

	return (
		<div className="home">
			<Filter setSearch={setSearch} setCountries={setCountries} />
			<div className="home-card">
				{showCountries.map((country) => (
					<Card
						key={country.alpha3code}
						countryInfo={country}
						setSelectedCountry={setSelectedCountry}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;