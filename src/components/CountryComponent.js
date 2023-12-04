import Country from "./Country";

const CountryComponent = ({countries, handleChange}) => {

    const newCountries = countries.map((country, id) => (
        <Country country={country} key={id} handleChange={handleChange}/>
    )
    )

    return ( 
        <div>
            <h3>Countries I want to visit</h3>
            <ul>
                {newCountries}
            </ul>
            <ul>
                {/* {countries.filter(country => country.)} */}
            </ul>
        </div>
     );
}
 
export default CountryComponent;