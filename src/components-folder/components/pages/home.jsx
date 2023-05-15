import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeStyled>
      <div className="homepage-content" id="allSlides">
        {/*Section One*/}
        <section id="section-one" className="slides">
          <div className="container">
            <div className="image-container">
              <img
                src="/src/assets/images/cacoa-tree-1.jpg"
                alt="cacao tree illustration"
                className="section-image"
              />
              {/*Citation*/}
              <div className="citation" id="shorter-citation">
                <cite>Theobroma cacao (Theobroma grandiflorum)</cite>
                <p>Image sourced via Flickr</p>
              </div>
            </div>

            {/*Paragraph*/}
            <section className="section-paragraph">
              <h1>
                <i>Theobroma cacao </i>(Cacao Tree)
              </h1>
              <p>
                The <i>Theobroma cacao</i> tree (cacao tree or cocoa tree) is a
                small (20-39 ft tall (6-12m)) evergreen tree in the family
                <i> Malvaceae</i> (mallows) that weighs about one pound(500 g)
                when ripe. The cacao tree has light pink and white five-pointed
                small flowers that grow in clusters right on top of its trunk.
                When these flowers are pollinated, fruits that are ovoid and
                pod-like in shape grow directly from the trunk of the tree.
                These fruits are called cacao pods.
              </p>
            </section>
          </div>
        </section>

        {/*Section Two*/}
        <section id="section-two" className="slides">
          <div className="container">
            <div className="image-container">
              <img
                src="/src/assets/images/cacao-pods-png.png"
                alt="cacao pods illustration"
                className="section-image"
              />
              {/*Citation*/}
              <div className="citation" id="shorter-citation">
                <cite>Theobroma cacao (Theobroma grandiflorum)</cite>
                <p>Image sourced via Flickr</p>
              </div>
            </div>

            {/*Paragraph*/}
            <section className="section-paragraph">
              <h1>What is inside of a Cacao pod?</h1>
              <p>
                Cacao pods contain seeds, which are called cacao beans. The
                cacao pods contain about 20 to 60 cacao beans each which are
                encased in a white pulp inside of the pod. The average cacao
                tree produces 30 to 40 pods a year.
              </p>
            </section>
          </div>
        </section>

        {/*Section Three*/}
        <section id="section-three" className="slides">
          <div className="container">
            <div className="image-container">
              <img
                src="/src/assets/images/final-cacao-varieties-image-png.png"
                alt="top cacao bean varieites illustration"
                className="section-image"
              />
              {/*Citation*/}
              <div className="citation" id="longer-citation">
                <cite>Theobroma cacao (Theobroma grandiflorum)</cite>
                <p className="longer-citation-par">
                  Created with Affinity Photo, Images Sourced via Bar and Cacao
                </p>
              </div>
            </div>

            {/*Paragraph*/}
            <section className="section-paragraph">
              <h1>Cacao Bean Varieties</h1>
              <p>
                There are four main varieties of the cacao plants along with
                hybrid varieties of cacao plants. The four varieties are the
                Forastero, Criollo, Trinitario, and the Nacional. Cacao pods
                range in color from ripening yellow to orange, green or red
                depending on the variety of the cacao tree.
              </p>
            </section>
          </div>
        </section>

        {/*Section Four*/}
        <section id="section-four" className="slides">
          <div className="container">
            <div className="image-container">
              <img
                src="/src/assets/images/final-top-varieties-png.png"
                alt="top cacao bean varieties illustration"
                className="section-image"
              />
              {/*Citation*/}
              <div className="citation" id="longer-citation">
                <cite>Theobroma cacao (Theobroma grandiflorum)</cite>
                <p className="longer-citation-par">
                  Created with Affinity Photo, Images Sourced via Bar and Cacao
                </p>
              </div>
            </div>

            {/*Paragraph*/}
            <section className="section-paragraph">
              <h1>Top Cacao Bean Varieties</h1>
              <p>
                About 10% of the world&apos;s chocolate is made with the Criollo
                variety because it is the most prized, rare, and expensive
                variety because it is the cacao bean used by the Maya, and it is
                less bitter and more aromatic than other bean varieties. More
                than 80% of the world&apos;s chocolate is made from the
                Forastero variety of chocolate because it is more hardy and more
                disease-resistant than the other varieties.
              </p>
            </section>
          </div>
        </section>

        {/*Next and previous buttons */}
        <button type="button" className="prev">
          &#10094;
        </button>
        <button type="button" className="next">
          &#10095;
        </button>

        {/*DOTS*/}
        <div className="dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </HomeStyled>
  );
}

export default Home;

//Styled Footer Components
const HomeStyled = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin-top: 40px;
  }

  #section-one {
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

  #shorter-citation {
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
  .dots,
  .prev,
  .next {
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

    #shorter-citation {
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

    #shorter-citation {
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

    #shorter-citation {
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
    #shorter-citation {
      gap: 40px;
    }

    #longer-citation {
      gap: 10px;
    }
  }

  //1000px and above
  @media (min-width: 1000px) {
    #section-one {
      margin-top: 40px;
    }

    .homepage-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      vertical-align: center;
      gap: 60px;
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
      line-height: 30px;
      width: 430px;
    }

    .section-image {
      width: 360px;
      height: 460px;
    }

    //SlideShow
    #allSlides {
      display: flex;
      flex-direction: column;
      overflow-x: scroll;
      scroll-behavior: smooth;
    }

    #section-two,
    #section-three,
    #section-four {
      display: none;
    }

    //Show prev, next, and dots
    .dots,
    .prev,
    .next {
      display: block;
    }

    /* The dots/bullets/indicators */
    .dots {
      position: relative;
      top: -20px;
    }

    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
      background-color: #717171;
    }

    //Previous and Next Buttons
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      background-color: transparent;
      font-size: 25px;
    }

    .prev {
      left: 18px;
    }

    .next {
      right: 18px;
    }
  }
`;
