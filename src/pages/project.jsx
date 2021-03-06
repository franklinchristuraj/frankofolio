import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle, Button } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Contact from '../views/Contact'
import Textbox from'../views/Textbox'


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

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const SideImage = styled.img`
  ${tw`w-1/2 px-6 float-right shadow-lg h-auto`};
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
    <Parallax pages={3}>
      <Hero offset={0}>
        <BigTitle>
        RadioPublic - Case Study
        </BigTitle>
        <Subtitle>Showcasing my process on how I approach a new product or feature.</Subtitle>
        <Button as="a" href="/">Read the case study</Button>
      </Hero>
      <Textbox offset={1}>
        <Title>Case</Title>
        <AboutHero>
          <AboutDesc>
          I believe my passion for the data, digital and product management strengths and cross-functional collaboration capabilities would serve you well. I would love an opportunity to learn more about your specific goals and needs, and share some thoughts on how I could support your efforts to continue producing game-changing digital products.
          </AboutDesc>
          <SideImage src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"></SideImage>
        </AboutHero>
      </Textbox>
      <Contact offset={2}>
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
