import React from 'react'
import Charts from './Charts'

import { SearchedCountryProps } from '../utils/types'
import { selectDataColor } from '../utils/globalInformation'

import { InfoContainer, ChartContainer } from '../styles/components/CountryCases'

interface CountryCasesProps {
  variation: SearchedCountryProps;
  selectedData: 'confirmed' | 'active' | 'deaths' | 'recovered';
  countryData: SearchedCountryProps[];
  chartData: {
    xAxis: string[],
    yAxis: number[],
  };
}

export const CountryCases = ({ variation, selectedData, countryData, chartData }: CountryCasesProps) => {
  return (
    <>
      <InfoContainer>
        <div>
          <img src="/icons/arrow.svg" alt="up/down"/>
          <span>{variation[selectedData]}</span>
        </div>
        <strong>{countryData[countryData.length - 1][selectedData]}</strong>
      </InfoContainer>
      <ChartContainer className="chart">
        <Charts 
          xAxisData={chartData.xAxis}
          yAxisData={chartData.yAxis}
          color={selectDataColor(selectedData)}
        />
      </ChartContainer>
    </>
  )
}
