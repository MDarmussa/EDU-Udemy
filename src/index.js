import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseContextProvider } from './components/useContext';
//4-wrap all app with provider.
//we wrap the App is because it's the parent and the data can be reached anywhere, either to children or siblings

ReactDom.render(
     <UseContextProvider>
          <App/>
     </UseContextProvider>
     , document.getElementById('root'))