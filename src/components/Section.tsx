import React from 'react'
import { Container } from '../styles/components/Section'

interface SectionProps {
  icon: string;
  title: string;
  date: string;
}


export const Section = ({ icon, title, date }: SectionProps) => {
  return (
    <Container>
      <img src={`/icons/${icon}.svg`} alt={icon}/>
      <div>
        <strong>{title}</strong>
        <span>Last update: {date}</span>
      </div>
    </Container>
  )
}
