import styled from "styled-components"

const Underlining = styled.span`
  box-shadow: inset 0 ${({ big }) => (big ? "-2rem" : "-1rem")} 0 #FFF4D9;
  transition: box-shadow 0.3s ease-out;
`

export default Underlining
