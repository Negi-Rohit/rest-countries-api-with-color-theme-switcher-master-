import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Country = ({ country, setSelectedCountry }) => {
	const { flag, name, nativeName, population, region, capital, subregion, languages, topLevelDomain, currencies, borders } = country;
	
	return (
		<div>
			<button className="back-button" onClick = {() => setSelectedCountry(null)}>
				<ArrowBackIcon />Back
			</button>
			<div className="country">
				<img
					src={flag}
					alt=""
					className="country-flag"
				/>
				<div>
					<h1 style={{marginBottom:"50px", marginTop:"30px"}}>{name}</h1>
					<div className="country-details">
						<div className="country-details-A">
							<h3>Native Name: <span>{nativeName}</span></h3>
							<h3>Population:  <span>{population}</span></h3>
							<h3>Region: <span>{region}</span></h3>
							<h3>Sub Region: <span>{subregion}</span></h3>
							<h3>Capital: <span>{capital}</span></h3>
						</div>
						<div>
							<h3>Top Level Domain: <span>{topLevelDomain}</span></h3>
							<h3>Currencies:  <span>{currencies.map(item => `${item.name} `)}</span></h3>
							<h3>Languages: <span>{languages.map(item => `${item.name} `)}</span></h3>
						</div>
					</div>
					<div>
						<h3>Border Countries:   
							{borders.map((item) => (
								<button style={{margin: "5px"}} key = {item}>{item}</button>
							))}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Country;