const Card = ({ countryInfo, setSelectedCountry }) => {
	const { flag, name, population, region, capital } = countryInfo;

	return (
		<div onClick={() => setSelectedCountry(countryInfo)} className="card">
			<img src={flag} alt=""/>
			<div style={{paddingLeft: "20px"}}>
				<h2 style={{marginBottom: "10px"}}>
					{name}
				</h2>
				<div>
					<p>Population: <span>{population}</span> </p> 
				</div>
				<div>
					<p>Region: <span>{region}</span></p> 
				</div>
				<div>
					<p>Capital: <span>{capital}</span></p> 
				</div>
			</div>
		</div>
	);
};

export default Card;