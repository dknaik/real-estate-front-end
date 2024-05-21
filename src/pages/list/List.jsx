import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchedItems from "../../components/searchditems/SearchedItems";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location?.state?.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Designation</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (
                <DateRange
                  //   className="date"
                  ranges={date}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  showSelectionPreview={false}
                  onChange={(item) => setDate([item.selection])}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    placeholder={options.adult}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    min={0}
                    type="number"
                    placeholder={options.children}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    min={1}
                    type="number"
                    placeholder={options.room}
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
            <SearchedItems/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
