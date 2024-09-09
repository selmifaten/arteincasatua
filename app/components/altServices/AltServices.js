const AltServices = () => {
  return (
    <section id="alt-services" className="alt-services">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
          <div
            className="col-lg-6 img-bg"
            // style={{ backgroundImage: "url(/img/alt-services.jpg)" }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.08265469447494!2d8.482039738858468!3d44.31155269439236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2e1ff986e7361%3A0x24bcefc724b7e45c!2sVia%20Montegrappa%2C%206%2C%2017100%20Savona%20SV%2C%20Italy!5e1!3m2!1sen!2stn!4v1725889063007!5m2!1sen!2stn"
              width="600"
              height="450"
              // style="border:0;"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>

          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>Posizione del Negozio Situato</h3>
            <p>
              Visitate il nostro negozio facilmente raggiungibile per soluzioni
              personalizzate e artigianalità di qualità.
            </p>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bi bi-calendar-day flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="https://maps.app.goo.gl/t9M8mfMhYmmcmv5d6 " className="stretched-link">
                    Dal Lunedì al Sabato
                  </a>
                </h4>
                <p>
                  Siamo disponibili tutta la settimana per soddisfare le vostre
                  esigenze.
                </p>
              </div>
            </div>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-clock flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="https://maps.app.goo.gl/t9M8mfMhYmmcmv5d6 " className="stretched-link">
                    Dalle 7:30 alle 19:00
                  </a>
                </h4>
                <p>
                  Il nostro negozio è aperto con orari estesi per adattarsi al
                  vostro programma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltServices;
