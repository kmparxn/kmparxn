import React from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/spaceman.png";

import LogoComponent from '../subComponents/LogoComponent'  
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitle';
import ParticlesComponent2 from '../subComponents/ParticlesComponent2';

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
  z-index: 1;
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
        <Box
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <LogoComponent theme='dark' />
          <PowerButton />
          <SocialIcons theme='dark' />
          <ParticlesComponent2 />
          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}>
              <img src={astronaut}  alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            I'm a Software Developer located in Colombia, I have a Technology Degree in Software Development
            and I've studied 6 semesters in Telecommunications Engineering.
            I love to create, design, develop
            beautiful projects, websites, apps with great user experience.
            <br />
            <br />
            Since beginning my journey as software developer,
             I’ve done remote work for agencies, consulted for startups, and collaborated 
             with talented people to create projects and products for both business and consumer use.
             I love to play Video games, Basketball, Work out, Learn lenguages. <br />
            {' '}
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Box>
    </ThemeProvider>
  )
}

export default AboutPage
