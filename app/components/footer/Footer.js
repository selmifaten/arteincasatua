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
                  17100 Savona, <br />
                  Liguria, Italy
                  {/* https://maps.app.goo.gl/t9M8mfMhYmmcmv5d6 */}
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.08265469447494!2d8.482039738858468!3d44.31155269439236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2e1ff986e7361%3A0x24bcefc724b7e45c!2sVia%20Montegrappa%2C%206%2C%2017100%20Savona%20SV%2C%20Italy!5e1!3m2!1sen!2stn!4v1725889063007!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
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

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Link utili</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Chi Siamo</a>
                </li>
                <li>
                  <a href="#">Servizi</a>
                </li>
                <li>
                  <a href="#">Progetti</a>
                </li>
                <li>
                  <a href="#">Contatti</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li>
                  <a href="#">Molestiae accusamus iure</a>
                </li>
                <li>
                  <a href="#">Excepturi dignissimos</a>
                </li>
                <li>
                  <a href="#">Suscipit distinctio</a>
                </li>
                <li>
                  <a href="#">Dilecta</a>
                </li>
                <li>
                  <a href="#">Sit quas consectetur</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li>
                  <a href="#">Ipsam</a>
                </li>
                <li>
                  <a href="#">Laudantium dolorum</a>
                </li>
                <li>
                  <a href="#">Dinera</a>
                </li>
                <li>
                  <a href="#">Trodelas</a>
                </li>
                <li>
                  <a href="#">Flexo</a>
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
            . All Rights Reserved
          </div>
          {/* <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
