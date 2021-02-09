import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import ImageComponent from '../images';
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.backgroundHero};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      font-size: 1.25rem;
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

`
const ImageContainer = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  min-width: 200px;
  flex-wrap: wrap;
`


const AnimatedUnderlining = motion.custom(Underlining)


const Hero = ({ content, data }) => {
  console.log(data, 'data');

  const { darkMode } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
     
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${
            darkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary
          }`,
          transition: { delay: 0.4, ease: "circOut" },
        })

    }
    pageLoadSequence()
  }, [ darkMode, eControls, gControls, sControls, uControls])

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
        <Container>
          <TextContainer>
          <h1 className="title">
            Property Tax Refund Specialist
          </h1>
          <p className="subtitle">        
            Barry Gimbel & Associates will recover property tax refunds for homeowners. In addition to obtaining refunds, we also appeal your property's assessment.
          </p>
          </TextContainer>
          <ImageContainer>
            <ImageComponent name="home" /> 
          </ImageContainer>
          </Container>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}


export default Hero;
