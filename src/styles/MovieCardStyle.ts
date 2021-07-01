import styled from 'styled-components';

export const MoviesDiv = styled.div`
   background-color: black;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-evenly;
   align-items: center;
`;
export const MovieCardDiv = styled.div`
   display: flex;
   flex-flow: column wrap;
   /* border: 1px solid red; */
   width: 290px;
   transition: 0.3s ease;
   margin-bottom: 20px;
   &:hover {
      transition: 0.3s ease;
      transform: scale(1.1, 1.1);
   }
`;

export const MovieImage = styled.img`
   height: 350px;
   margin: 20px;
   width: 250px;
   cursor: pointer;
`;
