import React, { useState, useEffect } from 'react'
import CountrySelector from './countrySelector'
import axios from 'axios'

import './App.css'
import { count } from 'console'

function App() {
  const [countryImage, setCountryImage] = useState<any>()
  const [countryOne, setCountryOne] = useState<string>('United States')
  const [countryTwo, setCountryTwo] = useState<string>('Canada')

  // useEffect(() => {
  //   const url =
  //     'https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=VC.PKP.TOTL.UN,SP.POP.TOTL&country_code=XKX,AFG&api_key=wCaQ4RwKqax92nzyh_px'
  //   axios
  //     .get(url)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))

  //   const countryCode = 'BRA'

  //   axios
  //     .get(`https://countryflagsapi.com/svg/${countryCode}`)
  //     .then((res) => {
  //       console.log(res)
  //       setCountryImage(res)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])

  return (
    <div>
      <CountrySelector
        countryOne={countryOne}
        countryTwo={countryTwo}
        currentCountry={countryOne}
        setCountry={setCountryOne}
      />

      <CountrySelector
        countryOne={countryOne}
        countryTwo={countryTwo}
        currentCountry={countryTwo}
        setCountry={setCountryTwo}
      />
    </div>
  )
}

export default App
