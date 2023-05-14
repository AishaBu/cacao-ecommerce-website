import React from 'react';
import styled from 'styled-components';

export function OriginsOfCacao() {
  return (
    <CacaaoOriginsStyled>
      <div className="homepage-content">
        <p className="cacao">Origins of Cacao</p>
      </div>
    </CacaaoOriginsStyled>
  );
}

export default OriginsOfCacao;

const CacaaoOriginsStyled = styled.div`
  .cacao {
    background-color: red;
    height: 100vh;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
  }

  p {
    color: black;
  }
`;
