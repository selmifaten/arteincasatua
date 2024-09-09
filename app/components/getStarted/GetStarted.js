import { useRef } from "react";

const GetStarted = () => {
  const loadingRef = useRef(null);
  const errorMessageRef = useRef(null);
  const sentMessageRef = useRef(null);

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
    <section id="get-started" className="get-started section-bg">
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-up"
          >
            <div className="content">
              <h3>
                Ristrutturazione Completa Liguria Tinteggiature e Decorazioni
                Pareti.
              </h3>

              <p>
                L’arte in casa tua è un impresa edile che svolge lavori di
                ristrutturazione di interni ed esterni ed opera in tutta la
                Liguria offrendo un servizio completo e di altissima qualità. Vi
                garantisce ottimi risultati con tempestività, precisione e
                puntualità, grazie alla sua grande competenza, professionalità e
                serietà. Contattaci per un preventivo gratuito e senza
                impegno...
              </p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade">
            <form
              onSubmit={handleSubmit}
              method="post"
              className="php-email-form"
            >
              <h3>Richiedi un preventivo</h3>
              <br />
              <div className="row gy-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nome"
                    required
                  />
                </div>

                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Telefono"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Messaggio"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading" ref={loadingRef}>
                    Caricamento...
                  </div>
                  <div className="error-message" ref={errorMessageRef}></div>
                  <div className="sent-message" ref={sentMessageRef}>
                    La tua richiesta di preventivo è stata inviata con successo.
                    Grazie!
                  </div>

                  <button type="submit">Invia</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
