module.exports = {

  //-- SITE SETTINGS -----
  author: "Ben Gimbel",
  siteTitle: "Barry Gimbel and Associates",
  siteShortTitle: "BGA", // Used as logo text in header, footer, and splash screen
  siteDescription: "Barry Gimbel and Associates",
  siteUrl: "https://barrygimbel.com",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "BGA", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#2E3440",
      secondary: "#2E3440",
      tertiary: "#2E3440",
      text: "#2E3440",
      subtext: "#2E3440",
      backgroundHero: "#88C0D0",
      backgroundAbout: "#FFFFFF",
      backgroundContact: "#E5E9F0",
      card: "#2E3440",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#2E3440",
      secondary: "#2E3440",
      tertiary: "#2E3440",
      text: "#2E3440",
      subtext: "#2E3440",
      backgroundHero: "#88C0D0",
      backgroundAbout: "#FFFFFF",
      backgroundContact: "#E5E9F0",
      card: "#2E3440",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";`
  },

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Home",
        url: "/#home",
      },
      {
        name: "What We Do",
        url: "/#about",
      },
      {
        name: "Contact Us",
        url: "/#contact",
      },
    ],
  }
}
