import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { LoginScreen } from '../auth/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
   const user = useAppSelector((state) => state.auth);
   return (
      <Router>
         <div>
            <Switch>
               <PublicRoute
                  exact
                  path='/login'
                  component={LoginScreen}
                  isAuthenticated={user.logged}
               />
               <PrivateRoute
                  isAuthenticated={user.logged}
                  path='/'
                  component={DashboardRouter}
               />
            </Switch>
         </div>
      </Router>
   );
};
