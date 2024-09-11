import React, { useRef } from "react";

const Contact = () => {
  const loadingRef = useRef(null);
  const errorMessageRef = useRef(null);
  const sentMessageRef = useRef(null);
  const phoneRef = useRef(null);

  const validateNumberInput = (ref) => {
    const input = ref.current;
    let value = input.value;

    const regex = /^\+?[0-9]*$/;

    if (!regex.test(value)) {
      input.value = value.slice(0, -1);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      loadingRef.current.classList.add("d-block");
      errorMessageRef.current.classList.remove("d-block");
      sentMessageRef.current.classList.remove("d-block");

      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      loadingRef.current.classList.remove("d-block");
      errorMessageRef.current.classList.remove("d-block");
      sentMessageRef.current.classList.add("d-block");
    } catch (err) {
      console.error(err);
      sentMessageRef.current.classList.remove("d-block");
      loadingRef.current.classList.remove("d-block");
      errorMessageRef.current.innerHTML = "Errore, l'email non è stata inviata";
      errorMessageRef.current.classList.add("d-block");
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>AREA SERVIZIO</h3>
              <p>Liguria, Italy</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Inviaci un'e-mail</h3>
              <p>arteincasatua11@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Chiamaci</h3>
              <p>+39 327 945 2547</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-0">
            <form
              onSubmit={handleSubmit}
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Telefono"
                    ref={phoneRef}
                    onInput={() => validateNumberInput(phoneRef)}
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Indirizzo"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Soggetto"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Messaggio"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading" ref={loadingRef}>
                  Caricamento...
                </div>
                <div className="error-message" ref={errorMessageRef}></div>
                <div className="sent-message" ref={sentMessageRef}>
                  Il tuo messaggio è stato inviato. Grazie!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Invia Messaggio</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
