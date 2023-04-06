import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import Counter from "./components/counter/counter";
import ListMove from './components/listmove/ListMove';
import ClickableDiv from './components/clicablediv/ClickableDiv';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <ListMove />
    <ClickableDiv />
  </React.StrictMode>
);
