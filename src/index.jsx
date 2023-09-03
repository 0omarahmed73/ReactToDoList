import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'
import DataProvider from './Contexts/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>
)