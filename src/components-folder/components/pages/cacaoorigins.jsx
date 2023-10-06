import React from 'react';
import styled from 'styled-components';

export function OriginsOfCacao() {
  return (
    <CacaoOriginsStyled>
      <div className="homepage-content">
        <h1 className="cacao">Origins of Cacao</h1>
      </div>
    </CacaoOriginsStyled>
  );
}

export default OriginsOfCacao;

const CacaoOriginsStyled = styled.div`
  .cacao {
    background-color: red;
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
