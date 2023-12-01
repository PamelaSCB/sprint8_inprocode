import styled from "styled-components";

export const BalanceOfExpensesStyled = styled.section`
  width: 40%;
  background-color: #fff;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0.5rem 1rem;
  }

  .graph-line {
    border-top: 0.15rem solid #c3c4c1;
    height: 0.1rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }

  footer {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
