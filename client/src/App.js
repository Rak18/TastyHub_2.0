import React from 'react';
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import { Navbar } from "./components/Navbar";
import { Backdrop } from "./components/Backdrop";
import { SideDrawer } from "./components/SideDrawer";
import  HeroPage  from './components/HeroPage';
import  Footer  from './components/Footer';



//screens
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <HeroPage />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart" component={CartScreen} exact />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
