import React from 'react'
import { Container } from '../styles/components/InfoCard'

import { formatedVariation } from '../utils/globalInformation'

interface CardProps {
  title: string;
  cases: number;
}

export const InfoCard = ({ title, cases }: CardProps) => {
  return (
    <Container>
      <p>{title}</p>
      <div>
        <div>
          <img src="/icons/arrow.svg" alt="up/down"/>
          <span>{formatedVariation(cases)}</span>
        </div>
        <strong>{cases}</strong>
      </div>
    </Container>
  )
}
