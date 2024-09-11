import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const loadingRef = useRef(null);

  const icon = {
    success: '<i class="bi bi-check-circle"></i>',
    danger: '<i class="bi bi-bug"></i>',
    warning: '<i class="bi bi-exclamation-circle">warning</i>',
    info: '<i class="bi bi-info-circle">info</i>',
  };

  const showUpgradedToast = (
    message = "Sample Message",
    toastType = "info"
  ) => {
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

  const fetchReviews = async () => {
    try {
      loadingRef.current.classList.add("d-block");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/pagination?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setTotalPages(data.totalPages);
      setReviews(data.data);
      loadingRef.current.classList.remove("d-block");
    } catch (error) {
      console.error("Error fetching reviews:", error);
      loadingRef.current.classList.remove("d-block");
      showUpgradedToast(
        "Errore durante il recupero delle recensioni",
        "danger"
      );
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 4) {
      // Show all pages if total pages are 4 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`page__numbers ${page === i ? "active" : ""}`}
            onClick={() => setPage(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      // Show pagination with dots for more than 4 pages
      if (page <= 3) {
        // If the current page is 1, 2, or 3, show 1, 2, 3, ..., last page
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`page__numbers ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            >
              {i}
            </li>
          );
        }
        pageNumbers.push(
          <li key="dots" className="page__dots">
            ...
          </li>,
          <li
            key={totalPages}
            className="page__numbers"
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </li>
        );
      } else if (page >= totalPages - 2) {
        // If the current page is within the last 3 pages, show first page, ..., last 3 pages
        pageNumbers.push(
          <li key={1} className="page__numbers" onClick={() => setPage(1)}>
            1
          </li>,
          <li key="dots" className="page__dots">
            ...
          </li>
        );
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`page__numbers ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            >
              {i}
            </li>
          );
        }
      } else {
        // Show first page, ..., current page, next page, ..., last page
        pageNumbers.push(
          <li key={1} className="page__numbers" onClick={() => setPage(1)}>
            1
          </li>,
          <li key="dots1" className="page__dots">
            ...
          </li>
        );
        for (let i = page - 1; i <= page + 1; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`page__numbers ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            >
              {i}
            </li>
          );
        }
        pageNumbers.push(
          <li key="dots2" className="page__dots">
            ...
          </li>,
          <li
            key={totalPages}
            className="page__numbers"
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </li>
        );
      }
    }

    return pageNumbers;
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [page]);
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonianze</h2>
          <p>
            Leggi cosa dicono i nostri clienti sulla loro esperienza con noi{" "}
          </p>
          <p>
            Se hai provato i nostri prodotti o servizi, ci farebbe piacere avere
            anche la tua opinione!
            <br />
            <a className="review-btn" href="./revisione" onClick={() => {}}>
              Lascia la tua recensione
            </a>
          </p>
        </div>

        <Swiper
          speed={600}
          modules={[Pagination, Scrollbar, A11y]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          // navigation
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="swiper-2 swiper"
        >
          <div className="swiper-wrapper">
            {reviews.map((review) => (
              <SwiperSlide className="swiper-slide" key={review.id}>
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <h3>{review.name}</h3>
                    <h4>{review.job}</h4>
                    <div className="stars">
                      {[...Array(review.rate)].map((_, index) => (
                        <i key={index} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {review.message}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <ul className="page">
        <li
          className={`page__btn ${page !== 1 ? "active" : ""}`}
          onClick={() => handlePrevClick()}
        >
          <i className="bi bi-chevron-double-left"></i>
        </li>
        {renderPageNumbers()}
        <li
          className={`page__btn ${page < totalPages ? "active" : ""}`}
          onClick={() => handleNextClick()}
        >
          <i className="bi bi-chevron-double-right"></i>
        </li>
      </ul>
      <div className="loading" ref={loadingRef}>
        Caricamento
      </div>
    </section>
  );
};

export default Testimonials;
