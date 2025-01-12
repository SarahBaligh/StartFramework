// import React from "react";

function Contact() {
  return (
    <>
      <section className="contact pt-4 pb-5">
        <div className="container">
          <div>
            <h1 className="text-center fw-bold text-uppercase fs-1 text-color">
              Contact Section
            </h1>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <div className="dark-line"></div>
              <div>
                <i className="fa-solid fa-star text-color"></i>
              </div>
              <div className="dark-line"></div>
            </div>
          </div>

          <div>
            <div className="row justify-content-center mt-4 py-5">
              <div className="col-md-7">
                <form className="mt-4">
                  <input
                    type="text"
                    className="form-control mb-4 p-3 "
                    placeholder="userName"
                  />
                  <input
                    type="number"
                    className="form-control mb-4 p-3"
                    placeholder="userAge"
                  />
                  <input
                    type="email"
                    className="form-control mb-4 p-3"
                    placeholder="userEmail"
                  />
                  <input
                    type="password"
                    className="form-control mb-4 p-3"
                    placeholder="userPassword"
                  />
                  <button className="btn bg-color text-white mb-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
