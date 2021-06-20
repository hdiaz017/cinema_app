import React from 'react';

import { Redirect, Route } from 'react-router-dom';
interface Public {
   exact: boolean;
   path: string;
   isAuthenticated: boolean | undefined;
   component: React.FC;
}

export const PublicRoute: React.FC<Public> = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
   return (
      <Route
         {...rest}
         component={(
            props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
         ) =>
            !isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
         }
      />
   );
};
