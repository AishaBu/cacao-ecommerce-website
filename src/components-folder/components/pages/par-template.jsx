import styled from 'styled-components';

//Styled Footer Components
const ParTemplate = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin-top: 40px;
  }

  #section-one,
  #section-one-origin {
    margin-top: 80px;
  }

  //Image
  img {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-image {
    width: 380px;
    height: 480px;
    border: 1px solid ${({ theme }) => theme.colors.crayolaGold};
    box-shadow: ${({ theme }) => theme.shadow.defaultBoxShadow};
  }

  //Citation
  .citation {
    font-family: ${({ theme }) => theme.fonts.playfairDisplay};
    font-size: 8px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 10px;
    font-style: italic;
  }

  #shorter-citation,
  #shorter-citation-origin {
    gap: 120px;
  }

  #longer-citation {
    gap: 50px;
  }

  .section-paragraph {
    color: ${({ theme }) => theme.colors.zinnwalditeBrown};
    margin: 20px auto;
  }

  .section-paragraph h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .section-paragraph p {
    font-size: 16px;
    line-height: 20px;
    width: 350px;
  }

  /* The dots/bullets/indicators */
  .dots {
    display: none;
  }

  //MEDIA QUERIES
  //990px and below
  @media (max-width: 999px) {
    .longer-citation-par {
      width: 160px;
    }
  }

  //600px and below
  @media (max-width: 600px) {
    .longer-citation-par {
      width: 120px;
    }
  }

  //412px and below
  @media (max-width: 412px) {
    //Cacao Tree Section
    .section-image {
      width: 340px;
      height: 440px px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    #shorter-citation,
    #shorter-citation-origin {
      gap: 100px;
    }
  }

  //350px and below
  @media (max-width: 350px) {
    //Cacao Tree Section
    .section-image {
      width: 320px;
      height: 420px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .section-paragraph p {
      font-size: 15px;
      width: 310px;
    }

    .longer-citation {
      gap: 60px;
    }

    #shorter-citation,
    #shorter-citation-origin {
      gap: 80px;
    }
  }

  //330px and below
  @media (max-width: 330px) {
    //Cacao Tree Section
    .section-image {
      width: 300px;
      height: 400px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .section-paragraph p {
      font-size: 15px;
      width: 290px;
    }
  }

  //310px and below
  @media (max-width: 310px) {
    //Cacao Tree Section
    .section-image {
      width: 280px;
      height: 380px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .section-paragraph p {
      font-size: 15px;
      width: 250px;
    }
  }

  //290px and below
  @media (max-width: 290px) {
    //Cacao Tree Section
    .section-image {
      width: 250px;
      height: 350px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .section-paragraph p {
      font-size: 15px;
      width: 250px;
    }

    #shorter-citation,
    #shorter-citation-origin {
      gap: 10px;
    }

    #longer-citation {
      gap: 8px;
    }
  }

  //260px and below
  @media (max-width: 260px) {
    //Cacao Tree Section
    .section-image {
      width: 230px;
      height: 330px;
    }

    .section-paragraph {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .section-paragraph p {
      font-size: 15px;
      width: 220px;
    }
  }

  //308px and below
  @media (max-width: 308px) {
    #shorter-citation,
    #shorter-citation-origin {
      gap: 40px;
    }

    #longer-citation {
      gap: 10px;
    }
  }

  //1000px and above
  @media (min-width: 1000px) {
    #section-one,
    #section-one-origin {
      margin-top: 40px;
    }

    .homepage-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      vertical-align: center;
      gap: 0px;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row;
      gap: 80px;
      padding: 50px;
      border-radius: 20px;
      background-color: rgba(185, 169, 104, 0.25);
      margin-bottom: 30px;
    }

    .citation {
      display: flex;
      flex-direction: row;
    }

    #longer-citation {
      gap: 10px;
    }

    .longer-citation-par {
      width: 200px;
    }

    .section-paragraph h1 {
      font-size: 20px;
    }

    .section-paragraph p {
      font-size: 18px;
      line-height: 50px;
      width: 430px;
    }

    .section-image {
      width: 360px;
      height: 460px;
    }

    //Show prev, next, and dots
    .dots {
      display: block;
    }

    /* The dots/bullets/indicators */
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 7px 5px 8px;
      background-color: #bbb;
      border-radius: 50%;
      display: flex;
      transition: background-color 0.6s ease;
    }

    .dots {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 90px;
      right: 20px;
    }

    //Set Dot Hover
    .dot:hover {
      background-color: ${({ theme }) => theme.colors.crayolaGold};
    }

    //Hide Dot Pars
    .dot-par {
      display: none;
    }

    //Dot Buttons Background Border
    button {
      border-radius: 5%;
    }
  }
  //1170px and above
  @media (min-width: 1170px) {
    .dots {
      right: 50px;
    }
  }

  //1260px and above
  @media (min-width: 1260px) {
    .dots {
      right: 80px;
    }
  }

  //1300px and above
  @media (min-width: 1300px) {
    .dots {
      right: 20px;
    }

    .dot-par {
      display: inline;
      font-size: 10px;
    }

    //Remove underline in anchor text
    .dots a {
      text-decoration: none;
      color: black;
      font-family: ${({ theme }) => theme.fonts.publicSans};
    }

    //Aligns dots and pars vertically
    .dot,
    .dot-par {
      vertical-align: middle;
      padding: 8px;
    }

    //Adjust margin space between dots
    .dot {
      margin: 5px 2px 10px;
      display: inline-flex;
    }
  }

  //1450px and above
  @media (min-width: 1450px) {
    .dots {
      right: 80px;
    }
  }

  //1600px and above
  @media (min-width: 1600px) {
    .dots {
      right: 120px;
    }
  }

  //1700px and above
  @media (min-width: 1700px) {
    .dots {
      right: 180px;
    }
  }

  //1800px and above
  @media (min-width: 1800px) {
    .dots {
      right: 230px;
    }
  }

  //1900px and above
  @media (min-width: 1900px) {
    .dots {
      right: 260px;
    }
  }
`;

export default ParTemplate;
