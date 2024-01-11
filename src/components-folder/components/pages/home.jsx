import React, { useRef } from 'react';
import ParTemplate from './par-template';

function Home() {
  //useRef Declarations
  const scrollSectionOne = useRef(null);
  const scrollSectionTwo = useRef(null);
  const scrollSectionThree = useRef(null);
  const scrollSectionFour = useRef(null);

  //Scroll To View Function
  function sectionScroll(section) {
    section.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <ParTemplate>
      <div className="homepage-content" id="allSlides">
        {/*Section One*/}
        <section id="section-one" className="slides" ref={scrollSectionOne}>
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
                small(20-39 ft tall(6-12m)) evergreen tree in the family
                <i> Malvaceae</i> (mallows) that weighs about one pound(500g)
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
        <section id="section-two" className="slides" ref={scrollSectionTwo}>
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
        <section id="section-three" className="slides" ref={scrollSectionThree}>
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
        <section id="section-four" className="slides" ref={scrollSectionFour}>
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
      </div>

      {/*DOTS*/}
      <div className="dots">
        <button type="button" onClick={() => sectionScroll(scrollSectionOne)}>
          <span className="dot" />
          <p className="dot-par">
            <i>Theobroma cacao </i>
          </p>
        </button>
        <button type="button" onClick={() => sectionScroll(scrollSectionTwo)}>
          <span className="dot" />
          <p className="dot-par">
            <i>Cacao Pod</i>
          </p>
        </button>
        <button type="button" onClick={() => sectionScroll(scrollSectionThree)}>
          <span className="dot" />
          <p className="dot-par">
            <i>Cacao Bean Varieties </i>
          </p>
        </button>
        <button type="button" onClick={() => sectionScroll(scrollSectionFour)}>
          <span className="dot" />
          <p className="dot-par">
            <i>Popular Varieties </i>
          </p>
        </button>
      </div>
    </ParTemplate>
  );
}

export default Home;
