// Toggle.js
import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import ToggleContainer from './toggle.styles'

import { ReactComponent as MoonIcon } from '../../assets/images/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/images/sun.svg'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;