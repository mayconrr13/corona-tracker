import { format } from 'date-fns'

interface CountriesProps {
  id: string;
  country: string;
  countryCode: string;
  totalDeaths: number;
}

interface SearchedCountryProps {
  country: string,
  date: string,
  confirmed: number,
  active: number,
  deaths: number,
  recovered: number
}

interface ChartsProps {
  dates: string[];
  confirmedValues: number[];
  activeValues: number[];
  deathsValues: number[];
  recoveredValues: number[];
}

export function sortListByNumberOfDeaths(list: CountriesProps[]) {
  const compareItems = (item1: CountriesProps, item2: CountriesProps) => {
    if (item1.totalDeaths < item2.totalDeaths)
     return -1;
    if (item1.totalDeaths > item2.totalDeaths)
      return 1;
    return 0;
  }
  const sortedList = list.sort(compareItems).reverse().slice(0, 9)

  return sortedList
}

export function formatedDate(date: Date): string {
  const formatedDate = format(new Date(date), "MMM d yyyy")

  return formatedDate.toString()
}

export function formatedVariation(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`
  }

  return value.toFixed(0).toString()
}

export function getCountryDailyVariation(values: SearchedCountryProps[]): SearchedCountryProps {
  try {
    const length = values.length
    const currentData = values.splice(length - 2, 2)

    const valuesOfDailyVariation = {
      country: currentData[1].country,
      date: formatedDate(new Date(currentData[1].date)),
      confirmed: currentData[1].confirmed - currentData[0].confirmed,
      active: currentData[1].active - currentData[0].active,
      recovered: currentData[1].recovered - currentData[0].recovered,
      deaths: currentData[1].deaths - currentData[0].deaths,
    }

    return valuesOfDailyVariation

  } catch (error) {
    alert(`Error: ${error.message}`)
    return {} as SearchedCountryProps
  }
}

export function getChartsData(values: SearchedCountryProps[]): ChartsProps {
  let data: ChartsProps = {
    dates: [],
    confirmedValues: [],
    activeValues: [],
    deathsValues: [],
    recoveredValues: []
  }

  values.map(dailyData => {
    data.dates.push(dailyData.date)
    data.confirmedValues.push(dailyData.confirmed)
    data.activeValues.push(dailyData.confirmed - dailyData.deaths - dailyData.recovered)
    data.deathsValues.push(dailyData.deaths)
    data.recoveredValues.push(dailyData.recovered)
  })

  return data
}

export function selectDataColor(set: 'confirmed' | 'active' | 'deaths' | 'recovered') {
  switch (set) {
    case 'active':
      return "#fdcc78"
      break
    case 'deaths':
      return "#9F3DF6"
      break
    case 'recovered':
      return "#00CCAD"
      break
    default:
      return '#CC002C'
  }
}