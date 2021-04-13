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
    margin: auto 1rem;
    width: 100%;

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

  padding: 0 1rem;

  form {
    width: 100%;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 3.5rem;
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
    border: solid 2px var(--text);
    border-radius: 50%;
    background-color: var(--red);
    margin-left: 1rem;
    outline: none;
  }
`;

export const WorldInfo = styled.div`
  width: 100%; 
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  
  section {
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
  }

  > div {
    width: 100%;
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

  div {
    margin-top: 1rem;
    margin-left: auto;

    img {
      height: 0.6rem;
      width: auto;
    }

    span {
      font-size: 0.75rem;
      color: var(--yellow);
    }
  }

  strong {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: left;
  }
`;