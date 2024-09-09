const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">
                Impresa Edile Liguria <span>L`Arte In Casa Tua </span>
              </h2>
              <p data-aos="fade-up">
                Benvenuti a L'arte In Casa Tua, dove trasformiamo ogni spazio in
                un’opera su misura per voi, offrendo servizi completi che
                includono la progettazione personalizzata, la scelta dei
                materiali, e l’esecuzione dei lavori di restyling per garantire
                un risultato finale che supera le vostre aspettative.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                href="#get-started"
                className="btn-get-started"
              >
                Inizia
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div
          className="carousel-item active"
          style={{
            backgroundImage: "url(/img/hero-carousel/hero-carousel-1.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url(/img/hero-carousel/hero-carousel-2.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url(/img/hero-carousel/hero-carousel-3.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url(/img/hero-carousel/hero-carousel-4.jpg)",
          }}
        ></div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url(/img/hero-carousel/hero-carousel-5.jpg)",
          }}
        ></div>

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
