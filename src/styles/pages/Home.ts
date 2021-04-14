import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 5rem;
  z-index: 50;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  background-color: var(--gray-800);

  div {
    width: 100%;
    max-width: 775px;
    padding: 0 1rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 3rem;
      width: auto;
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      background-color: transparent;
      border: none;

      span {
        width: 1.5rem;
        height: 0.25rem;
        display: block;
        border-radius: 0.125rem;

        background-color: var(--text);

        & + span {
          margin-top: 3px;
        }
      }
    }
  }

`;

export const Content = styled.main`
  width: 100vw;
  position: relative;

  padding: 0 1rem;

  form {
    width: 100%;
    max-width: 775px;
    margin: 0 auto;
  }

  .background {
    position: absolute;
    top: -2rem;
    left: 0;
    right: 0;

    min-width: 375px;
    height: 150vh;
    width: 100vw;
    z-index: -1;

    background-image: url('/images/background-sm.png');
    background-position: center -2rem;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SearchBox = styled.div`
  height: 3.5rem;
  width: 100%;
  margin-top: calc(5rem + 2rem);  // 5rem = header height;
  padding-left: 1.5rem;

  display: flex;
  align-items: center;
  background-color: var(--gray-700);
  border: none;
  border-radius: 1.75rem;

  input {
    flex: 1;
    border: none;
    background-color: transparent;
    color: var(--text);
    outline: none;

    &::placeholder {
      color: var(--gray-100);
    }
  }

  button {
    height: 3.5rem;
    width: 3.5rem;
    border: none;
    border-radius: 50%;
    background-color: var(--red);
    margin-left: 1rem;
    outline: none;
  }
`;

export const WorldInfo = styled.div`
  width: 100%; 
  max-width: 775px;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    max-height: 340px;
    margin-top: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem 1rem;
    grid-template-areas:
      "card1 card2"
      "card3 card4";

    > div {
      &:nth-child(1) {
        grid-area: card1;

        p {
          &::before {
            background: var(--red);
          }
        }
      }

      &:nth-child(2) {
        grid-area: card2;

        p {
          &::before {
            background: var(--yellow);
          }
        }
      }

      &:nth-child(3) {
        grid-area: card3;

        > p {
          &::before {
            background: var(--purple);
          }
        }
      }

      &:nth-child(4) {
        grid-area: card4;

        >p {
          &::before {
            background: var(--green);
          }
        }
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

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
    grid-template-columns: 1fr fit-max-content(4rem);
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
`;

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 1rem;

    strong {
      font-size: 1.5rem;
      color: var(--text);
    }

    span {
      font-size: 0.75rem;
      color: var(--gray-100);
    }
  }
`;

export const CountryStats = styled.div`
  max-width: 775px;
  margin: 0 auto;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    margin-top: 2rem;

    background-color: var(--gray-700);
    border-radius: 0.5rem;
    width: 100%;
    padding: 1rem;

    nav {
      width: 100%;
      margin-bottom: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        border: none;
        background-color: transparent;
        color: var(--text);
        font-size: 0.8rem;
      }
    }

    nav + div {
    margin: 1.5rem auto 0 auto;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr fit-max-content(4rem);
    grid-template-rows: 1.5rem 3rem 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". variation"
      "value ."
      "chart chart";

      > div:first-child {
        grid-area: variation;
        height: 100%;
        max-height: 1.5rem;
        margin-top: auto;

        img {
          
        }

        span {
          color: var(--yellow);
        }
      }

      strong {
        grid-area: value;
        margin-left: auto;
        max-height: 3rem;
        font-size: 1.75rem;
      }

      > div.chart {
        grid-area: chart;
        width: 100%;
        height: 10rem;

        margin-top: 1rem;

        background-color: var(--yellow);
      }
    }
  }
`;

export const Classification = styled.div`
 max-width: 775px;
  margin: 0 auto;
  margin-top: 3rem;

  > div {
    margin-top: 1.5rem;
    margin-bottom: 3rem;

    width: 100%;
    padding: 1rem;
    background-color: var(--gray-700);
    border-radius: 0.5rem;

    > div + div {
      margin-top: 1rem;
    }
  }
`;

export const Country = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);

  // SPAN ---> IMG
  span {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: #ffffff;

    margin-right: 1rem;
  }

  p {
    font-size: 1rem;
  }

  strong {
    margin-left: auto;
    font-size: 1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  margin-bottom: 2rem;

  span {
    font-size: 1.25rem;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;

    > a {
      width: 2.5rem;
      height: 2.5rem;
      background: var(--gray-700);
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      & + a {
        margin-left: 2rem;
      }

      > img {
        width: 1.25rem;
        height: 1.25rem;
        color: var(--text);
      }
    }
  }
`;