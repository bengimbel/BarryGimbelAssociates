import React, { useRef, useEffect, useState, Fragment } from "react";
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { detectMobileAndTablet, isSSR } from "../../utils/"
import ContentWrapper from "../../styles/contentWrapper"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useOnScreen } from "../../hooks/"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.backgroundContact};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 0 2rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
    }
    .section-title {
      margin-bottom: 2rem;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .text-content {
      width: 100%;
      max-width: 31.25rem;
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 1rem;
      }
    }
    .submitButton {
      background: #2E3440;
      color: #FFFFFF;
      border: none;
      &:hover, &:focus {
        color: #E5E9F0;
        box-shadow: 0 0 0 0.2rem #D8DEE9;
      }
    }
  }
`

const ContactHeading = styled.h3`
  padding-bottom: 1rem;
  font-weight: 500;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self:center;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1100px;
    padding: 2rem;
  }
`

const AlertContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 4.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 900px;
  }
`
const ButtonContainer = styled.div`
  padding: 1rem 1rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 0 0;
  }
`

const HeadingContainer = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
  }
`

const Contact = () => {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0)
  const tControls = useAnimation()
  const iControls = useAnimation()
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)


  useEffect(() => {
    if (tOnScreen) {
      tControls.start({ opacity: 1, y: 0 })
      iControls.start({ opacity: 1, x: 0 })
    }

}, [tOnScreen, tControls, iControls])

  useEffect(() => {
    let handleWindowSizeChange
    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth)
    }
    // Add event listener to update windowWidth in state
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [windowWidth])

  const submitForm = (ev) => {
    setLoading(true)
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
      setLoading(false)
    };
    xhr.send(data);
  }
  return (
  <StyledSection id="contact">
  <StyledContentWrapper>
    <motion.div
      className="inner-wrapper"
      ref={tRef}
      initial={{ opacity: 0, y: 20 }}
      animate={tControls}
    >
      <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
        <HeadingContainer>
      <h1 className="title">
        Contact Us
      </h1>
      <ContactHeading>
        Looking to appeal your property's assessment or get a tax refund? Leave your information below. We would love to help.
      </ContactHeading>
      </HeadingContainer>
      <AlertContainer>
      {status === "SUCCESS" && <Alert variant="success">Success! Your message was sent.</Alert>}
      {status === "ERROR" && <Alert variant="danger">Ooops! There was an error.</Alert>}
      </AlertContainer>
      <FormContainer>
        <Form
          onSubmit={submitForm}
          action="https://formspree.io/f/xrgojeda"
          method="POST"
          style={{width: "100%"}}
        >
          {detectMobileAndTablet(windowWidth) ? (
            <Fragment>
              <Form.Group as={Col} controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control as="input" name="name" type="text" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control as="input" name="email" type="email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="input" name="address" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control as="input" name="phone" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="input" name="city" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="input" name="state" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control as="input" name="zip" type="text" />
                </Form.Group>
            </Fragment>
          ) : (
            <Fragment>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control as="input" name="name" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control as="input" name="email" type="email" />
                </Form.Group>
                <Form.Group xs={2.25} as={Col} controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control as="input" name="phone" type="text" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="input" name="address1" type="text" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control as="input" name="address2" type="text" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control as="input" name="city" type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="input" name="state" type="text" />
                </Form.Group>
                <Form.Group xs={2.25} as={Col} controlId="formBasicZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control as="input" name="zip" type="text" />
              </Form.Group>
              </Form.Row>
            </Fragment>
          )}
          <ButtonContainer>
            <Button as="button" variant="dark" size="lg" type="submit" className="submitButton" style={{minWidth: detectMobileAndTablet(windowWidth)  ? "100%" : "150px" }}> 
              {loading ? (
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Spinner animation="border" size="sm"  />
                <div style={{paddingLeft: ".25rem"}}>
                Sending... 
                </div>
              </div>
                ) : "Submit"}
            </Button>
            </ButtonContainer>
        </Form>
        </FormContainer>
      </div>
    </motion.div>
  </StyledContentWrapper>
</StyledSection>
  )
}

export default Contact
