import { FormEvent, useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import api from '../services/api'
import Charts from '../components/Charts'
import { formatedDate, formatedVariation, getChartsData, getCountryDailyVariation, selectDataColor, sortListByNumberOfDeaths } from '../utils/globalInformation'

import { Header, Background, Content, SearchBox, WorldInfo, SectionTitle, CountryStats, Card, Classification, Country, Footer, Loading } from '../styles/pages/Home'

interface GlobalProps {
  date: string;
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
  newActive: number;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
  totalActive: number;
}

interface CountriesProps {
  id: string;
  countryName: string;
  countryCode: string;
  totalDeaths: number;
}

interface GlobalDataResponse {
  global: GlobalProps;
  sortedList: CountriesProps[];
}

interface SearchedCountryProps {
  country: string;
  date: string,
  confirmed: number,
  active: number,
  deaths: number,
  recovered: number
}

interface ChartsProps {
  dates: Array<string>;
  confirmedValues: Array<number>;
  activeValues: Array<number>;
  deathsValues: Array<number>;
  recoveredValues: Array<number>;
}

export default function Home({ global, sortedList }: GlobalDataResponse) {

  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState<SearchedCountryProps[]>([])
  const [dailyVariationData, setDailyVariationData] = useState<SearchedCountryProps>({} as SearchedCountryProps)

  const [selectedInfo, setSelectedInfo] = useState<'confirmed' | 'active' | 'deaths' | 'recovered'>('confirmed')
  const [selectedChartsYAxis, setSelectedChartsYAxis] = useState<number[]>([] as number[])
  const [chartsData, setChartsData] = useState<ChartsProps>({} as ChartsProps)


  const [loading, setLoading] = useState(false);

  async function handleGetCountryCompleteData(event: FormEvent) {
    event.preventDefault()
    setLoading(true)

    if (country === '') {
      setCountry('')
      alert('Type a country name')
      return 
    }
    try {
      const response = await api.get(`/total/dayone/country/${country.toLowerCase()}`)
      const completeCountryData = response.data.map((country: any) => {
        return {
          country: country.Country,
          date: country.Date,
          confirmed: country.Confirmed,
          active: country.Active,
          deaths: country.Deaths,
          recovered: country.Recovered
        }
      })
      
      setCountryData([...completeCountryData])
      setChartsData(getChartsData(completeCountryData))
      setDailyVariationData(getCountryDailyVariation(completeCountryData))
      
    } catch (error) {
      alert(`Error: ${error.message}`)
    }

    setCountry('')
    setLoading(false)
  }

  function handleSelectedData(set: 'confirmed' | 'active' | 'deaths' | 'recovered') {
    setSelectedInfo(set)
    selectDataColor(selectedInfo)

    switch (set) {
      case 'active':
        setSelectedChartsYAxis(chartsData.activeValues)
        break
      case 'deaths':
        setSelectedChartsYAxis(chartsData.deathsValues)
        break
      case 'recovered':
        setSelectedChartsYAxis(chartsData.recoveredValues)
        break
      default:
        setSelectedChartsYAxis(chartsData.confirmedValues)
    }
  }
  
  return (
    <>
      <Header>
        <div>
          <img src="/logo.svg" alt="Logo"/>

          {/* <button type="button">
            <span></span>
            <span></span>
            <span></span>
          </button> */}
        </div>
      </Header>
        
      <Background/>

      <Content>
        <SearchBox>
          <div>
            <input type="text" placeholder="Type a country name in english!!!" value={country} onChange={(e) => setCountry(e.target.value)} />
            <button type="submit" onClick={handleGetCountryCompleteData}>
              <img src="/icons/search.svg" alt="Search"/>
            </button>
          </div>
        </SearchBox>
       
        {countryData.length ? (
            <CountryStats selectedInfo={selectedInfo}>
              <SectionTitle>
                <img src="/icons/world.svg" alt="World"/>
                <div>
                  <strong>{countryData[0].country}</strong>
                  <span>Last update: {formatedDate(new Date(countryData[countryData.length - 1].date))}</span>
                </div>
              </SectionTitle>

              <div>
                <nav>
                  <button type="button" onClick={() => handleSelectedData('confirmed')} >Infected</button>
                  <button type="button" onClick={() => handleSelectedData('active')} >Active</button>
                  <button type="button" onClick={() => handleSelectedData('deaths')} >Deceased</button>
                  <button type="button" onClick={() => handleSelectedData('recovered')} >Recovered</button>
                </nav>

                {selectedInfo === 'confirmed' && (
                  <>
                    <div>
                      <div>
                        <img src="/icons/arrow.svg" alt="up/down"/>
                        <span>{dailyVariationData.confirmed}</span>
                      </div>
                      <strong>{countryData[countryData.length - 1].confirmed}</strong>
                    </div>
                    <div className="chart">
                      <Charts 
                        xAxisData={chartsData.dates}
                        yAxisData={chartsData.confirmedValues}
                        color={selectDataColor(selectedInfo)}
                      />
                    </div>
                  </>
                )}
                

                {selectedInfo === 'active' && (
                  <>
                    <div>
                      <div>
                        <img src="/icons/arrow.svg" alt="up/down"/>
                        <span>{dailyVariationData.active}</span>
                      </div>
                      <strong>{countryData[countryData.length - 1].active}</strong>
                    </div>
                    <div className="chart">
                      <Charts 
                        xAxisData={chartsData.dates}
                        yAxisData={chartsData.activeValues}
                        color={selectDataColor(selectedInfo)}
                      />
                    </div>
                  </>
                )}

                {selectedInfo === 'deaths' && (
                  <>
                    <div>
                      <div>
                        <img src="/icons/arrow.svg" alt="up/down"/>
                        <span>{dailyVariationData.deaths}</span>
                      </div>
                      <strong>{countryData[countryData.length - 1].deaths}</strong>
                    </div>
                    <div className="chart">
                      <Charts 
                        xAxisData={chartsData.dates}
                        yAxisData={chartsData.deathsValues}
                        color={selectDataColor(selectedInfo)}
                      />
                    </div>
                    </>
                )}

                {selectedInfo === 'recovered' && (
                  <>
                    <div>
                      <div>
                        <img src="/icons/arrow.svg" alt="up/down"/>
                        <span>{dailyVariationData.recovered}</span>
                      </div>
                      <strong>{countryData[countryData.length - 1].recovered}</strong>
                    </div>
                    <div className="chart">
                      <Charts 
                        xAxisData={chartsData.dates}
                        yAxisData={chartsData.recoveredValues}
                        color={selectDataColor(selectedInfo)}
                      />
                    </div>
                  </>
                )}
              </div>
            </CountryStats>
          ) : (
            <Loading>
              <SectionTitle>
                <img src="/icons/map.svg" alt="Map"/>
                <div>
                  <strong>Country</strong>
                  <span>Last update: -- / -- / ----</span>
                </div>
              </SectionTitle>
              <div>
                <img src="/icons/loading.svg" alt="loading"/>
                {loading && <span />}
              </div>
            </Loading>
          )}       

        <WorldInfo>
              <SectionTitle>
                <img src="/icons/map.svg" alt="Map"/>
                <div>
                  <strong>World Scenary</strong>
                  <span>Last update: {global.date}</span>
                </div>
              </SectionTitle>
              <div>
                <Card>
                  <p>Infected</p>
                  <div>
                    <div>
                      <img src="/icons/arrow.svg" alt="up/down"/>
                      <span>{formatedVariation(global.newConfirmed)}</span>
                    </div>
                    <strong>{global.totalConfirmed}</strong>
                  </div>
                </Card>
                <Card>
                  <p>Active</p>
                  <div>
                    <div>
                      <img src="/icons/arrow.svg" alt="up/down"/>
                      <span>{formatedVariation(global.newActive)}</span>
                    </div>
                    <strong>{global.totalActive}</strong>
                  </div>
                </Card>
                <Card>
                  <p>Deaths</p>
                  <div>
                    <div>
                      <img src="/icons/arrow.svg" alt="up/down"/>
                      <span>{formatedVariation(global.newDeaths)}</span>
                    </div>
                    <strong>{global.newDeaths}</strong>
                  </div>
                </Card>
                <Card>
                  <p>Recovered</p>
                  <div>
                    <div>
                      <img src="/icons/arrow.svg" alt="up/down"/>
                      <span>{formatedVariation(global.newRecovered)}</span>
                    </div>
                    <strong>{global.newRecovered}</strong>
                  </div>
                </Card>
              </div>
        </WorldInfo>
     
        <Classification>
          { global && sortedList ? (
            <>
              <SectionTitle>
                <img src="/icons/sort.svg" alt="Sort"/>
                <div>
                  <strong>Death by country</strong>
                  <span>Last update: {global.date}</span>
                </div>
              </SectionTitle>

              <div>
                {sortedList && sortedList.map(country => {
                  return (
                    <Country key={country.id}>
                      <img src={`https://flagcdn.com/${country.countryCode.toLowerCase()}.svg`} alt="Flags"/>
                      <p>{country.countryName}</p>
                      <strong>{country.totalDeaths}</strong>
                    </Country>
                  )
                })}

                {/* <Country>
                  <img src={`https://flagcdn.com/br.svg`} alt="Flags"/>
                  <p>Brazil</p>
                  <strong>20</strong>
                </Country> */}
                
              </div>
            </>
          ) : (
            <p>No results</p>
          )}

          
        </Classification>

      </Content>

      <Footer>
        <span>Developed by Maycon</span>
        <div>
          <Link href="https://github.com/mayconrr13">
            <a>
            <img src="/icons/github.svg" alt="Github"/>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/mayconreisrosario/">
            <a>
              <img src="/icons/linkedin.svg" alt="Linkedin"/>
            </a>
          </Link>
        </div>
      </Footer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/summary').then(response => response.data)

  const global = {
    date: formatedDate(new Date(response.Global.Date)),
    newConfirmed: response.Global.NewConfirmed,
    newDeaths: response.Global.NewDeaths,
    newRecovered: response.Global.NewRecovered,
    newActive: response.Global.NewConfirmed - response.Global.NewDeaths - response.Global.NewRecovered,
    totalConfirmed: response.Global.TotalConfirmed,
    totalDeaths: response.Global.TotalDeaths,
    totalRecovered: response.Global.TotalRecovered,
    totalActive: response.Global.TotalConfirmed - response.Global.TotalDeaths - response.Global.TotalRecovered,
  }

  const countriesDailyInfo = response.Countries.map((country: { ID: string; Country: string; CountryCode: string, TotalDeaths: number }) => {
      return {
        id: country.ID,
        countryName: country.Country,
        countryCode: country.CountryCode,
        totalDeaths: country.TotalDeaths,
      }
    }
  )

  const sortedList = sortListByNumberOfDeaths(countriesDailyInfo)

  return {
    props: {
      global,
      sortedList
    },
  }
}