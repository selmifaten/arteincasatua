const Features = () => {
  return (
    <section id="features" className="features section-bg">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row  g-2 d-flex">
          <li className="nav-item col-4">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
              aria-selected={"true"}
              role={"tab"}
            >
              <h4>Ristrutturazioni</h4>
            </a>
          </li>

          <li className="nav-item col-4">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
            >
              <h4>Tinteggiature e Decorazioni</h4>
            </a>
          </li>

          <li className="nav-item col-4">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab-3"
            >
              <h4>Lavori in Cartongesso</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div
                className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Ristrutturazioni</h3>
                <p className="fst-italic">
                  Siamo specializzati in ristrutturazioni complete, trasformando
                  gli spazi con precisione e attenzione ai dettagli. Che si
                  tratti di modernizzare una casa, un ufficio o uno spazio
                  commerciale, il nostro team di esperti assicura che ogni
                  progetto venga realizzato secondo i più alti standard,
                  offrendo risultati duraturi e di grande impatto estetico.
                  Dalle modifiche strutturali agli aggiornamenti di design degli
                  interni, gestiamo ogni aspetto delle tue esigenze di
                  ristrutturazione.
                </p>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="/img/features-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Tinteggiature e Decorazioni</h3>
                <p className="fst-italic">
                  Rinfresca i tuoi spazi con i nostri servizi professionali di
                  tinteggiatura e decorazione. I nostri pittori esperti offrono
                  finiture di alta qualità, utilizzando i migliori prodotti per
                  superfici sia interne che esterne. Collaboriamo strettamente
                  con i clienti per scegliere i colori, le texture e gli stili
                  perfetti, assicurando un risultato vibrante e personalizzato
                  che realizzi la tua visione.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Lavori in Cartongesso</h3>
                <p className="fst-italic">
                  Il nostro team eccelle nell'installazione di cartongesso e
                  lastre in gesso, garantendo finiture lisce e impeccabili per
                  ogni tipo di spazio. Che tu abbia bisogno di pareti divisorie,
                  soffitti o sistemi a parete completi, offriamo lavori precisi
                  ed efficienti, assicurando sia l'integrità strutturale che
                  l'estetica. Ideale per progetti residenziali e commerciali, le
                  nostre soluzioni in cartongesso sono personalizzate per
                  soddisfare le tue esigenze specifiche.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
