import { styled } from 'styled-components';

export const TotalBalanceStyled = styled.div`
width: 40%;
padding: 1.5rem;
border-radius:1rem;
background-color: #ec765c ;
color: #fff;
display : flex;
justify-content: space-between;

.totalBalance {
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.2rem;
    }
    
    p {
        margin :1rem 0 0 0;
        strong{
            font-size: 2rem;
        }
    }
}

.navigation-arrows {
    display: flex;
    flex-direction: row;

    img {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
     }
}


`
