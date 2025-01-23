function About() {
  return (
    <>
      <section className="bg-color text-white py-5 ">
        <div className="container py-5">
          <h1 className="text-center fw-bold text-uppercase fs-1">
            About Component
          </h1>
          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
            <div className="line"></div>
            <div>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="line"></div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
