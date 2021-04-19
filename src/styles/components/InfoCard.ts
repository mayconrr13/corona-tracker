import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 123px;

  padding: 1rem;
  background-color: var(--gray-700);
  width: 100%;
  border-radius: 0.5rem;

  p {
    color: var(--gray-100);
    text-align: left;
    font-size: 1rem;

    position: relative;
    padding-left: 1rem;

    &::before {
      content: '';
      width: 8px;
      height: 100%;      
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  > div {
    margin: 1.5rem auto 0 auto;
    
    display: grid;
    grid-template-columns: 1fr fit-content(4rem);
    grid-template-rows: 1.5rem 1.5rem 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". variation"
      "value ."
      "chart chart";

    > div{
      grid-area: variation;
      max-width: 3rem;
      height: 100%;
      max-height: 1.5rem;
      margin-top: auto;
      display: flex;


      img {
        height: 0.8rem;
        width: auto;
      }

      span {
        color: var(--yellow);
        font-size: 0.75rem;
      }
    }

    strong {
      grid-area: value;
      font-size: 1.25rem;
      margin-left: auto
    }
  }

  @media (min-width: 550px) {
    > div {
      div {
        img{
          height: 1rem;
          width: auto;
        }

        span {
          font-size: 1rem;
        }
      }

      strong {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1050px) {
    > div {
      display: flex;
      flex-direction: column;
      height: 3rem;
      width: 100%;

      > div {
        margin: 0 0 0 auto;
      }

      strong {
        margin-right: 1rem;
      }
    }
  }
`;