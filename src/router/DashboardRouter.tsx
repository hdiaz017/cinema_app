import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Location } from 'history';
import { FavoritesScreen } from '../components/FavoritesScreen';
import { HomeScreen } from '../components/HomeScreen';
import { MovieScreen } from '../components/MovieScreen';
import { NavBar } from '../components/NavBar';

export const DashboardRouter = () => {
   let location =
      useLocation<{ background?: Location<{} | null | undefined> }>();
   const background = location.state?.background;
   return (
      <div>
         <NavBar />
         <Switch location={background || location}>
            <Route exact path='/favorites' component={FavoritesScreen} />
            {/* <Route exact path='/movie/:movideid' children={MovieScreen} /> */}
            <Route exact path='/home' component={HomeScreen} />
            <Redirect to='/home' />
         </Switch>
         {background && (
            <Route path='/movie/:movieId' children={<MovieScreen />} />
         )}
      </div>
   );
};
