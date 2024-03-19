import './styles/common/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/route/Header';
import RouterComponent from './component/route/RouterComponent';
import Footer from './component/main/Footer.js';
import AdminMain from './admin/main/Admin_main.js';
import Test from '../src/component/main/Test';

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route path="/admin" component={AdminMain} />
          <Route path="/" component={RouterComponent} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
