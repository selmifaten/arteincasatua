import { useRef, useEffect, useState } from "react";
import AOS from "aos";

const OurProjects = ({ parent }) => {
  const portfolioIsotopeRef = useRef(null);
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  const [images, setImages] = useState([]);

  const showUpgradedToast = (
    message = "Sample Message",
    toastType = "info"
  ) => {
    const icon = {
      success: '<i class="bi bi-check-circle"></i>',
      danger: '<i class="bi bi-bug"></i>',
      warning: '<i class="bi bi-exclamation-circle"></i>',
      info: '<i class="bi bi-info-circle"></i>',
    };

    if (!Object.keys(icon).includes(toastType)) toastType = "info";

    let box = document.createElement("div");
    box.classList.add("better-toast", `better-toast-${toastType}`);
    box.innerHTML = ` <div class="better-toast-content-wrapper">
                      <div class="better-toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="better-toast-message">${message}</div>
                      <div class="better-toast-progress"></div>
                      </div>`;

    let toastAlready = document.body.querySelector(".better-toast");
    if (toastAlready) {
      toastAlready.remove();
    }

    document.body.appendChild(box);

    setTimeout(() => {
      box.remove();
    }, 5000);
  };

  const fetchProjectsData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects${
          parent === "Home" ? `?limit=12` : ""
        }`
      );
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        showUpgradedToast("Error From DataBase!", "danger");
      }
    } catch (error) {
      console.log(error);
      showUpgradedToast(
        "Error in  fetching projects, please try again later",
        "danger"
      );
    }
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");
      let portfolionIsotope = portfolioIsotopeRef.current;

      if (portfolionIsotope) {
        let portfolioFilter = portfolionIsotope.getAttribute(
          "data-portfolio-filter"
        )
          ? portfolionIsotope.getAttribute("data-portfolio-filter")
          : "*";
        let portfolioLayout = portfolionIsotope.getAttribute(
          "data-portfolio-layout"
        )
          ? portfolionIsotope.getAttribute("data-portfolio-layout")
          : "masonry";
        let portfolioSort = portfolionIsotope.getAttribute(
          "data-portfolio-sort"
        )
          ? portfolionIsotope.getAttribute("data-portfolio-sort")
          : "original-order";

        let portfolioIsotope = new Isotope(
          document.querySelector(".portfolio-container"),
          {
            itemSelector: ".portfolio-item",
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort,
          }
        );

        let menuFilters = document.querySelectorAll(
          ".portfolio-isotope .portfolio-flters li"
        );
        menuFilters.forEach(function (el) {
          el.addEventListener(
            "click",
            function () {
              document
                .querySelector(
                  ".portfolio-isotope .portfolio-flters .filter-active"
                )
                .classList.remove("filter-active");
              this.classList.add("filter-active");
              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              if (typeof aos_init == "function") {
                aos_init();
              }
            },
            false
          );
        });
      }
    }
  }, [images]);
  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>I nostri Progetti</h2>
        </div>

        {images.length !== 0 && (
          <div
            className="portfolio-isotope"
            ref={portfolioIsotopeRef}
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
          >
            <ul
              className="portfolio-flters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active">
                Tutto
              </li>
              <li data-filter=".filter-remodeling">Ristrutturazioni</li>
              <li data-filter=".filter-construction">
                Tinteggiature e Decorazioni
              </li>
              <li data-filter=".filter-repairs">Lavori in Cartongesso</li>
            </ul>

            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {images.map((item, index) => (
                <div
                  className={`col-lg-4 col-md-6 portfolio-item filter-${item.type}`}
                  key={index}
                >
                  <div className="portfolio-content h-100">
                    <img
                      src={item.image}
                      className="img-fluid lazy-load"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>

                      <a
                        href={item.image}
                        title={item.title}
                        data-gallery={`portfolio-gallery-${item.title}`}
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {parent === "Home" && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="./progetti" className="see-more">
                  See More
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProjects;
