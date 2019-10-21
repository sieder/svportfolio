import React, { useState } from 'react'
import {
    Container,
    Name,
    AboutMe,
    ProfileDiv,
    TerminalContainer,
    LastLogin,
    Menu,
    TerminalCMD,
    CMDContainer,
    InputCMD,
    GlobalStyle,
    Toggle,
    MoonSVG, SunSVG, SunSVGContainer
} from './portfolio.styles'
import { ThemeProvider } from 'styled-components'

import './portfolio.styles.scss'

import { ReactComponent as ProfilePic } from '../assets/images/me.svg'

import { About } from '../components/about/about.component'
import { LinkedIn } from '../components/linkedin/linkedin.component'
import { Github } from '../components/github/github.component'
import { Contact } from '../components/contact/contact.component'

export const Portfolio = () => {

    const [themeVal, setThemeVal] = useState(() => {
        const today = new Date()
        const hours = parseInt(today.getHours(), 10)
        if (hours >= 7 && hours <= 17) {
            return 'light'
        } else {
            return 'dark'
        }
    })
    const [inputVal, setInputVal] = useState('type a command from the list above')
    const [inputSize, setInputSize] = useState(400)
    const [selectMenu, setSelectMenu] = useState('')

    const today = new Date()
    const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

    const handleChange = e => {
        const { value } = e.target
        // setInputSize(parseInt(10 + value.length + 400, 10))
        setInputVal(value)
        // console.log(value.length)
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            console.log(selectMenu)
            if (inputVal === "about") {
                setSelectMenu('about')
                console.log('matched', selectMenu)
            } else if (inputVal === "linkedin") {
                setSelectMenu('linkedin')
            } else if (inputVal === 'contact me') {
                setSelectMenu('contact me')
            } else if (inputVal === "github") {
                setSelectMenu('github')
            } else {
                return setSelectMenu('command not found')
            }
        }
        console.log(selectMenu)
    }

    const handleToggle = e => {
        // themeVal === 'dark' ? setThemeVal('light') : setThemeVal('dark')
        setThemeVal(prevVal => prevVal === 'light' ? 'dark' : 'light')
        console.log(themeVal)
    }

    return (
        <ThemeProvider theme={{ mode: `${themeVal}` }}>
            <Container>
                <Toggle
                    onClick={handleToggle}
                >
                    {
                        themeVal === 'dark' ? <MoonSVG /> : <SunSVGContainer><SunSVG /></SunSVGContainer>
                    }
                </Toggle>
                <GlobalStyle />
                <ProfileDiv>
                    <ProfilePic />
                    <Name>Sieder Villareal</Name>
                    <AboutMe>React Developer based in Doha, Qatar</AboutMe>
                </ProfileDiv>
                <TerminalContainer>
                    <LastLogin>Last Login: {dateToday} on console</LastLogin>
                    <Menu>
                        <p>about</p>
                        <p>github</p>
                        <p>linkedin</p>
                        <p>contact me</p>
                    </Menu>

                    <CMDContainer>
                        <TerminalCMD>Sieder-Villareal-Portfolio$
                        <InputCMD
                                style={{ width: inputSize }}
                                onChange={handleChange}
                                name="inputcmd"
                                onLoad={console.log('loeaded')}
                                autoFocus
                                onKeyDown={handleKeyPress}
                                value={inputVal}
                                autoComplete="new-password"
                                type="text"
                            />
                            <p>
                                {
                                    selectMenu !== "command not found" ? '' : <p>{selectMenu}</p>
                                }
                            </p>
                            {
                                selectMenu === 'about'
                                    ? <About />
                                    : selectMenu === 'linkedin'
                                        ? <LinkedIn />
                                        : selectMenu === 'github'
                                            ? <Github />
                                            : selectMenu === 'contact me'
                                                ? <Contact /> : ''

                            }
                        </TerminalCMD>
                    </CMDContainer>
                </TerminalContainer>
      </Container>
    </ThemeProvider>
  );
}

