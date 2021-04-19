export interface GlobalProps {
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

export interface SortedListProps {
  id: string;
  countryName: string;
  countryCode: string;
  totalDeaths: number;
}

export interface GlobalDataResponse {
  global: GlobalProps;
  sortedList: SortedListProps[];
}

export interface SearchedCountryProps {
  country: string;
  date: string,
  'confirmed': number,
  'active': number,
  'deaths': number,
  'recovered': number
}

export interface ChartsProps {
  dates: string[];
  'confirmed': number[];
  'active': number[];
  'deaths': number[];
  'recovered': number[];
}