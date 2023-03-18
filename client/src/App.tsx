import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ChoosingCountries from './components/ChoosingCountries'
import { DataCodes } from './data/DataCode'
import { data } from './data/data'
import { countryToCode2Digit } from './data/countryToCode2Digit'
import Navbar from './components/Navbar'
// import Test from './test'
import './App.css'

interface dataFiltered {
  dataLabel: string
  countryOneData: string | number
  countryTwoData: string | number
}

function App() {
  const [countryImage, setCountryImage] = useState<any>(
    'https://countryflagsapi.com/png/bra'
  )

  // Country Chosen.
  const [countryOne, setCountryOne] = useState<string>('')
  const [countryTwo, setCountryTwo] = useState<string>('')

  // Country Chosen Name
  const [countryOneName, setCountryOneName] = useState<string>('')
  const [countryTwoName, setCountryTwoName] = useState<string>('')

  // Api endpoint for country flags
  const [countryOneImage, setCountryOneImage] = useState<string>('')
  const [countryTwoImage, setCountryTwoImage] = useState<string>('')

  // Total Data
  const [allData, setAllData] = useState()

  // Country Data
  const [countryOneData, setCountryOneData] = useState()
  const [countryTwoData, setCountryTwoData] = useState()

  // Filterad Data to be shown.

  const [dataFiltered, setDataFiltered] = useState<Array<dataFiltered>>([])

  const fetchData = (
    countryOneCode: string,
    countryTwoCode: string,
    countryOne: string,
    countryTwo: string
  ) => {
    const countryOne2DigitCode = countryToCode2Digit[countryOne]
    const countryTwo2DigitCode = countryToCode2Digit[countryTwo]

    // Set country names
    setCountryOneName(countryOne)
    setCountryTwoName(countryTwo)

    // Set flags to the correct country.
    setCountryOneImage(
      `https://flagcdn.com/256x192/${countryOne2DigitCode}.png`
    )
    setCountryTwoImage(
      `https://flagcdn.com/256x192/${countryTwo2DigitCode}.png`
    )

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

      let countryOneData

      if (listCountryOne[0] !== undefined) {
        const numberString = listCountryOne[0][4]
        const number = parseFloat(numberString.toString())
        countryOneData = number.toLocaleString()
      } else {
        countryOneData = 'N/A'
      }

      let countryTwoData

      if (listCountryTwo[0] !== undefined) {
        const numberString = listCountryTwo[0][4]
        const number = parseFloat(numberString.toString())
        countryTwoData = number.toLocaleString()
      } else {
        countryTwoData = 'N/A'
      }

      const temporaryFilteredObject: dataFiltered = {
        dataLabel: label,
        countryOneData: countryOneData,
        countryTwoData: countryTwoData,
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
      <Navbar />

      <div style={{ marginTop: 'calc(5vh + 50px)' }}></div>

      <ChoosingCountries
        countryOne={countryOne}
        countryTwo={countryTwo}
        setCountryOne={setCountryOne}
        setCountryTwo={setCountryTwo}
        fetchData={fetchData}
      />

      {/* <button onClick={() => console.log(dataFiltered)}>DATA</button> */}

      <div style={{ marginTop: '5vh' }}></div>

      {countryOneName && (
        <ViewNames
          countryOneName={countryOneName}
          countryTwoName={countryTwoName}
        />
      )}

      {countryOneImage && (
        <ViewFlags
          countryOneImage={countryOneImage}
          countryTwoImage={countryTwoImage}
          countryOneName={countryOne}
          countryTwoName={countryTwo}
        />
      )}
      {dataFiltered.length > 0 && <ViewData data={dataFiltered} />}
    </div>
  )
}

// function CountrySelector(props: )

export default App

interface interfaceViewNames {
  countryOneName: string
  countryTwoName: string
}

function ViewNames(props: interfaceViewNames) {
  return (
    <div className='container'>
      <div className='viewNames'>
        <div></div>
        <div className='name'>
          <h1>{props.countryOneName}</h1>
        </div>
        <div className='name'>
          <h1>{props.countryTwoName}</h1>
        </div>
      </div>
    </div>
  )
}

interface interfaceViewFlags {
  countryOneImage: string
  countryTwoImage: string
  countryOneName: string
  countryTwoName: string
}

function ViewFlags(props: interfaceViewFlags) {
  return (
    <div className='container'>
      <div className='viewFlags'>
        <div></div>
        <div className='flag'>
          <img
            // crossOrigin='anonymous'
            className='hundred'
            src={props.countryOneImage}
            alt={`${props.countryOneName} National Flag`}
          />
        </div>
        <div className='flag'>
          <img
            className='hundred'
            // crossOrigin='anonymous'
            src={props.countryTwoImage}
            alt={`${props.countryTwoName} National Flag`}
          />
        </div>
      </div>
    </div>
  )
}

interface interfaceViewData {
  data: Array<dataFiltered>
}

function ViewData(props: interfaceViewData) {
  return (
    <div className='container'>
      <div className='viewData'>
        {props.data.map((field, index) => {
          return (
            <div key={index} className='rowData'>
              <div className='dataField  showLineBotton'>
                <h2>{field.dataLabel}</h2>
              </div>
              <div className='dataField showLineBotton'>
                <h2>{field.countryOneData}</h2>
              </div>
              <div className='dataField showLineBotton'>
                <h2>{field.countryTwoData}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
