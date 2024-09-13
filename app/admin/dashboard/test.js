import React from "react";

const test = () => {
  const images = [
    {
      image: "/img/projects/remodeling_renovations/1725926415277.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 1",
    },
    {
      image:
        "/img/projects/remodeling_renovations/449193632_1029291069198422_2086070978350386450_n.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 2",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926414938.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 3",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415481.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 4",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415321.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 5",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415172.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 6",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415343.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 7",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926414774.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 8",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415232.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 9",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415725.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 10",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415693.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 11",
    },
    {
      image: "/img/projects/remodeling_renovations/1725926415671.jpg",
      type: "remodeling",
      title: "Ristrutturazioni 12",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414709.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 1",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414731.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 2",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414631.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 3",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414606.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 4",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414661.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 5",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926414685.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 6",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926415505.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 7",
    },
    {
      image:
        "/img/projects/construction_paintinganddecorations/1725926415626.jpg",
      type: "construction",
      title: "Tinteggiature e Decorazioni 8",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414822.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 1",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414580.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 2",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414898.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 3",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414980.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 4",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414551.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 5",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414862.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 6",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926414980.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 7",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926415011.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 8",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926415034.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 9",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926415082.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 10",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926415105.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 11",
    },
    {
      image: "/img/projects/repairs_plasterboardwork/1725926415125.jpg",
      type: "repairs",
      title: "Lavori in Cartongesso 12",
    },
  ];
  const inputs = images.map((item, index) => (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${item.type}`}>
      <div className="portfolio-content h-100">
        <img src={item.image} className="img-fluid lazy-load" alt="" />
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
  ));
  return (
    <div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415277.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 1</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415277.jpg"
              title="Ristrutturazioni 1"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414709.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 1</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414709.jpg"
              title="Tinteggiature e Decorazioni 1"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414822.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 1</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414822.jpg"
              title="Lavori in Cartongesso 1"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414580.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 2</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414580.jpg"
              title="Lavori in Cartongesso 2"
              data-gallery="portfolio-gallery-book"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/449193632_1029291069198422_2086070978350386450_n.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 2</h4>

            <a
              href="/img/projects/remodeling_renovations/449193632_1029291069198422_2086070978350386450_n.jpg"
              title="Ristrutturazioni 2"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414731.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 2</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414731.jpg"
              title="Tinteggiature e Decorazioni 2"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414898.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 3</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414898.jpg"
              title="Lavori in Cartongesso 3"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414631.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 3</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414631.jpg"
              title="Tinteggiature e Decorazioni 3"
              data-gallery="portfolio-gallery-book"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926414938.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 3</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926414938.jpg"
              title="Ristrutturazioni 3"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414606.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 4</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414606.jpg"
              title="Tinteggiature e Decorazioni 4"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414980.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 4</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414980.jpg"
              title="Lavori in Cartongesso 4"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415481.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 4</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415481.jpg"
              title="Ristrutturazioni 4"
              data-gallery="portfolio-gallery-book"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415321.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 5</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415321.jpg"
              title="Ristrutturazioni 5"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415172.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 6</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415172.jpg"
              title="Ristrutturazioni 6"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415343.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 7</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415343.jpg"
              title="Ristrutturazioni 7"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926414774.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 8</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926414774.jpg"
              title="Ristrutturazioni 8"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415232.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 9</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415232.jpg"
              title="Ristrutturazioni 9"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415725.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 10</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415725.jpg"
              title="Ristrutturazioni 10"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415693.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 11</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415693.jpg"
              title="Ristrutturazioni 11"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/remodeling_renovations/1725926415671.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Ristrutturazioni 12</h4>

            <a
              href="/img/projects/remodeling_renovations/1725926415671.jpg"
              title="Ristrutturazioni 12"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414661.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 5</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414661.jpg"
              title="Tinteggiature e Decorazioni 5"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926414685.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 6</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926414685.jpg"
              title="Tinteggiature e Decorazioni 6"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926415505.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 7</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926415505.jpg"
              title="Tinteggiature e Decorazioni 7"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/construction_paintinganddecorations/1725926415626.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Tinteggiature e Decorazioni 8</h4>

            <a
              href="/img/projects/construction_paintinganddecorations/1725926415626.jpg"
              title="Tinteggiature e Decorazioni 8"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414551.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 5</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414551.jpg"
              title="Lavori in Cartongesso 5"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414862.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 6</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414862.jpg"
              title="Lavori in Cartongesso 6"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926414980.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 7</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926414980.jpg"
              title="Lavori in Cartongesso 7"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926415011.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 8</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926415011.jpg"
              title="Lavori in Cartongesso 8"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926415034.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 9</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926415034.jpg"
              title="Lavori in Cartongesso 9"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926415082.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 10</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926415082.jpg"
              title="Lavori in Cartongesso 10"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926415105.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 11</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926415105.jpg"
              title="Lavori in Cartongesso 11"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
        <div className="portfolio-content h-100">
          <img
            src="/img/projects/repairs_plasterboardwork/1725926415125.jpg"
            className="img-fluid lazy-load"
            alt=""
          />
          <div className="portfolio-info">
            <h4>Lavori in Cartongesso 12</h4>

            <a
              href="/img/projects/repairs_plasterboardwork/1725926415125.jpg"
              title="Lavori in Cartongesso 12"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
