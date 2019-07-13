import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

// assets

import pdf from '../assets/case-study-RP.pdf'

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
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
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
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Franklin.
        </BigTitle>
        <Subtitle>I help companies design and build AI products that solves real problems.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Case Study - RadioPublic"
            link={pdf}
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Showcasing my process on how I approach a new product or feature.
          </ProjectCard>
          <ProjectCard
            title="Pump Finder App"
            link="cpfinderapp"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            App development from ideation, testing to Appstore.
          </ProjectCard>
          <ProjectCard
            title="Headless Java-CMS Guide"
           // link=""
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Creating an hands-on guide to get started with Java-based CMS
          </ProjectCard>
          <ProjectCard
            title="Multifuntional DataLogger"
           // link=""
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Using instrument generated data to identify and plan out a new product.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Franklin Christuraj" />
          <AboutSub>
          An AI Driven Product Manager focused on helping companies grow by leveraging data and creativity to enhance the customer-centred product experience.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        I believe my passion for the data, digital and product management strengths and cross-functional collaboration capabilities would serve you well. I would love an opportunity to learn more about your specific goals and needs, and share some thoughts on how I could support your efforts to continue producing game-changing digital products.
        </AboutDesc>
      </About>
      <Contact offset={4}>
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
