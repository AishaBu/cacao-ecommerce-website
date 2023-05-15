import React from 'react';
import styled from 'styled-components';

export function ProcessingCacao() {
  return (
    <ProcessingStyled>
      <div className="processing">
        <h1>Processing Cacao</h1>
      </div>
    </ProcessingStyled>
  );
}

export default ProcessingCacao;

const ProcessingStyled = styled.div`
  .processing {
    background-color: blue;
    height: 100vh;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: black;
  }
`;
