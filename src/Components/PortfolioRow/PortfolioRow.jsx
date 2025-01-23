import HouseModal from "../HouseModal/HouseModal";
import CakeModal from "../CakeModal/CakeModal";
import Theater from "../Theater/Theater";

function PortfolioRow() {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <HouseModal />
      </div>

      <div className="col-md-6 col-lg-4">
        <CakeModal />
      </div>

      <div className="col-md-6 col-lg-4">
        <Theater />
      </div>
    </>
  );
}

export default PortfolioRow;
