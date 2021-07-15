import React from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Benefits } from './Benefits';
import { Contact } from './Contact';
import { Prices } from './Prices';
import { WhyUs } from './WhyUs';
import { Footer } from './Footer';


export const Main = () => {


  return (<>
    <Navigation />
    <Header />
    <WhyUs />
    <Benefits />
    <Prices />
    <Contact />
    <Footer />
  </>
  )

}