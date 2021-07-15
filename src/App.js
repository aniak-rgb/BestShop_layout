import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Prices } from './components/Prices';
import { WhyUs } from './components/WhyUs';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { Main } from './components/Main';


export const App = () => {


  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/whyUs' component={WhyUs} />
        <Route path='/benefits' component={Benefits} />
        <Route path='/prices' component={Prices} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
    // <div className="container">
    //   <Navigation />
    //   <Header />
    //   <WhyAs />
    //   <Benefits />
    //   <Prices />
    //   <Contact />
    //   <Footer />
    // </div>

  )
}


