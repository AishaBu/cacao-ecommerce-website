import React from 'react';
import styled from 'styled-components';

function Homepage() {
  return (
    <HomepageStyled>
      <div className="homepage">
        <p>Goodybye</p>
      </div>
    </HomepageStyled>
  );
}

export default Homepage;

//Styled Footer Components
const HomepageStyled = styled.div`
  .homepage {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    height: auto;
    margin-top: 10px;
  }
`;
