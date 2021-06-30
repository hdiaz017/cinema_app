import styled from 'styled-components';

export const DivImage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-flow: column wrap;
`;
export const MovieImage = styled.img`
   width: 700px;
   cursor: pointer;
   margin: 0px;
   padding: 0;
`;

export const MovieTitle = styled.h2`
   word-wrap: break-word;
   color: white;
   font-size: 1rem;
   margin: 30px 0px 10px 30px;
`;
export const MovieOverview = styled.h3`
   color: white;
   margin: 30px;
   font-size: 1rem;
`;

export const DivTexts = styled.div`
   display: flex;
   flex-flow: column wrap;
`;
