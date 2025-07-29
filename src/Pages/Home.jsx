

import React from 'react'
import LandingpageComponent from '../Components/LandingpageComponent'
import WelcomepageComponent from '../Components/WelcomepageComponent'
import EdutimelineComponent from '../Components/EdutimelineComponent'
import SkillsComponent from '../Components/SkillsComponent'
import ExperienciaComponent from '../Components/ExperienciaComponent'
import ContactoComponent from '../Components/ContactoComponent'
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'

function Home() {
  return (
    <div>
   
      <HeaderComponent />
    {/*<AvatarComponent />  */}
      <LandingpageComponent />
      <WelcomepageComponent />
      <EdutimelineComponent />
      <SkillsComponent />
      <ExperienciaComponent />
      <ContactoComponent />
      <FooterComponent />

           </div>
  )
}

export default Home

{/*
          También podemos tener
          comentarios multilínea
      */}