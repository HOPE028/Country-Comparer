import React, { useState, useEffect } from 'react'
import CountrySelector from './countrySelector'
import axios from 'axios'
// import Test from './test'
import './App.css'

function App() {
  const [countryImage, setCountryImage] = useState<any>()
  const [countryOne, setCountryOne] = useState<string>('')
  const [countryTwo, setCountryTwo] = useState<string>('')

  useEffect(() => {
    const url =
      'https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=VC.PKP.TOTL.UN,SP.POP.TOTL&country_code=XKX,AFG&api_key=wCaQ4RwKqax92nzyh_px'
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))

    const countryCode = 'BRA'

    axios
      .get(`https://countryflagsapi.com/svg/${countryCode}`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res)
        setCountryImage(res)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <CountrySelector
        countryOther={countryTwo}
        selectedOption={countryOne}
        setSelectedOption={setCountryOne}
      />

      <CountrySelector
        countryOther={countryOne}
        selectedOption={countryTwo}
        setSelectedOption={setCountryTwo}
      />

      {/* <svg>{countryImage}</svg> */}

      {/* {countryImage && countryImage.data}
      

      {/* <svg dangerouslySetInnerHTML={{ __html: countryImage }} /> */}
    </div>
  )
}

// function CountrySelector(props: )

export default App
