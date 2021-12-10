import React from 'react';
import styled from 'styled-components';

export const Show = ({showEvent, setShowEvent}) => {
  return (
    <>
    {showEvent ? <div style={{color: 'black'}}>Aquí se vería el evento</div> : null}
    </>
  )
}
