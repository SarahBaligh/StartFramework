import house from "./../../assets/images/poert1.png";
import cake from "./../../assets/images/port2.png";
import msrh from "./../../assets/images/port3.png";

function Portfolio() {
  return (
    <>
      <section className="py-4">
        <div className="container ">
          <div>
            <h1 className="text-center fw-bold text-uppercase fs-1 text-color">
              Portfolio Component
            </h1>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <div className="dark-line"></div>
              <div>
                <i className="fa-solid fa-star text-color"></i>
              </div>
              <div className="dark-line"></div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={house} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={cake} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={msrh} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={house} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={cake} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-6 col-lg-4">
              <figure>
                <img src={msrh} alt="img" className="img-fluid rounded-3" />
                <figcaption className="d-flex justify-content-center align-items-center rounded-3">
                  <div>
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
