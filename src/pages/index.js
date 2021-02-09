import React from "react"
import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import config from "../../config"
import Contact from "../components/sections/contact"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({ data }) => {


  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    // isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO title={config.siteTitle} />
        <Hero data={data} />
        <About />
        <Contact /> 
      </Layout>
    </GlobalStateProvider>
  )
}

export default IndexPage

