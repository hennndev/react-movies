import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer className="text_center">Copyright &copy; 2022 Hendra Hennndev</FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 50px;
  text-align: center;
  font-size: 15px;
  color: ${({theme}) => theme.text};
  letter-spacing: 0.5px;
`

export default Footer