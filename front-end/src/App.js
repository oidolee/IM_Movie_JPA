import './styles/common/App.css';
import React from 'react';
import Header from './component/route/Header';
import RouterComponent from './component/route/RouterComponent'
import Footer from './component/main/Footer.js';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Test from '../src/component/main/Test';


function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Header />
      <RouterComponent />
      <Footer />
    </div>
  );
}

export default App;


