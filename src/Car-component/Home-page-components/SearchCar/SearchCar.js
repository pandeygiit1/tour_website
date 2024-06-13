import React, { useRef, useEffect, useState, useCallback } from "react";
import "./SearchCar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimepickerUI } from "timepicker-ui";
// import { getSourceCityList } from "../../AaxiosApiListener/ApiListener";
// import { generateToken } from "../../AaxiosApiListener/GenerateToken";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
// import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getSearchCarData } from "../../../Actions/SearchCar.action";

function SearchCar() {
  const SourceCities = useSelector(
    (state) => state.SearchCarReducer.SourceCities
  );
  console.log(SourceCities);
  const dispatch = useDispatch();
  const [dropdateTime, setdropdateTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const tmRef = useRef(null);
  const [inputValue, setInputValue] = useState("12:00 PM");
  const testHandler = useCallback(({ detail: { hour, minutes, type } }) => {
    setInputValue(`${hour}:${minutes} ${type}`);
  }, []);
  useEffect(() => {
    if (inputValue === "10:00 PM") {
      alert("You selected 10:00 PM");
    }
  }, [inputValue]);
  useEffect(() => {
    const tm = tmRef.current;
    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();
    tm.addEventListener("accept", testHandler);
    return () => {
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);

  const tmRef2 = useRef(null);
  const [inputValue2, setInputValue2] = useState("12:00 PM");
  const testHandler2 = useCallback(({ detail: { hour, minutes, type } }) => {
    setInputValue2(`${hour}:${minutes} ${type}`);
  }, []);
  useEffect(() => {
    if (inputValue2 === "10:00 PM") {
      alert("You selected 10:00 PM");
    }
  }, [inputValue2]);
  useEffect(() => {
    const tm = tmRef2.current;
    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();
    tm.addEventListener("accept", testHandler2);
    return () => {
      tm.removeEventListener("accept", testHandler2);
    };
  }, [testHandler2]);

  const [sourceCity, setSourceCity] = useState(null);

  useEffect(() => {
    // generateToken().then((resp) => {
    //   if (resp) {
    //     const token = JSON.stringify(resp.data.token);
    //     getSourceCityList(token)
    //       .then((data) => {
    //         setSourceCity(data);
    //       })
    //       .catch((error) => {
    //         console.log("error fetch data from backednd", error);
    //       });
    //   }
    // });
    dispatch(getSearchCarData());
  }, []);
  let pickdate =
    date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    date.getDate();
  let dropdate =
    dropdateTime.getFullYear() +
    "-" +
    parseInt(dropdateTime.getMonth() + 1) +
    "-" +
    dropdateTime.getDate();
  let picktime = inputValue2;
  let droptime = inputValue;

  const [dropdownInputV, setDropdownInputV] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  // const [dropLocatinId  , setDropLocationId] = useState("");
  const [dropdownInputV1, setDropdownInputV1] = useState("");
  const [selected1, setSelected1] = useState("");
  const [open1, setOpen1] = useState(false);
  // const [pickupLocatinId  , setPickupDropLocationId] = useState("");

  let sourceCityName = selected;
  let destCityName = selected1;
  const userData = {
    sourceCityName,
    destCityName,
    pickdate,
    picktime,
    dropdate,
    droptime,
  };

  const [pickLocationclass, setPickLocationclass] = useState("dropdwon");
  const [dropLocationclass, setDropLocationclass] = useState("dropdown1");
  const changeStyle = () => {
    setPickLocationclass("dropdownset");
    setDropLocationclass("dropdownset");
  };

  useEffect(() => {
    const changeStyle1 = () => {
      if (selected1) {
        setPickLocationclass("dropdwon");
      }
      if (sourceCity) {
        setDropLocationclass("dropdown1");
      }
    };
    changeStyle1();
  }, [selected1, sourceCity]);

  return (
    <section className="rn-search-form-big">
      <div>
        <h2 className="title-hading">Search &amp; Book your Car</h2>
      </div>
      <div className="line">
        <div className="colem12">
          <h3 className="Boxtitle"> Pickup Location</h3>
          <div
            onClick={() => setOpen(!open)}
            className={`${pickLocationclass} ${!selected && "dropdowntext"}`}
          >
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : "Pickup Location"}
            <BiChevronDown size={20} className={`${open && "iconrotete"}`} />
          </div>
          <ul className={`ulSection ${open ? "showWindow" : "hideWindow"} `}>
            <div className="dropdownwindow">
              <input
                type="text"
                className="DropdownInput"
                value={dropdownInputV}
                onChange={(e) =>
                  setDropdownInputV(e.target.value.toLowerCase())
                }
                placeholder="Search City"
              />
              <AiOutlineSearch size={18} className="text-gray-700" />
            </div>
            <hr className="hrtag"></hr>
            {SourceCities.map((city) => (
              <li
                key={city?.id}
                className={`dropdownli
										${
                      city?.cityNm?.toLowerCase() === selected?.toLowerCase() &&
                      "dropdownlisection1"
                    }
										${
                      city?.cityNm?.toLowerCase().startsWith(dropdownInputV)
                        ? "dropdownlisection2"
                        : "dropdownlisection3"
                    }`}
                onClick={() => {
                  if (city?.cityNm?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(city?.cityNm);
                    setOpen(false);
                    setDropdownInputV("");
                    // setPickupDropLocationId(city?.id)
                  }
                }}
              >
                {city?.cityNm}
              </li>
            ))}
          </ul>
        </div>
        <div className="colem12">
          <h3 className="Boxtitle"> Drop Location</h3>
          <div
            onClick={() => setOpen1(!open1)}
            className={`${dropLocationclass} ${!selected1 && "dropdowntext"}`}
          >
            {selected1
              ? selected1?.length > 25
                ? selected1?.substring(0, 25) + "..."
                : selected1
              : "Drop Location"}
            <BiChevronDown size={20} className={`${open1 && "iconrotete1"}`} />
          </div>
          <ul className={`ulSection ${open1 ? "showWindow1" : "hideWindow1"} `}>
            <div className="dropdownwindow">
              <input
                type="text"
                className="DropdownInput"
                value={dropdownInputV1}
                onChange={(e) =>
                  setDropdownInputV1(e.target.value.toLowerCase())
                }
                placeholder="Search City"
              />
              <AiOutlineSearch size={18} />
            </div>
            <hr className="hrtag"></hr>
            {SourceCities.map((city) => (
              <li
                key={city?.cityNm}
                className={`dropdownli
										${
                      city?.cityNm?.toLowerCase() ===
                        selected1?.toLowerCase() && "dropdownlisection1"
                    }
										${
                      city?.cityNm?.toLowerCase().startsWith(dropdownInputV1)
                        ? "dropdownlisection2"
                        : "dropdownlisection3"
                    }`}
                onClick={() => {
                  if (city?.cityNm?.toLowerCase() !== selected1.toLowerCase()) {
                    setSelected1(city?.cityNm);
                    setOpen1(false);
                    setDropdownInputV1("");
                    // setDropLocationId(city?.id)
                  }
                }}
              >
                {city?.cityNm}
              </li>
            ))}
          </ul>
        </div>
        <div className="colem12">
          <h3 className="Boxtitle">
            Pickup Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time
          </h3>
          <div className="rn-icon-input">
            <DatePicker
              className="DatePicker"
              id="PickupDate"
              selected={date}
              onChange={(date) => setDate(date)}
            />
            <div className="timepicker-ui" ref={tmRef2}>
              <input
                // type="test"
                className="timepicker-ui-input DatePicker"
                defaultValue={inputValue2}
              />
            </div>
          </div>
        </div>
        <div className="colem12">
          <h3 className="Boxtitle">
            Drop Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Time
          </h3>
          <div className="rn-icon-input">
            <DatePicker
              className="DatePicker"
              id="DropDate"
              selected={dropdateTime}
              onChange={(date) => setdropdateTime(date)}
            />
            <div className="timepicker-ui" ref={tmRef}>
              <input
                type="test"
                className="timepicker-ui-input DatePicker"
                defaultValue={inputValue}
              />
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
          </svg>
        </div>
      </div>
      <div className="text-center">
        {selected && selected1 ? (
          <Link
            className="SearchCarLinkButton"
            to="/cars-search"
            state={{ data: userData }}
            // to={{
            //   pathname: "/cars-search",
            //   state:userData ,
            // }}
          >
            <button className="btn-orange">
              <i className="fas fa-search"></i>
              Find Now
            </button>
          </Link>
        ) : (
          <button onClick={changeStyle} className="btn-orange">
            <i className="fas fa-search"></i>
            Find Now
          </button>
        )}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
        </svg>
      </div>
    </section>
  );
}

export default SearchCar;
