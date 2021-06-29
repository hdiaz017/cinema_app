import styled from 'styled-components';

export const MoviesDiv = styled.div`
   background-color: black;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-evenly;
   align-items: center;
   border: 1px solid red;
`;
export const MovieCardDiv = styled.div`
   display: flex;
   flex-flow: column wrap;
   /* border: 1px solid red; */
   width: 290px;
`;

export const MovieImage = styled.img`
   height: 350px;
   margin: 20px;
   transition: 0.3s ease;
   width: 250px;
   &:hover {
      transition: 0.3s ease;
      transform: scale(1.1, 1.1);
   }
`;

export const MovieTitle = styled.h2`
   word-wrap: break-word;
   color: white;
   font-size: 1rem;
   margin: 5px 0px 10px 20px;
`;
