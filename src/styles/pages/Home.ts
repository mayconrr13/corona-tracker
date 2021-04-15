import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  min-width: 280px;
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

  @media (min-width: 1050px) {
    background-color: #12121250;

    div {
      max-width: 1175px;

      button {
        display: none;
      }
    }
  }
`;

export const Content = styled.main`
  width: 100vw;

  padding: 0 1rem;
  margin: 8rem auto 0 auto; // 5rem header + 3rem margin
  width: 100%;
  min-width: 280px;
  max-width: 775px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1050px) {
    max-width: 1175px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr minmax(280px, 350px);
    grid-template-rows: 3.5rem 26rem 14fr;
    gap: 2rem 2rem;
    grid-template-areas:
      "search sort"
      "country sort"
      "world sort";
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* min-width: 375px; */
  height: 100vh;
  width: 100vw;
  z-index: -1;

  background-image: url('/images/background-sm.svg');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1050px) {
    height: 100%;
    background-image: url('/images/background-lg.svg');
  }
`;

export const SearchBox = styled.form`
  width: 100%;

  div {
    height: 100%;
    width: 100%;
    padding-left: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-700);
    border: none;
    border-radius: 1.75rem;

    input {
      flex: 1;
      min-width: 150px;
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
      min-width: 3.5rem;
      border: none;
      border-radius: 50%;
      background-color: var(--red);
      margin-left: 1rem;
      outline: none;

      img {
        height: 1.5rem;
        width: 1.5rem;
        min-width: 1.5rem;
      }
    }
  }

  @media (min-width: 1050px) {
    grid-area: search;
    max-width: 775px;
  }
`;

export const WorldInfo = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 775px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 100%;
    max-width: 775px;
    
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem 0;
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4";

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

  @media (min-width: 400px) {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, 1fr);
      gap: 1rem 1rem;
      grid-template-areas:
        "card1 card2"
        "card3 card4";
    }
  }

  @media (min-width: 1050px) {
    grid-area: world;
    max-width: 775px;
    margin-top: 0;
    
    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Card = styled.div`
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

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.5rem;

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
  margin: 0 auto;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 26rem;

  > div {
    background-color: var(--gray-700);
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    nav {
      width: 100%;
      max-width: 400px;
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
    margin: 0 auto 1.5rem auto;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr max-content(4rem);
    grid-template-rows: 1.5rem 3rem;
    gap: 0px 0px;
    grid-template-areas:
      ". variation"
      "value .";

      > div {
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

    }

    > div.chart {
      width: 100%;
      /* height: 100%; */
      flex: 1;

      background-color: var(--yellow);
    }
  }

  @media (min-width: 1050px) {
    grid-area: country;
    margin: 0;
    max-width: 775px;
    height: 100%;

    > div {
      nav {
        button {
          font-size: 1rem;
        }
      }
    }
  }
`;

export const Classification = styled.div`
  width: 100%;
  max-width: 775px;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    margin-bottom: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    padding: 1rem;
    background-color: var(--gray-700);
    border-radius: 0.5rem;

    > div + div {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1050px) {
    grid-area: sort;
    margin: 0;
    height: 100%;
    max-width: 350px;
    
    > div {
      height: 100%;
      margin: 0;

      div + div {
        margin-top: 0;
      }
    }
  }
`;

export const Country = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);

  // SPAN ---> IMG
  span, img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
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

  @media (min-width: 1050px) {
    padding: 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-width: 280px;
  margin: 2rem 0 1rem 0;

  span {
    font-size: 1rem;
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