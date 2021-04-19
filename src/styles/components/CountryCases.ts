import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: var(--yellow);
  margin: 0 0 0 auto;

  img {
    margin-right: 0.5rem;
  }

  strong {
    max-height: 3rem;
    margin-right: 2rem;
    font-size: 1.75rem;
  }
`;

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 250px;
  flex: 1;

  @media (min-width: 1050px) {
    min-height: 0;
    flex: 1;
  }
`;