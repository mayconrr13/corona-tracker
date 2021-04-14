import { Header, Background, Content, SearchBox, WorldInfo, SectionTitle, CountryStats, Card, Classification, Country, Footer } from '../styles/pages/Home'
import Link from 'next/link'

export default function Home() {
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
            <input type="text" placeholder="Country"/>
            <button>
              <img src="/icons/search.svg" alt="Search"/>
            </button>
          </div>
        </SearchBox>
       
        <CountryStats>
          <SectionTitle>
            <img src="/icons/map.svg" alt="Map"/>
            <div>
              <strong>Brazil, BR</strong>
              <span>Last update: 1 hour ago</span>
            </div>
          </SectionTitle>

          <div>
            <nav>
              <button type="button">Infected</button>
              <button type="button">Active</button>
              <button type="button">Deceased</button>
              <button type="button">Recovered</button>
            </nav>

            <div>
              <div>
                <img src="/icons/arrow.svg" alt="up/down"/>
                <span>27k</span>
              </div>
              <strong>20000000</strong>
            </div>

            <div className="chart"/>

          </div>

        </CountryStats>

        <WorldInfo>
          <SectionTitle>
            <img src="/icons/map.svg" alt="Map"/>
            <div>
              <strong>World Scenary</strong>
              <span>Last update: 12 Apr 2021</span>
            </div>
          </SectionTitle>
          <div>
            <Card>
              <p>Infected</p>
              <div>
                <div>
                  <img src="/icons/arrow.svg" alt="up/down"/>
                  <span>27k</span>
                </div>
                <strong>20000000</strong>
              </div>
            </Card>
            <Card>
              <p>Active</p>
              <div>
                <div>
                  <img src="/icons/arrow.svg" alt="up/down"/>
                  <span>27k</span>
                </div>
                <strong>20000000</strong>
              </div>
            </Card>
            <Card>
              <p>Deceased</p>
              <div>
                <div>
                  <img src="/icons/arrow.svg" alt="up/down"/>
                  <span>27k</span>
                </div>
                <strong>20000000</strong>
              </div>
            </Card>
            <Card>
              <p>Recovered</p>
              <div>
                <div>
                  <img src="/icons/arrow.svg" alt="up/down"/>
                  <span>27k</span>
                </div>
                <strong>20000000</strong>
              </div>
            </Card>
          </div>
        </WorldInfo>
     
        <Classification>
          <SectionTitle>
            <img src="/icons/sort.svg" alt="Sort"/>
            <div>
              <strong>Death by country</strong>
              <span>Last update: 12 Apr 2021</span>
            </div>
          </SectionTitle>

          <div>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
            <Country>
              {/* <img src="/icons/flag.svg" alt="Flags"/> */}
              <span />
              <p>United States</p>
              <strong>500000</strong>
            </Country>
          </div>
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
