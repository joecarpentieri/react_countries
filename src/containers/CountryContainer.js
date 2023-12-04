import { useEffect, useState } from "react";
import CountryComponent from "../components/CountryComponent";
import Country from "../components/Country";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    // const [checked, setChecked] = useState(Boolean);
    const [countriesVisited, setCountriesVisited] = useState([]);

    const loadCountryData = async () => {
        const countryResponse = await fetch ("https://restcountries.com/v3.1/all")
        const countryData = await countryResponse.json();
        setCountries(countryData);
    }

    useEffect(() => {
        loadCountryData();
        console.log(countries)
    }, [])

    const handleChange = (event, country) => { 
        let isChecked = event.target.checked
        const newList = [...countriesVisited, country]
        setCountriesVisited(newList)
        countries.splice(country)
        
     }

    


    return ( 
        <>
            <h2>My country container</h2>
            {countries ? <CountryComponent countries={countries} handleChange={handleChange}/> : <p>Writing down countries</p>}
            {countries ? <CountryComponent countries={countriesVisited} handleChange={handleChange}/> : <p>Writing down countries</p>}
            
        </>
     );
}
 
export default CountryContainer;