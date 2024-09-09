const Header = ({ parent }) => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="./" className="logo d-flex align-items-center">
          {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1>
            L'arte In Casa Tua<span>.</span>
          </h1>
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className={parent === "Home" ? "active" : ""} href="./">
                Home
              </a>
            </li>
            <li>
              <a
                className={parent === "Chi Siamo" ? "active" : ""}
                href="./chi-siamo"
              >
                Chi Siamo
              </a>
            </li>
            <li>
              <a className={parent === "Servizi" ? "active" : ""} href="./servizi">
                Servizi
              </a>
            </li>
            <li>
              <a className={parent === "Progetti" ? "active" : ""} href="./progetti">
                Progetti
              </a>
            </li>

            <li>
              <a className={parent === "Contatti" ? "active" : ""} href="./contatti">
                Contatti
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
