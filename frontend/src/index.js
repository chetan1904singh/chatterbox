import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "./components/ui/provider"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Provider>
      <App />
   </Provider>
  </BrowserRouter>
 
    
  
);

//This connects React to HTML
//First all comps int App-> then App in Index.js -> Index.js renders all html

/*
✔ Components → combined in App.js
✔ App.js → rendered by index.js
✔ index.js → injects into index.html
✔ index.html → shown in browser
*/