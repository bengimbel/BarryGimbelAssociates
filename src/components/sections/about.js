import React, { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useOnScreen } from "../../hooks/"
import ContentWrapper from "../../styles/contentWrapper"
import ImageComponent from '../images';
import Underlining from "../../styles/underlining"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.backgroundAbout};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 1rem;
      }
    }
    .subtitle {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
      padding-bottom: 1rem;
    }
    .description {
      font-size: 1rem;
      margin: 0;
    }
    .info {
      font-size: 1.25rem;
    }
  }
`
const ContactHeading = styled.h3`
  padding-bottom: 1rem;
  font-weight: 500;
`
const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  min-width: 300px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 0;
`
const RowTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  padding: 4rem 0;
`
const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  
`
const TitleContainer = styled.div`
width: 100%;
@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  width: 70%;
}
`
const AnimatedUnderlining = motion.custom(Underlining)

const About = () => {
  const tControls = useAnimation()
  const iControls = useAnimation()
  const uControls = useAnimation()
  // Required for animating the text content
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)

  // Required for animating the image
  const iRef = useRef()
  const iOnScreen = useOnScreen(iRef)

  // Only trigger animations if the intro is done or disabled
  useEffect(() => {
      if (tOnScreen) tControls.start({ opacity: 1, y: 0 })
      if (iOnScreen) {
        iControls.start({ opacity: 1, x: 0 })
        uControls.start({
          boxShadow: `inset 0 -2rem 0 #FFF4D9`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
      // await uControls.start({
      //   boxShadow: `inset 0 -2rem 0 ${
      //     darkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary
      //   }`,
      //   transition: { delay: 0.4, ease: "circOut" },
      // })
    
  }, [tControls, iControls, tOnScreen, iOnScreen])

  return (
    <StyledSection id="about">
      <StyledContentWrapper>
        <motion.div
          className="inner-wrapper"
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
        <TitleContainer>
        <h1 className="title">
        What We Do
        </h1>
        <ContactHeading>        
        If we are not successful, <AnimatedUnderlining animate={uControls} big>there is no fee or cost to you.</AnimatedUnderlining> If we are successful, then a fee of 33% of
        the refunds received. For a successful assessment appeal, a fee of 33% of the past year's savings.
        </ContactHeading>
        </TitleContainer>
          <MainContainer>
            <RowOne>
              <FlexContainer>
                <TextContent>
                  <p className="subtitle">
                  Refunds
                  </p>
                  <p className="description">        
                  Get refunds for up to 4 years of past property taxes. Homeowner's tax bills
                  are often calculated wrong. <AnimatedUnderlining animate={uControls}>I have obtained over 30,000 refunds for homeowners.</AnimatedUnderlining>
                  </p>
                </TextContent>
              </FlexContainer>
              <FlexContainer>
                <ImageComponent name="refund" />
              </FlexContainer>
            </RowOne>
            <RowTwo>
            <FlexContainer>
              <ImageComponent name="hero" />
            </FlexContainer>
            <FlexContainer>
              <TextContent>
                <p className="subtitle">
                  Assessments
                </p>
                <p className="description">        
                We appeal your property's assessment at the Assessor and at the Board of Review.
                If the assessment (valuation) is successfully lowered, <AnimatedUnderlining animate={uControls}>this will result in a reduced
                tax bill for up to 3 years.</AnimatedUnderlining>
                </p>
              </TextContent>
            </FlexContainer>
            </RowTwo>
         </MainContainer>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}


export default About
