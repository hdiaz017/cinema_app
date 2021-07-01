import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';

import { AppRouter } from './router/AppRouter';

function App() {
   return (
      <div>
         <GlobalStyle />
         <AppRouter />
      </div>
   );
}

export default App;
