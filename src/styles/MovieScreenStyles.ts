import styled from 'styled-components';
import {
   Like as LikeReg,
   Dislike as DislikeReg,
} from '@styled-icons/boxicons-regular';
import { Like, Dislike } from '@styled-icons/boxicons-solid';

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
   font-size: 1.8rem;
   margin: 30px 0px 10px 30px;
   width: 450px;
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

export const MovieInfo = styled.div`
   display: flex;
   flex-flow: row;
`;

export const DivInfo = styled.div`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   align-items: baseline;
`;

export const Rate = styled.p`
   margin: 30px 30px 0px 20px;
   font-size: 1rem;
   color: white;
`;

export const DivFavs = styled.div`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   align-items: baseline;
`;

export const LikeRegular = styled(LikeReg)`
   margin-right: 10px;
   cursor: pointer;
`;
export const DislikeRegular = styled(DislikeReg)`
   margin: 0;
   padding: 0;
   cursor: pointer;
`;
export const LikeSolid = styled(Like)`
   margin-right: 10px;
   cursor: pointer;
`;
export const DislikeSolid = styled(Dislike)`
   cursor: pointer;
`;
