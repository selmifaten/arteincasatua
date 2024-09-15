import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Arte in Casa Tua</h3>
                <p>
                  Liguria, Italy
                  <br />
                  <br />
                  <strong>Telefono:</strong> +39 327 945 2547
                  <br />
                  <strong>Email:</strong> larteincasatua11@gmail.com
                  <br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a
                    href="https://www.facebook.com/luliarmen"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/larteincasatua/"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Link utili</h4>
              <ul>
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./servizi">Servizi</a>
                </li>
                <li>
                  <a href="./progetti">Progetti</a>
                </li>
                <li>
                  <a href="./contatti">Contatti</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="./servizi">Ristrutturazioni</a>
                </li>
                <li>
                  <a href="./servizi">Tinteggiature</a>
                </li>
                <li>
                  <a href="./servizi">Decorazioni</a>
                </li>
                <li>
                  <a href="./servizi">Lavori in Cartongesso</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-info">
              <h4>Informazioni sugli Sviluppatori</h4>
              <p>Sito web creato e progettato da:</p>
              <ul style={{ padding: "0" }}>
                <li className="mt-2">
                  Faten Selmi -{" "}
                  <a href="mailto:selmii.faten@gmail.com">
                    selmii.faten@gmail.com
                  </a>
                  <div className="social-links d-flex ">
                    <a
                      href="https://www.linkedin.com/in/fatenselmi/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/selmifaten"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-github"></i>
                    </a>

                    <a
                      href="https://www.facebook.com/faten.selmi.9279/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </li>
                <li className="mt-2">
                  Jawhar Hmidi -{" "}
                  <a href="mailto:jawharhmidi01@gmail.com">
                    jawharhmidi01@gmail.com
                  </a>
                  <div className="social-links d-flex ">
                    <a
                      href="https://www.linkedin.com/in/jawharhmidi/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/jawharhmidi02"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/jawhar.hmidi.5/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://jawharhmidi.netlify.app/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-browser-chrome"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>L'Arte in Casa Tua</span>
            </strong>
            . Tutti i diritti riservati
          </div>
          <div className="credits" style={{ marginTop: "5px" }}>
            Progettato da Sviluppatori{" "}
            <a href="https://jawharhmidi.netlify.app/">Jawhar Hmidi</a> e{" "}
            <a href="https://www.linkedin.com/in/fatenselmi/">Faten Selmi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
