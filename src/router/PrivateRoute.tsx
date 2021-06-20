import React from 'react';

import { Redirect, Route } from 'react-router-dom';
interface Private {
   path: string;
   isAuthenticated: boolean | undefined;
   component: React.FC;
}

export const PrivateRoute: React.FC<Private> = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
   //    localStorage.setItem('lastPath', rest.location.pathname);
   return (
      <Route
         {...rest}
         component={(
            props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
         ) =>
            isAuthenticated ? (
               <Component {...props} />
            ) : (
               <Redirect to='/login' />
            )
         }
      />
   );
};
