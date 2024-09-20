import "./dashboard.css";
import "./nav-dashboard.css";
import "./Components/Components.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import ProfilePopup from "./popups/ProfilePopup";

const Dashboard = () => {
  const [AccountData, setAccountData] = useState({
    nom_prenom: "",
    role: "",
    email: "",
  });
  const [PageIsLoading, setPageIsLoading] = useState(true);
  const portfolioIsotopeRef = useRef(null);
  const addPopup = useRef(null);
  const ProjectPhotoInput = useRef(null);
  const confirmationPopup = useRef(null);
  const titleRef = useRef(null);
  const ProjectPhotoContainer = useRef(null);
  const [selectedItem, setselectedItem] = useState({});

  const fetchAccountData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/organisateurs/account`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data == null) {
          showUpgradedToast("Sessione scaduta, effettua nuovamente l'accesso", "danger");
          setTimeout(() => {
            window.location.href = "/admin/login";
          }, 2000);
        } else {
          setAccountData(data);
          setPageIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);

      setTimeout(() => {
        window.location.href = "/admin/login";
      }, 2000);
    }
  };

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

  const OpenProfilePopup = () => {
    document.querySelector(".manageProfile-popup").classList.add("show-popup");
  };

  const capitalizeFirstLetter = (string) => {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };

  const logout = () => {
    showUpgradedToast("Disconnessione, attendere...");
    localStorage.removeItem("access_token");
    setTimeout(() => {
      showUpgradedToast("Fatto!, Reindirizzamento...", "success");
    }, 1000);

    setTimeout(() => {
      window.location.href = "/admin/login";
    }, 2000);
  };

  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }

  const [images, setImages] = useState([]);

  const fetchProjectsData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`
      );
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        showUpgradedToast("Errore, riprova!", "danger");
      }
    } catch (error) {
      console.log(error);
      showUpgradedToast(
        "Errore, riprova!",
        "danger"
      );
    }
  };

  const DeletePhoto = async () => {
    try {
      showUpgradedToast("Eliminazione in corso, attendere...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${selectedItem.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data === null) {
          showUpgradedToast("Errore, riprova!", "danger");
        } else {
          showUpgradedToast("Eliminato con successo!", "success");
          CloseConfirmationPopup();
          fetchProjectsData();
        }
      } else {
        showUpgradedToast("Errore, riprova!", "danger");
      }
    } catch (error) {
      console.log(error);
      showUpgradedToast("Errore, riprova!");
      CloseConfirmationPopup();
    }
  };

  const OpenConfirmationPopup = () => {
    document.body.style.overflow = "hidden";
    confirmationPopup.current.classList.add("showConfirmationPopup");
  };

  const CloseConfirmationPopup = () => {
    document.body.style.overflow = "visible";
    confirmationPopup.current.classList.remove("showConfirmationPopup");
  };

  const OpenAddPopup = () => {
    document.body.style.overflow = "hidden";
    addPopup.current.classList.add("showConfirmationPopup");
  };

  const CloseAddPopup = () => {
    document.body.style.overflow = "visible";
    addPopup.current.classList.remove("showConfirmationPopup");
  };

  const addProject = async () => {
    const title = titleRef.current.value.trim();
    if (!title) {
      showUpgradedToast("Titolo richiesto!", "warning");
      return;
    }
    const type = document.querySelector(
      ".add-popup input[type='radio']:checked"
    );
    if (type === null || type === undefined || !type) {
      showUpgradedToast("Seleziona Tipo!", "warning");
      return;
    }
    if (ProjectPhotoInput.current.files.length === 0) {
      showUpgradedToast("Carica foto!", "warning");
      return;
    }

    const file = ProjectPhotoInput.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    showUpgradedToast("Caricamento in corso, attendere...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            type: type.id,
            title: title,
            image: " ",
          }),
        }
      );
      if (response.ok) {
        const testData = await response.json();
        if (testData === null) {
          showUpgradedToast("Errore, riprova!", "danger");
        } else {
          const responseV2 = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/projects/uploadphoto/${testData.id}`,
            {
              method: "POST",
              headers: {
                access_token: `${localStorage.getItem("access_token")}`,
              },
              body: formData,
            }
          );
          if (responseV2.ok) {
            const testData2 = await responseV2.json();
            if (testData2 === null) {
              showUpgradedToast("Errore, riprova!", "danger");
            } else {
              showUpgradedToast("Fatto!", "success");
              fetchProjectsData();
              CloseAddPopup();
            }
          }
        }
      }
    } catch (error) {
      console.log(error);

      showUpgradedToast("Errore, riprova!", "danger");
    }
  };

  useEffect(() => {
    fetchAccountData();
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
    <div id="dashboard-container">
      <ProfilePopup
        data={AccountData}
        showUpgradedToast={showUpgradedToast}
        fetchAccounts={() => {
          window.location.reload();
        }}
      />
      {PageIsLoading && (
        <div className="loader-container">
          <div className="gear">
            <img
              src="https://assets.codepen.io/6093409/gear.svg.png"
              alt="an illustration of a gear"
            />
          </div>
        </div>
      )}
      <div className="content">
        <div className="content-container">
          <a href="./" className="logo d-flex align-items-center">
            <h1 style={{ margin: "0", color: "white" }}>
              L'arte In Casa Tua<span>.</span>
            </h1>
          </a>
          <div className="profile">
            <div className="img" onClick={() => OpenProfilePopup()}>
              <i className="bi bi-gear" />
            </div>
            <div className="details">
              <div className="name">{AccountData.nom_prenom}</div>
              <div className="role">
                {capitalizeFirstLetter(AccountData.role)}
              </div>
            </div>
            <div className="settings img">
              <i
                className="bi bi-box-arrow-left"
                onClick={() => {
                  logout();
                }}
              />
            </div>
          </div>
        </div>
        <div className="second">
          <div className="accounts-card">
            <div className="buttons">
              <button
                className="add-button"
                onClick={() => {
                  OpenAddPopup();
                }}
              >
                Aggiungi immagine
              </button>
            </div>
            <section
              id="projects"
              className="projects"
              style={{ paddingTop: "25px" }}
            >
              <div className="container" data-aos="fade-up">
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
                      <li data-filter=".filter-repairs">
                        Lavori in Cartongesso
                      </li>
                    </ul>
                    {/* End Projects Filters */}

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
                              style={{objectFit: "cover"}}
                              src={item.image}
                              className="img-fluid lazy-load"
                              alt=""
                            />
                            <div className="portfolio-info">
                              <h4>{item.title}</h4>

                              <div
                                href={item.image}
                                title={item.title}
                                data-gallery={`portfolio-gallery-${item.title}`}
                                className="glightbox preview-link"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setselectedItem(item);
                                  OpenConfirmationPopup();
                                }}
                              >
                                <i className="bi bi-trash"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="confirmation-popup" ref={confirmationPopup}>
        <div className="popContent">
          <div className="title">Sei sicuro?</div>
          <div className="buttons">
            <button
              className="cancel"
              onClick={() => {
                CloseConfirmationPopup();
              }}
            >
              Cancellare
            </button>
            <button
              className="order"
              onClick={() => {
                DeletePhoto();
              }}
            >
              Eliminare
            </button>
          </div>
        </div>
      </div>
      <div className=" add-popup" ref={addPopup}>
        <div className="popContent ">
          <div className="close">
            <i className="bi bi-x-lg" onClick={() => CloseAddPopup()}></i>
          </div>
          <div className="section-header" style={{ padding: "0" }}>
            <h2>addizionare</h2>
          </div>
          <div className="image-container">
            <img src="" alt="" ref={ProjectPhotoContainer} />
            <div className="buttons">
              <button
                className="add-button"
                onClick={() => {
                  ProjectPhotoInput.current.click();
                }}
              >
                Scegli
              </button>
              <input
                type="file"
                name="myImage"
                accept="image/png, image/gif, image/jpeg"
                style={{ display: "none" }}
                ref={ProjectPhotoInput}
                onChange={() => {
                  const file = ProjectPhotoInput.current.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    ProjectPhotoContainer.current.src = reader.result;
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </div>
          <div className="title">
            <div
              className="form-group"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              Titolo:{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                style={{ width: "min(100%,  300px)" }}
                ref={titleRef}
                required
              />
            </div>
            <div className="type">
            Tipo:
              <div className="radio-wrapper-7 d-flex flex-column gap-2">
                <label className="radio-wrapper-7">
                  <input type="radio" name="type" id="remodeling" />
                  <span>Ristrutturazioni</span>
                </label>
                <label className="radio-wrapper-7">
                  <input type="radio" name="type" id="construction" />
                  <span>Tinteggiature e Decorazioni</span>
                </label>
                <label className="radio-wrapper-7">
                  <input type="radio" name="type" id="repairs" />
                  <span>Lavori in Cartongesso</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button
                className="add-button"
                onClick={() => {
                  addProject();
                }}
              >
                Salva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
