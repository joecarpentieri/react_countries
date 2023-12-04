import { createElement } from "react";
import CountryContainer from "../containers/CountryContainer";

const Country = ({country, handleChange}) => {

    const onChange = ((event) => {
        handleChange(event)
        // event.target.splice()
        // .push()
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