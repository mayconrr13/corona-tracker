import { Header, Background, Content, SearchBox, WorldInfo, SectionTitle, CountryStats, Card, Classification, Country, Footer } from '../styles/pages/Home'
import Link from 'next/link'
import api from '../services/api'
import { FormEvent, useState } from 'react'
import { GetStaticProps } from 'next'
import { formatedDate, formatedVariation, getCountryDailyVariation, sortListByNumberOfDeaths } from '../utils/globalInformation'

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


export default function Home({ global, sortedList }: GlobalDataResponse) {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState<SearchedCountryProps[]>([])
  const [chartsData, setChartsData] = useState([])
  const [dailyVariationData, setDailyVariationData] = useState<SearchedCountryProps>({} as SearchedCountryProps)
  const [selectedInfo, setSelectedInfo] = useState<'confirmed' | 'active' | 'deaths' | 'recovered'>('confirmed')
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
      const completeCountryData = response.data.map(country => {
        return {
          country: country.Country,
          date: formatedDate(new Date(country.Date)),
          confirmed: country.Confirmed,
          active: country.Active,
          deaths: country.Deaths,
          recovered: country.Recovered
        }
      })
      
      setCountryData([...completeCountryData])

      setDailyVariationData(getCountryDailyVariation(completeCountryData))
      
    } catch (error) {
      alert(`Error: ${error.message}`)
    }

    setCountry('')
    setLoading(false)
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
       
        <CountryStats>
          {countryData.length ? (
            <>
              <SectionTitle>
                <img src="/icons/map.svg" alt="Map"/>
                <div>
                  <strong>{countryData[0].country}</strong>
                  <span>Last update: {countryData[countryData.length - 1].date}</span>
                </div>
              </SectionTitle>

              <div>
                <nav>
                  <button type="button" onClick={() => setSelectedInfo('confirmed')} >Infected</button>
                  <button type="button" onClick={() => setSelectedInfo('active')} >Active</button>
                  <button type="button" onClick={() => setSelectedInfo('deaths')} >Deceased</button>
                  <button type="button" onClick={() => setSelectedInfo('recovered')} >Recovered</button>
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
                    <div className="chart"/>
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
                    <div className="chart"/>
                  </>
                )}

                {selectedInfo === 'deaths' && (
                  <>
                    <div>
                      <div>
                        <img src="/icons/arrow.svg" alt="up/down"/>
                        <span>{dailyVariationData.deaths}</span>
                      </div>
                      <strong>{countryData[countryData.length - 1].confirmed}</strong>
                    </div>
                    <div className="chart"/>
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
                    <div className="chart"/>
                  </>
                )}

              </div>
            </>
          ) : (
            <></>
          )} 

          {!loading && !countryData.length && (
            <p>No results</p>
          )}

          {loading || (loading && countryData.length) &&
            <div>
              <span>Loading</span>
            </div>
          }
        </CountryStats>

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/summary').then(response => response.data)
  // const {Global, Countries} = response

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
    }
  }
}