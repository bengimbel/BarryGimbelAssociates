import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { siteShortTitle } from "../../config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: ${({ size }) => (size ? size : "1.5rem")};
  color: ${({ theme, color }) => theme.colors[color] || color };

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    Barry Gimbel & Associates
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
