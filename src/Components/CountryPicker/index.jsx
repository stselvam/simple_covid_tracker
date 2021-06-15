import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../Api";

import "./CountryPicker.css"

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesOptionsList, setCountriesListOptions] = useState([])

  useEffect(() => {
    const fetchCountriesApi = async () => {
      setCountriesListOptions(await fetchCountries());
    }
    fetchCountriesApi();
  }, [])

  return (
    <FormControl className="country__picker__formtontrol">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countriesOptionsList.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
