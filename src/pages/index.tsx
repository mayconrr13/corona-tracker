import { Header, Content, SearchBox, WorldInfo, Card } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Header>
        <div>
          <img src="/logo.svg" alt="Logo"/>

          <button type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </Header>

      <Content>
        <form>
          <SearchBox>
            <input type="text" placeholder="Country"/>
            <button>
              <img src="/icons/search.svg" alt="Search"/>
            </button>
          </SearchBox>
        </form>

        <WorldInfo>
          <section>
            <img src="/icons/map.svg" alt="Map"/>
            <div>
              <strong>World Scenary</strong>
              <span>Last update: 12 Apr 2021</span>
            </div>
          </section>
          <div>
            <Card>
              <p>Infected</p>
              <div>
                <img src="/icons/arrow.svg" alt="up/down"/>
                <span>27k</span>
              </div>
              <strong>132135463</strong>
            </Card>
            <Card>
              <p>Active</p>
              <div>
                <img src="/icons/arrow.svg" alt="up/down"/>
                <span>27k</span>
              </div>
              <strong>132135463</strong>
            </Card>
            <Card>
              <p>Deceased</p>
              <div>
                <img src="/icons/arrow.svg" alt="up/down"/>
                <span>27k</span>
              </div>
              <strong>132135463</strong>
            </Card>
            <Card>
              <p>Recovered</p>
              <div>
                <img src="/icons/arrow.svg" alt="up/down"/>
                <span>27k</span>
              </div>
              <strong>132135463</strong>
            </Card>
          </div>
        </WorldInfo>
     
        {/* <div>
          <section>
            <div>
              <img src="/icons/map.svg" alt="Map"/>
              <div>
                <strong>Brazil, BR</strong>
                <span>Last update: 1 hour ago</span>
              </div>
            </div>
          </section>

          <nav>
            <p>Infected</p>
            <p>Active</p>
            <p>Deceased</p>
            <p>Recovered</p>
          </nav>

          <div>
            <img src="/icons/arrow.svg" alt="up/down"/>
            <span>27k</span>
            <strong>132456798</strong>
          </div>

          <div>
            Chart
          </div>

        </div>

        <div>
          <section>
            <div>
              <img src="/icons/map.svg" alt="Map"/>
              <div>
                <strong>Death by country</strong>
                <span>Last update: 12 Apr 2021</span>
              </div>
            </div>
          </section>

          <div>
            <div>
              <img src="/icons/flag.svg" alt="Flags"/>
              <p>United States</p>
              <strong>1321544688</strong>
            </div>
          </div>


        </div> */}

      </Content>
    </>
  )
}
