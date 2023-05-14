import React from 'react';
import styled from 'styled-components';

export function ProcessingCacao() {
  return (
    <ProcessingStyled>
      <div className="cacao">
        <h1>ProcessingCacao</h1>
      </div>
    </ProcessingStyled>
  );
}

export default ProcessingCacao;

const ProcessingStyled = styled.div`
  .cacao {
    background-color: blue;
    height: 100vh;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
  }

  p {
    color: black;
  }
`;
