import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
