import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ContentWrapper from "../styles/contentWrapper"
import Logo from "./logo"
import ImageComponent from './images';

const StyledFooter = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundHero};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
const MainContainer  = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`
const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`
const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
  }
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`
const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  font-style: italic;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
    justify-content: center;
  }
`
const H5 = styled.h5`
  font-style: italic;
  margin-bottom: 0;
`
const Div = styled.div``

const LogoContainer = styled.div`
  padding-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-bottom: 0rem;
  }
`

const ImageWrapper = styled.div`
  width: 150px;
  display: flex;
  padding: 1rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`

const OtherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
    flex-direction: row;
  }
`


const Footer = () => {
  return (
    <StyledFooter>
      <StyledContentWrapper>
        <MainContainer>
          <LogoContainer>
        <Link to="/" aria-label="home">
          <Logo color="primary" size="1.5rem" />
        </Link>
        </LogoContainer>
        <FooterWrapper>
        <InfoWrapper>
        <LocationWrapper>
          <Div>
          790 Frontage Road, Suite 330
          </Div>
          <Div>
          Northfield, Illinois
          </Div>
          <Div>
          60093
          </Div>
        </LocationWrapper>
        <PhoneWrapper>
          <Div>
          Phone: 773-631-5500
          </Div>
          <Div>
          Fax: 847-441-4181
          </Div>
          <Div>
          Email: bga@bgimbel.com
          </Div>
        </PhoneWrapper>
        </InfoWrapper>
        <OtherInfoWrapper>
        <SloganWrapper>
          <H5>
            Fighting for Fairness
          </H5>
          <H5>
            Fighting for You
          </H5>
        </SloganWrapper>
        <ImageWrapper>
          <ImageComponent name="bbb" />
        </ImageWrapper>
        </OtherInfoWrapper>
        </FooterWrapper>
        </MainContainer>
      </StyledContentWrapper>
    </StyledFooter>
  )
}

export default Footer
