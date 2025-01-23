import theater from "../../assets/images/port3.png";
function Theater() {
  return (
    <>
      <figure>
        <img src={theater} alt="" className="w-100 rounded-3" />
        <figcaption
          className="d-flex justify-content-center align-items-center rounded-3"
          data-bs-target="#theaterImg"
          data-bs-toggle="modal"
        >
          <div>
            <i className="fa-solid fa-plus fa-5x text-white"></i>
          </div>
        </figcaption>
      </figure>
      <div
        className="modal fade"
        id="theaterImg"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  ">
          <div>
            <div className="modal-body">
              <img src={theater} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Theater;
