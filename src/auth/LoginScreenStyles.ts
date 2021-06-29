import styled from 'styled-components';

export const BackgroundDiv = styled.div`
   background-image: url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: 100vh;
`;
export const TitleH1 = styled.h1`
   color: red;
   font-size: 3rem;
   text-align: left;
   padding: 50px 0px 0px 50px;
`;

export const LoginForm = styled.form`
   min-height: 660px;
   display: flex;
   flex-flow: column wrap;
   justify-content: center;
   align-items: flex-start;
   margin-left: auto;
   margin-right: auto;
   padding-left: 60px;
   border-radius: 10px;
   width: 400px;
   /* text-align: center; */
   background-color: rgba(181, 171, 170, 0.1);
`;

export const TitleH2 = styled.h2`
   color: #fff;
   font-size: 2rem;
`;
export const FormDiv = styled.div`
   display: flex;
   flex-flow: column wrap;
   align-items: center;
   justify-content: center;
`;

export const InputName = styled.input`
   background-color: #333;
   color: #fff;
   height: 50px;
   border: none;
   border-radius: 8px;
   padding: 0px 12px;
   width: 300px;
   margin-top: 20px;
   font-size: 1rem;
   font-weight: 500;
`;
export const InputLogin = styled.input`
   background-color: #333;
   color: #fff;
   height: 50px;
   border: none;
   border-radius: 8px;
   width: 300px;
   padding: 0px 12px;
   margin-top: 20px;
   font-size: 1rem;
   font-weight: 500;
`;

export const SignInButton = styled.button`
   background-color: red;
   color: #fff;
   height: 50px;
   border: none;
   border-radius: 8px;
   width: 320px;
   padding: 0px 12px;
   margin-top: 20px;
   font-size: 1rem;
   font-weight: 700;
`;
