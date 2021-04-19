import { format } from 'date-fns'
import { ChartsProps, SearchedCountryProps, SortedListProps } from './types'

export function sortListByNumberOfDeaths(list: SortedListProps[]) {
  const compareItems = (item1: SortedListProps, item2: SortedListProps) => {
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
    confirmed: [],
    active: [],
    deaths: [],
    recovered: []
  }

  values.map(dailyData => {
    data.dates.push(dailyData.date)
    data.confirmed.push(dailyData.confirmed)
    data.active.push(dailyData.confirmed - dailyData.deaths - dailyData.recovered)
    data.deaths.push(dailyData.deaths)
    data.recovered.push(dailyData.recovered)
  })

  return data
}

export function selectDataColor(colorSet: 'confirmed' | 'active' | 'deaths' | 'recovered') {
  switch (colorSet) {
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