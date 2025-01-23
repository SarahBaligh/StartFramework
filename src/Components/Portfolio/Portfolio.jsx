import PortfolioRow from "../PortfolioRow/PortfolioRow";
import StarLine from "../StarLine/StarLine";

function Portfolio() {
  return (
    <>
      <section className="pb-3 pt-5">
        <div className="container ">
          <div>
            <h1 className="text-center fw-bold text-uppercase fs-1 text-color">
              Portfolio Component
            </h1>
            <StarLine />
          </div>

          <div className="row g-5">
            <PortfolioRow />
            <PortfolioRow />
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
