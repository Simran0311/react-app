import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Pagelinks from './components/PageLinks/PageLinks'
//import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import {BrowserRouter as Router} from 'react-router-dom';
// import About from './components/Pages/About/about';
// import SearchApp from './containers/SearchBox/SearchApp';
// import SearchBox from './containers/SearchBox/SearchBox'





class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Pagelinks />
          {/* <SearchApp /> */}
          {/* <SearchBox /> */}
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
