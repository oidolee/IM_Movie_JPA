import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie'; //로그인쿠키

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> // 렌더링 두번 방지
    <CookiesProvider>
      <App />
    </CookiesProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
