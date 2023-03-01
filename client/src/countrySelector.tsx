import React from 'react'
import { countries } from './data/countries'

interface countrySelector {
  countryOne: string
  countryTwo: string
  currentCountry: string
  setCountry: Function
}

export default function CountrySelector(props: countrySelector) {
  const handleChange = (value: String) => {
    props.setCountry(value)
  }

  return (
    <>
      <select
        name='Country Selector'
        id='country-selector'
        onChange={(e) => handleChange(e.target.value)}
        value={props.currentCountry}
      >
        {countries
          .filter(
            (country) =>
              country !== props.countryOne && country !== props.countryTwo
          )
          .map((country, index) => {
            return (
              <option key={index} value={country}>
                {country}
              </option>
            )
          })}
      </select>
    </>
  )
}
