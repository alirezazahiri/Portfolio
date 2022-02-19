import React from 'react';
import styled from 'styled-components';

const MyResume = () => {
  return <Iframe src="alireza-zahiri.pdf" />
}

const Iframe = styled.iframe`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`

export default MyResume