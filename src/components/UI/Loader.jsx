import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderContainer className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </LoaderContainer>
  )
}


const LoaderContainer = styled.div`
  div::after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${({theme}) => theme.text};
  }
`

export default Loader