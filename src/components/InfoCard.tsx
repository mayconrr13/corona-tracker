import React from 'react'
import { Container } from '../styles/components/InfoCard'

import { formatedVariation } from '../utils/globalInformation'

interface CardProps {
  title: string;
  cases: number;
  newCases: number;
}

export const InfoCard = ({ title, cases, newCases }: CardProps) => {
  return (
    <Container>
      <p>{title}</p>
      <div>
        <div>
          <img src="/icons/arrow.svg" alt="up/down"/>
          <span>{formatedVariation(newCases)}</span>
        </div>
        <strong>{cases}</strong>
      </div>
    </Container>
  )
}
