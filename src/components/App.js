import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Layout from './Layout';
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import Content from './Content';

const App = () => (
  <Layout>
    <HeaderNav/>
    <div className="row py-5">
      <div className="col-3">
        <Sidebar/>
      </div>
      <div className="col-9">
        <Content/>
      </div>
    </div>
  </Layout>
);

export default App;
