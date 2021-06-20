import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FavoritesScreen } from '../components/FavoritesScreen';
import { HomeScreen } from '../components/HomeScreen';
import { MovieScreen } from '../components/MovieScreen';

export const DashboardRouter = () => {
   return (
      <div>
         <Switch>
            <Route exact path='/favorites' component={FavoritesScreen} />
            <Route exact path='/movie/:movideid' component={MovieScreen} />
            <Route exact path='/home' component={HomeScreen} />
            <Redirect to='/home' />
         </Switch>
      </div>
   );
};
