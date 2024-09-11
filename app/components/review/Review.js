import React, { useRef } from "react";

const Review = () => {
  const loadingRef = useRef(null);
  const errorMessageRef = useRef(null);
  const sentMessageRef = useRef(null);
  const rateRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const jobRef = useRef(null);

  const validateNumberInput = (ref) => {
    const input = ref.current;
    let value = input.value;

    const regex = /^[0-9]+$/;

    if (!regex.test(value)) {
      input.value = value.slice(0, -1);
    }
    if (value < 0 || value > 5) {
      input.value = 5;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const body = JSON.stringify({
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      job: jobRef.current.value.trim(),
      message: messageRef.current.value.trim(),
      rate: rateRef.current.value.trim(),
    });

    try {
      loadingRef.current.classList.add("d-block");
      errorMessageRef.current.classList.remove("d-block");
      sentMessageRef.current.classList.remove("d-block");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      loadingRef.current.classList.remove("d-block");
      errorMessageRef.current.classList.remove("d-block");
      sentMessageRef.current.classList.add("d-block");
    } catch (err) {
      console.error(err);
      sentMessageRef.current.classList.remove("d-block");
      loadingRef.current.classList.remove("d-block");
      errorMessageRef.current.innerHTML = "Errore, Recensione non inviata";
      errorMessageRef.current.classList.add("d-block");
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
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
                    ref={nameRef}
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
                    ref={emailRef}
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
                    placeholder="Lavoro"
                    ref={jobRef}
                    required
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Valutare"
                    ref={rateRef}
                    onInput={() => {
                      validateNumberInput(rateRef);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Messaggio"
                  ref={messageRef}
                  required
                ></textarea>
              </div>
              
              <div className="my-3">
                <div className="loading" ref={loadingRef}>
                  Caricamento...
                </div>
                <div className="error-message" ref={errorMessageRef}></div>
                <div className="sent-message" ref={sentMessageRef}>
                  La tua recensione è stata inviata. Grazie!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Invia recensione</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
