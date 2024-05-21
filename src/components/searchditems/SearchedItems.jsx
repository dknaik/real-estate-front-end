import React from "react";
import "./searchitems.css";
const SearchedItems = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
      ></img>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Freeairport taxi</span>
        <span className="siSubtitle">
          Studio Apartment wit Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio * 1 bathroom * 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtite">
          You can cancell later , so lock in this great price today!
        </span>
      </div>
      <div className="sidetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOpt">Includes taxes and fees</span>
          <button className="siCheckButton">See awailability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchedItems;
