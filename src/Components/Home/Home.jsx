import avatar from "./../../assets/images/avataaars.svg";

function Home() {
  return (
    <>
      <section className="bg-color py-5 text-white text-center">
        <div className="container py-5">
          <figure className="w-75 m-auto">
            <img src={avatar} alt="Avatar image" className="w-25 mb-4" />
          </figure>
          <div>
            <h1 className="text-center fw-bold text-uppercase fs-1">
              start framework
            </h1>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <div className="line"></div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
