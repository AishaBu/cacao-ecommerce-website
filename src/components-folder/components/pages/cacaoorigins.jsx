import React, { useRef } from 'react';
import styled from 'styled-components';
import ParTemplate from './par-template';

function OriginsOfCacao() {
  //useRef Declarations Two
  const scrollSectionOne = useRef(null);
  const scrollSectionTwo = useRef(null);

  //Scroll To View Function Two
  function sectionScrollOrigin(section) {
    section.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <CacaoOriginsStyled>
      <ParTemplate>
        <div className="homepage-content" id="allSlidesOrigin">
          {/*Section One Origin*/}
          <section
            id="section-one-origin"
            className="slides"
            ref={scrollSectionOne}
          >
            <div className="container">
              <div className="image-container" id="image-container-origin">
                <img
                  src="/src/assets/images/cacoa-tree-1.jpg"
                  alt="cacao tree illustration"
                  className="section-image"
                />
                {/*Citation*/}
                <div className="citation" id="shorter-citation-origin">
                  <cite>Theobroma cacao (Theobroma grandiflorum)</cite>
                  <p>Image sourced via Flickr</p>
                </div>
              </div>

              {/*Paragraph*/}
              <section className="section-paragraph">
                <h1>
                  <i>Where Does The Word Cacao Come From? </i>
                </h1>
                <p>
                  The word Cacao is the Spanish adaptation of the Aztecan word
                  Nahuatl cacaua from the root word cacahuatl meaning, “bean of
                  the cacao tree”. Cacao is believed to have been used by the
                  Olmecs in what is now Mexico to create a ceremonial drink.{' '}
                  <br />
                  The Atecs revered Cacao and this reverence for Cacao was
                  passed on to the Mayans who consumed Cacao in drink form more
                  frequently and passed the love of Cacao to the Aztecs. The
                  Aztecs reverence of Cacao was more spiritual because they
                  believed that Cacao was given to them by the gods, and they
                  drank Cacao hot, or cold, or spiced, served it in ornate
                  containers, and also used Cocoa beans as a form of currency to
                  buy food and other goods.
                </p>
              </section>
            </div>
          </section>
          {/*Section Two*/}
          <section
            id="section-two-origin"
            className="slides"
            ref={scrollSectionTwo}
          >
            <div className="container">
              <div className="image-container">
                <img
                  src="/src/assets/images/cacao-pods-png.png"
                  alt="cacao pods illustration"
                  className="section-image"
                />
                {/*Citation*/}
                <div className="citation" id="shorter-citation-origin">
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

          {/*DOTS*/}
          <div className="dots">
            <button
              type="button"
              onClick={() => sectionScrollOrigin(scrollSectionOne)}
            >
              <span className="dot" />
              <p className="dot-par">
                <i>Theobroma cacao </i>
              </p>
            </button>
            <button
              type="button"
              onClick={() => sectionScrollOrigin(scrollSectionTwo)}
            >
              <span className="dot" />
              <p className="dot-par">
                <i>Cacao Pod</i>
              </p>
            </button>
          </div>
        </div>
      </ParTemplate>
    </CacaoOriginsStyled>
  );
}

const CacaoOriginsStyled = styled.div`
  .cacao {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  #image-container-origin,
  .section-paragraph {
    vertical-align: top;
  }

  .section-paragraph {
    position: relative;
    bottom: 19px;
  }
`;

export default OriginsOfCacao;
