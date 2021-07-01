import React, { useRef } from 'react';

import { useAppDispatch } from '../app/hooks';
import { login } from '../reducers/authReducer';
import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {
   TitleH1,
   TitleH2,
   LoginForm,
   InputLogin,
   BackgroundDiv,
   FormDiv,
   SignInButton,
} from './LoginScreenStyles';

export const LoginScreen = () => {
   const dispatch = useAppDispatch();
   const inputRef = useRef<HTMLInputElement>(null);
   const history = useHistory();
   const [{ user, password }, handleInputChange, reset] = useForm({
      user: '',
      password: '',
   });
   const registeredUser = [
      {
         name: 'hiram',
         password: '123',
         uid: 'afalkj-22342-sdfsdf',
      },
   ];

   const handleLogin = (e: { preventDefault: () => void }) => {
      e.preventDefault();

      if (user === '') {
         // eslint-disable-next-line no-alert
         alert('Please enter a Username.');
         reset();
         !!inputRef.current && inputRef.current.select();
         return;
      }

      const foundUser = registeredUser.find(
         (u) => u.name === user && u.password === password,
      );

      if (foundUser) {
         dispatch(login(registeredUser[0]));

         history.replace('/');
      } else {
         // eslint-disable-next-line no-alert
         alert(`User '${user}' is not registered or password is not correct.`);
         reset();
         !!inputRef.current && inputRef.current.select();
      }
   };
   return (
      <BackgroundDiv>
         <TitleH1>NETFLIX</TitleH1>
         <LoginForm onSubmit={handleLogin}>
            <TitleH2>Sign In</TitleH2>
            <FormDiv>
               <InputLogin
                  id='login_user'
                  type='text'
                  placeholder='Username'
                  value={user}
                  name='user'
                  onChange={handleInputChange}
                  ref={inputRef}
               />
               <InputLogin
                  id='login_password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  name='password'
                  onChange={handleInputChange}
               />
               <SignInButton
                  id='login_button'
                  type='submit'
                  className='btn btn-primary'
                  // onClick={handleLogin}
               >
                  Log In
               </SignInButton>
            </FormDiv>
         </LoginForm>
      </BackgroundDiv>
   );
};
