import { FormEvent, useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { ChartsProps, GlobalDataResponse, SearchedCountryProps } from '../utils/types'

import api from '../services/api'
import { formatedDate, getChartsData, getCountryDailyVariation, sortListByNumberOfDeaths } from '../utils/globalInformation'

import { Header, Background, Content, SearchBox, WorldInfo, CountryStats, Classification, Country, Footer, EmptyBox } from '../styles/pages/Home'

import { Section } from '../components/Section'
import { InfoCard } from '../components/InfoCard'
import { CountryCases } from '../components/CountryCases'

export default function Home({ global, sortedList }: GlobalDataResponse) {

  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState<SearchedCountryProps[]>([])
  const [dailyVariationData, setDailyVariationData] = useState<SearchedCountryProps>({} as SearchedCountryProps)

  const [selectedInfo, setSelectedInfo] = useState<'confirmed' | 'active' | 'deaths' | 'recovered'>('confirmed')

  const [chartsData, setChartsData] = useState<ChartsProps>({} as ChartsProps)


  const [loading, setLoading] = useState(false);

  async function handleGetCountryCompleteData(event: FormEvent): Promise<void> {
    event.preventDefault()
    setLoading(true)

    if (country === '') {
      setCountry('')
      alert('Type a country name')
      return 
    }
    try {
      const response = await api.get(`/total/dayone/country/${country.toLowerCase()}`)
      const completeCountryData: SearchedCountryProps[] = response.data.map((country: any) => {
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
      setDailyVariationData(getCountryDailyVariation(completeCountryData))
      
      setChartsData(getChartsData(completeCountryData))
    } catch (error) {
      alert(`Error: ${error.message}`)
    }

    setCountry('')
    setLoading(false)
    return 
  }
  
  return (
    <>
      <Header>
        <div>
          <img src="/logo.svg" alt="Logo"/>
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
              <Section icon="world" title={countryData[0].country} date={formatedDate(new Date(countryData[countryData.length - 1].date))} />

              <div>
                <nav>
                  <button type="button" onClick={() => setSelectedInfo('confirmed')} className={selectedInfo === 'confirmed' ? 'active' : ''} >Infected</button>
                  <button type="button" onClick={() => setSelectedInfo('active')} className={selectedInfo === 'active' ? 'active' : ''} >Active</button>
                  <button type="button" onClick={() => setSelectedInfo('deaths')} className={selectedInfo === 'deaths' ? 'active' : ''} >Deaths</button>
                  <button type="button" onClick={() => setSelectedInfo('recovered')} className={selectedInfo === 'recovered' ? 'active' : ''} >Recovered</button>
                </nav>

                <CountryCases 
                  variation={dailyVariationData}
                  selectedData={selectedInfo} 
                  countryData={countryData} 
                  chartData={{
                    xAxis: chartsData.dates, 
                    yAxis: chartsData[selectedInfo]
                  }}
                />
              </div>
            </CountryStats>
          ) : (
            <EmptyBox>
              <Section icon="map" title="Country" date="-- / -- / ----" />
              <div>
                <img src="/icons/loading.svg" alt="loading"/>
                {loading && <span />}
              </div>
            </EmptyBox>
          )}       

        <WorldInfo>
              <Section icon="world" title="World Scenary" date={global.date} />
              <div>
                <InfoCard title="Infected" newCases={global.newConfirmed} cases={global.totalConfirmed} />
                <InfoCard title="Active" newCases={global.newActive} cases={global.totalActive} />
                <InfoCard title="Deaths" newCases={global.newDeaths} cases={global.totalDeaths} />
                <InfoCard title="Recovered" newCases={global.newRecovered} cases={global.totalRecovered} />
              </div>
        </WorldInfo>
     
        <Classification>
          { global && sortedList ? (
            <>
              <Section icon="sort" title="Death by country" date={global.date} />

              <div>
                {sortedList && sortedList.map(country => {
                  return (
                    <Country key={country.id}>
                      <img src={`https://flagcdn.com/${country.countryCode.toLowerCase()}.svg`} alt={country.countryCode}/>
                      <p>{country.countryName}</p>
                      <strong>{country.totalDeaths}</strong>
                    </Country>
                  )
                })}                
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
          <Link href="https://mayconrr.vercel.app/">
            <a>
              <img src="/icons/link.svg" alt="Portifólio"/>
            </a>
          </Link>
        </div>
      </Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 60 * 60 * 12 //12horas
  }
}