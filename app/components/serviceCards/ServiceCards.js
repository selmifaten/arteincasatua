const ServiceCards = () => {
  return (
    <section id="services-cards" className="services-cards">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>Ristrutturazioni</h3>
            <p>
              Le ristrutturazioni comprendono l'aggiornamento, il restauro o il
              miglioramento di strutture esistenti, che si tratti di una casa o
              di uno spazio commerciale. L'obiettivo è migliorare la
              funzionalità, il comfort e l'estetica, mantenendo l'integrità
              strutturale dell'edificio.
            </p>

            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>Modifiche e miglioramenti strutturali completi.</span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Restauro di aree invecchiate o danneggiate allo stato
                  originale.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Aggiornamenti personalizzati in base alle preferenze del
                  cliente.
                </span>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>Tinteggiature e Decorazioni </h3>
            <p>
              Tinteggiature e decorazioni si concentrano sulla trasformazione
              visiva degli spazi interni ed esterni, aggiungendo un nuovo
              aspetto estetico e proteggendo le superfici. Include sia lavori di
              pittura semplici che opere decorative più complesse.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Applicazione esperta di vernici e finiture per durata e
                  estetica.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Tecniche decorative come stencil, finiture effetto finto o
                  murales.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Abbinamento personalizzato di colori e opzioni di texture in
                  base alle preferenze del cliente.
                </span>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>Lavori in Cartongesso</h3>
            <p>
              Lavori in cartongesso sono essenziali per creare pareti, soffitti
              e caratteristiche architettoniche in ambienti residenziali e
              commerciali. Questo processo include l'installazione, la
              rifinitura e talvolta la riparazione del cartongesso (pannelli di
              gesso) per garantire una superficie liscia e duratura.
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Installazione di cartongesso per pareti, soffitti e divisori.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Tecniche di finitura come nastratura, levigatura e texturing
                  per superfici lisce.
                </span>
              </li>
              <li>
                <i className="bi bi-check2"></i>{" "}
                <span>
                  Riparazione e restauro di sezioni danneggiate del cartongesso.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
