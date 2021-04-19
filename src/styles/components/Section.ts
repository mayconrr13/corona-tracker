import styled from 'styled-components'

export const Container = styled.section`
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