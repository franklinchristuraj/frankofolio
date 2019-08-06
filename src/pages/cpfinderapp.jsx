import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, Title1, BigTitle, Subtitle, Button } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Contact from '../views/Contact'
import Textbox from'../views/Textbox'

// image
import cpfimpage from '../images/iPhone-unit-type-FR-white-e1497719855128.png'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex -mx-6 flex-col lg:flex-row items-center mt-8`};
`

const SideImage = styled.img`
  ${tw`w-1/2 px-6 float-right shadow-lg h-auto w-52`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`w-1/2 px-6 text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`



const Index = () => (
  <>
    <Layout />
    <Parallax pages={2}>

      <Textbox offset={0}>
       
        <AboutHero>
        
          <AboutDesc>
          <Title1>Condensate Pump Finder App</Title1> <br></br>
          This App is aimed towards HVACR installers, contractors and technicians, and includes condensate solutions for all AC types, boilers and refrigerated displays.
          <br></br>
          <br></br>
          <Button as="a" href="/">Appstore</Button>
          </AboutDesc>
          
          <SideImage src={cpfimpage}></SideImage>
          
        </AboutHero>

        * TODO: Fix the responsive text for the above ASAP
        
      </Textbox>
      <Contact offset={1}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:christuraj.anto@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/franklinchristuraj/">LinkedIn</a>,{' '}<a href="https://github.com/franklinchristuraj">Github</a>  &{' '}
            <a href="https://twitter.com/frankChristuraj">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Franklin Christuraj.{' '}
          <a href="https://github.com/franklinchristuraj/frankofolio">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
