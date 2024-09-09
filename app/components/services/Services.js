const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Servizi</h2>
          <p>Cosa Facciamo</p>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>

                {/* <i className="fa-solid fa-trowel-bricks"></i> */}
              </div>
              <h3>Ristrutturazioni</h3>
              <p>
                Le nostre ristrutturazioni trasformano il vostro ambiente in uno
                spazio rinnovato e moderno, con attenzione ai dettagli e
                all'ottimizzazione degli spazi, utilizzando materiali di alta
                qualità e soluzioni su misura per soddisfare ogni esigenza
                abitativa.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-item position-relative">
              <div className="icon">
                {/* <i className="fa-solid fa-helmet-safety"></i> */}
                <i className="fa-solid fa-paint-roller"></i>
              </div>
              <h3>Tinteggiature e Decorazioni </h3>
              <p>
                Offriamo soluzioni di tinteggiatura e decorazione personalizzate
                per valorizzare ogni ambiente, combinando colori, texture e
                finiture di alta qualità per creare spazi eleganti e
                accoglienti, in linea con i vostri gusti e stile.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                {/* <i className="fa-solid fa-arrow-up-from-ground-water"></i> */}
                <i className="fa-solid fa-trowel-bricks"></i>
              </div>
              <h3>Lavori in Cartongesso</h3>
              <p>
                I lavori in cartongesso offrono soluzioni versatili e rapide per
                la realizzazione di pareti divisorie, controsoffitti, nicchie e
                altre strutture personalizzate. Grazie alla facilità di
                montaggio e alle eccellenti proprietà isolanti, il cartongesso è
                ideale per ottimizzare gli spazi, migliorare l’estetica e
                aumentare il comfort abitativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
