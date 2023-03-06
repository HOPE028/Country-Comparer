import React, { useState } from 'react'
import { countries } from '../data/countries'

interface interfaceCountrySelector {
  countryOther: string
  selectedOption: string
  setSelectedOption: Function
}

export default function CountrySelector(props: interfaceCountrySelector) {
  return (
    <div>
      <label htmlFor='select-option'>Select a country:</label>
      <select
        id='select-option'
        value={props.selectedOption}
        onChange={(e) => props.setSelectedOption(e.target.value)}
      >
        <option value=''>Choose an option</option>

        {countries
          .filter(
            (country) =>
              country !== props.countryOther && country !== props.selectedOption
          )
          .map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
      </select>
      <p>You have selected: {props.selectedOption}</p>
    </div>
  )
}
