import React from 'react';
import styled from 'styled-components';

const MyResume = () => {
  return <Embed src="alireza-zahiri.pdf" />
}

const Embed = styled.embed`
    width: 100vw;
    height: 100vh;
`

export default MyResume