import styled, { keyframes, createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

import { ReactComponent as MoonIcon } from '../assets/images/moon.svg'
import { ReactComponent as SunIcon } from '../assets/images/sun.svg'

const backgroundColor = theme('mode', {
    light: '#FFFFFF',
    dark: '#131313'
})

const terminalContainerColor = theme('mode', {
    light: '#F7F7F7',
    dark: '#201F1F'
})

const nameColor = theme('mode', {
    light: '#2E2E2E',
    dark: '#DDDDDD'
})

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${backgroundColor};
    transition: background 1s linear;
  }
`

export const Toggle = styled.button`
    width: 66px;
    height: 30px;
    left: 1344px;
    top: 30px;
    border-radius: 20px;
    border: 2px solid #8B8B8B;
    background: transparent;

    margin-left: auto;
    margin-right: 30px;
    margin-top: 30px;

    outline: none;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const MoonSVG = styled(MoonIcon)`
    transform: translateX(15px);
    transition: transform 2s linear;
    &:active {
      transform: translateX(-15px);
    }
`

export const SunSVG = styled(SunIcon)`
    animation-name: ${rotate};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transition: transform 1s linear;
    outline-width: 0;
`

export const SunSVGContainer = styled.div`
    transform: translateX(-15px);
    &:active {
      transform: translateX(15px);
      transition: transform 1s ease;
      /* transform: scale(2); */
    }
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

`

export const ProfileDiv = styled.div`
    position: absolute;
    width: 100%;
    top: 50px;
    text-align: center;
`

export const Name = styled.h1`
    font-family: Share Tech Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;

    color: ${nameColor};
`;

export const AboutMe = styled.p`
    font-family: Share Tech Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    color: #7D7D7D;
`

export const TerminalContainer = styled.div`
    font-family: 'IBM Plex Mono', monospace;
    position: absolute;
    /* setThemeVal(prevVal => prevVal === 'light' ? 'dark' : 'light')  */
    background: ${terminalContainerColor};
    height: 60%;
    width: 80%;
    top: 380px;
    border-radius: 8px;

    margin-bottom: 90px;
    padding-left: 40px;

    transition: all 0.5s linear;
`

export const LastLogin = styled.p`
    color: #7C7C7C;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    letter-spacing: 0.14em;
`

export const Menu = styled.div`
    width: 159px;
    height: 105px;
    left: 300px;
    top: 503px;
    border: 1px dashed #7C7C7C;
    border-width: 1.5px;
    
    font-family: 'IBM Plex Mono', monospace;
    font-style: normal;
    font-weight: medium;
    font-size: 16px;
    line-height: 6px;
    letter-spacing: 0.14em;
    color: #5192C1;

    padding-left: 10px;
`

export const CMDContainer = styled.div`
`

export const TerminalCMD = styled.p`
    font-family: 'IBM Plex Mono', monospace;
    font-style: normal;
    /* font-weight: bold; */
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.14em;
    color: #7C7C7C;

    float: left;
`
const blink = keyframes`
  0% {
    color:black;
  }
  50% {
    color: #7C7C7C;
  }
  100% {
    color:black;
  }
`
export const InputCMD = styled.input`
    /* width: 1%; */
    font-family: 'IBM Plex Mono', monospace;
    font-style: normal;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.14em;
    color: #1EAF7B;
    outline-width: 0;
    background: transparent;
    border-color: transparent;

    outline: none;
    &:focus {
      outline: none;
    }

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;

    
    -webkit-box-shadow: 0 0 0 1000px transparent inset; 
    &:active {
        -webkit-box-shadow: 0 0 0 30px pink transparent !important;

    }


    padding-left: 10px;
`