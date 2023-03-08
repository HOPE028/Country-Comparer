import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChoosingCountries from './components/ChoosingCountries'
// import Test from './test'
import './App.css'

function App() {
  const [countryImage, setCountryImage] = useState<any>(
    'https://countryflagsapi.com/png/bra'
  )
  const [countryOne, setCountryOne] = useState<string>('')
  const [countryTwo, setCountryTwo] = useState<string>('')

  useEffect(() => {
    const url =
      'https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=VC.PKP.TOTL.UN,SP.POP.TOTL&country_code=XKX,AFG&api_key=wCaQ4RwKqax92nzyh_px'
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))

    // const countryCode = 'BRA'

    // axios
    //   .get(`https://countryflagsapi.com/png/${countryCode}`)
    //   .then((res) => res.data)
    //   .then((res) => {
    //     console.log(res)
    //     setCountryImage(res)
    //   })
    //   .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <ChoosingCountries
        countryOne={countryOne}
        countryTwo={countryTwo}
        setCountryOne={setCountryOne}
        setCountryTwo={setCountryTwo}
      />

      <img crossOrigin='anonymous' src={countryImage} />

      <img
        crossOrigin='anonymous'
        src='https://countryflagsapi.com/svg/ae'
        alt='United Arab Emirates flag'
      />
    </div>
  )
}

// function CountrySelector(props: )

export default App
