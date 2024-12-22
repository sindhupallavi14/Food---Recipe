import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Has, HashRouterhRouter } from 'react-router-dom';
import { FoodRecipeGlobalState } from './Components/Context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <FoodRecipeGlobalState>
      <App />
    </FoodRecipeGlobalState>  
  </HashRouter>
 
);


