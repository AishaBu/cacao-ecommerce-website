import React from 'react';
import styled from 'styled-components';
import Homepage from './Pages/Homepage';

function Content() {
  return (
    <ContentStyled>
      <div className="content">
        <Homepage />
      </div>
    </ContentStyled>
  );
}

export default Content;

//Styled Footer Components
const ContentStyled = styled.div`
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
