import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChoosingCountries from './components/ChoosingCountries'
import { DataCodes } from './data/DataCode'
import { data } from './data/data'
// import Test from './test'
import './App.css'

function App() {
  const [countryImage, setCountryImage] = useState<any>(
    'https://countryflagsapi.com/png/bra'
  )

  // Country Chosen.
  const [countryOne, setCountryOne] = useState<string>('')
  const [countryTwo, setCountryTwo] = useState<string>('')

  // Api endpoint for country flags
  const [countryOneImage, setCountryOneImage] = useState<string>('')
  const [countryTwoImage, setCountryTwoImage] = useState<string>('')

  // Total Data
  const [allData, setAllData] = useState()

  // Country Data
  const [countryOneData, setCountryOneData] = useState()
  const [countryTwoData, setCountryTwoData] = useState()

  // Filterad Data to be shown.
  interface dataFiltered {
    dataLabel: string
    countryOneData: string | number
    countryTwoData: string | number
  }

  const [dataFiltered, setDataFiltered] = useState<Array<dataFiltered>>([])

  const fetchData = (countryOneCode: string, countryTwoCode: string) => {
    // Set flags to the correct country.
    setCountryOneImage(`https://countryflagsapi.com/png/${countryOneCode}`)
    setCountryTwoImage(`https://countryflagsapi.com/png/${countryTwoCode}`)

    // Creating urls for country data
    const WBDataURL = `https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=${data.map(
      (field) => `${field},`
    )}&country_code=${countryOneCode},${countryTwoCode}&api_key=wCaQ4RwKqax92nzyh_px`

    axios
      .get(WBDataURL)
      .then((res) => res.data)
      .then((res) => res.datatable)
      .then((res) => res.data)
      .then((res) => {
        sortData(res, countryOneCode, countryTwoCode)
      })
      .catch((error) => console.log(error))
  }

  interface countryData {
    // series_id: string
    // country_code: string
    // country_name: string
    // year: number
    // value: number
    [index: number]: string | number
  }

  const sortData = (
    dataFromWB: Array<countryData>,
    countryOneCode: string,
    countryTwoCode: string
  ) => {
    console.log(dataFromWB)

    setDataFiltered([])

    const temporaryWholeDataFilteredObject: Array<dataFiltered> = []

    for (const code of data) {
      const list = dataFromWB.filter((field) => field[0] === code)

      const listCountryOne = list.filter((field) => field[1] === countryOneCode)

      const listCountryTwo = list.filter((field) => field[1] === countryTwoCode)

      const label = DataCodes[code]

      console.log(label)

      const temporaryFilteredObject: dataFiltered = {
        dataLabel: label,
        countryOneData: listCountryOne[0][4],
        countryTwoData: listCountryTwo[0][4],
      }

      temporaryWholeDataFilteredObject.push(temporaryFilteredObject)
    }

    setDataFiltered(temporaryWholeDataFilteredObject)
  }

  // useEffect(() => {
  //   const url =
  //     'https://data.nasdaq.com/api/v3/datatables/WB/DATA?series_id=VC.PKP.TOTL.UN,SP.POP.TOTL&country_code=XKX,AFG&api_key=wCaQ4RwKqax92nzyh_px'
  //   axios
  //     .get(url)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))
  // }, [])

  return (
    <div>
      <ChoosingCountries
        countryOne={countryOne}
        countryTwo={countryTwo}
        setCountryOne={setCountryOne}
        setCountryTwo={setCountryTwo}
        fetchData={fetchData}
      />

      {/* <img
        crossOrigin='anonymous'
        src={countryImage}
        style={{ width: '300px' }}
      /> */}

      {/* <img
        crossOrigin='anonymous'
        src='https://countryflagsapi.com/png/ae'
        alt='United Arab Emirates flag'
        style={{ width: '300px' }}
      /> */}

      <button onClick={() => console.log(dataFiltered)}>DATA</button>
    </div>
  )
}

// function CountrySelector(props: )

export default App
