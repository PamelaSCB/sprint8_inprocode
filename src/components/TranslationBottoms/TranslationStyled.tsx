import styled from 'styled-components';

export const TranslationStyled = styled.section`
  width: 43%;
  padding: 2.5rem 0 1.3rem 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button {
    margin: 0 0.5rem;
    background-color: transparent;
    border: none;
    border-radius: 1.5rem;
    padding: 0.1rem;
  }

  button:hover {
    cursor: pointer;
    background-color:#75B5BE;
    transition: 0.5s;
    
  }

  img {
    width: 2rem;
  }
`;