import { createElement } from "react";
import CountryContainer from "../containers/CountryContainer";

const Country = ({country, handleChange}) => {

    const onChange = (() => {
        handleChange(country)
    })

    return ( 
        <li>
        {country.name.common}
            <input
            type="checkbox"
            // defaultChecked="false"
            onChange={onChange}
            >
            </input>
            {/* {createElement('input',{type: 'checkbox', defaultChecked: false, onChange: handleChange})} */}
        </li>
     );
}
 
export default Country;