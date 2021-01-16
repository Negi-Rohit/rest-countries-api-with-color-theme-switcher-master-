import SearchIcon from '@material-ui/icons/Search';

const Filter = ({ setSearch, setCountries }) => {

	const regionChange = (e) => {
		const region = e.target.value;

		if (region !== "Worldwide") {
			fetch(`https://restcountries.eu/rest/v2/region/${region.toLowerCase()}`)
				.then(res => res.json())
				.then(result => setCountries(result))
				.catch(err => console.log(err));
		} else {
			fetch("https://restcountries.eu/rest/v2/all")
				.then(res => res.json())
				.then(result => setCountries(result))
				.catch(err => console.log(err));
		}
	};

	return (
		<div className="filter">
			<div className="input-wrapper">
				<input
					className="input-area"
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search for a country"
				/>
				<SearchIcon />
			</div>
			<select
				onChange={regionChange}
			>
				<option>World</option>
				<option>Africa</option>
				<option>Americas</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</select>
		</div>
	);
};

export default Filter;