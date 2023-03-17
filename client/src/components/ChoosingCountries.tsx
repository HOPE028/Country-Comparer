import React, { useState } from 'react'
import CountrySelector from './CountrySelector'
import { countryCodes } from '../data/countryToCode3Digit'

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
      setError('Please select two countries')
    } else if (props.countryOne === '') {
      setError('Please select a country for country one input')
    } else {
      setError('Please select a coutry for country two input')
    }

    const countryOneCode = countryCodes[props.countryOne]
    const countryTwoCode = countryCodes[props.countryTwo]

    props.fetchData(countryOneCode, countryTwoCode)
  }

  return (
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

      <button onClick={onSubmit}>Compare!</button>
    </div>
  )
}
