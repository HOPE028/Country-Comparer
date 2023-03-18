import React, { useState } from 'react'
// import CountrySelector from './CountrySelector'
import { countryCodes } from '../data/countryToCode3Digit'
import { countries } from '../data/countries'

import search from '../pictures/Magnifying_glass_icon.svg.png'

import '../App.css'

interface interfaceChoosingCountries {
  countryOne: string
  countryTwo: string
  setCountryOne: Function
  setCountryTwo: Function
  fetchData: Function
}

export default function ChoosingCountries(props: interfaceChoosingCountries) {
  const [error, setError] = useState('')

  const onSubmit = () => {
    setError('')

    if (props.countryOne !== '' && props.countryTwo !== '') {
      // Code to search it up.
    } else if (props.countryOne === '' && props.countryTwo === '') {
      return setError('Please select two countries')
    } else if (props.countryOne === '') {
      return setError('Please select a country for country one input')
    } else {
      return setError('Please select a coutry for country two input')
    }

    const countryOneCode = countryCodes[props.countryOne]
    const countryTwoCode = countryCodes[props.countryTwo]

    props.fetchData(
      countryOneCode,
      countryTwoCode,
      props.countryOne,
      props.countryTwo
    )
  }

  return (
    <div className='container'>
      <div className='Choosing_Countries'>
        <h3 style={{ color: 'red' }}>{error}</h3>
        <CountrySelector
          countryOther={props.countryTwo}
          selectedOption={props.countryOne}
          setSelectedOption={props.setCountryOne}
        />
        <CountrySelector
          countryOther={props.countryOne}
          selectedOption={props.countryTwo}
          setSelectedOption={props.setCountryTwo}
        />
        <button onClick={onSubmit} className='flex-centered none'>
          <img className='Search-Button' src={search} alt='Search!' />
        </button>
      </div>
    </div>
  )
}

interface interfaceCountrySelector {
  countryOther: string
  selectedOption: string
  setSelectedOption: Function
}

function CountrySelector(props: interfaceCountrySelector) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOptions = countries.filter(
    (country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      country !== props.countryOther &&
      country !== props.selectedOption
  )

  return (
    <div className='country-selector'>
      <label htmlFor='select-option'>Select a country:</label>
      <div className='select-container'>
        <input
          type='text'
          placeholder='Search for a country'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearchTerm('')}
        />
        {/* {props.selectedOption && (
          <div className='selected-option'>{props.selectedOption}</div>
        )} */}
        {searchTerm &&
          filteredOptions.map((country) => (
            <div
              key={country}
              className='option'
              onClick={() => {
                props.setSelectedOption(country)
                setSearchTerm('')
              }}
            >
              {country}
            </div>
          ))}
      </div>
      {props.selectedOption && <p>You have selected: {props.selectedOption}</p>}
    </div>
  )
}
