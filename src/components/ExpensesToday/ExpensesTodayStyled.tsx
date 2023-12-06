import styled from "styled-components";

export const ExpensesTodayStyled = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #c3c4c1;
    font-size: 1.2rem;
  }

  p {
    margin: 0.7rem 0 0 0;
    font-size: 1.5rem;
  }

  .today_text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
  }

  .day-browser {
    display: flex;
    justify-content: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  p {
    margin: 0.7rem 0 0 0;
    font-size: 1.5rem;
    
  }

  button {
    background-color: #ec765c;
    border: none;
    border-radius: 0.7rem;
    padding: 0 0.5rem;
    margin: 0.3rem 0.5rem;
  }

  img {
    width: 1.9rem;
  }
`;
