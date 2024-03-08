import React, {Component} from 'react';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';
import RouteComponent from '../route/RouteComponent';

  class Layout extends Component{
    render(){
        return(
            <div>
                <Header />
                <RouteComponent />
                <Footer />
            </div>
        )
    }
  }
  
  export default Layout;