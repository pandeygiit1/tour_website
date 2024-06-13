import React, { useState } from "react";
import "./sidebarComponent.css";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";
import { MdLibraryAdd } from "react-icons/md";
import { BsFillBookmarkFill, BsPencilSquare } from "react-icons/bs";

const SidebarComponent = () => {
  const [closesidebar, setClosesidebar] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  // const [showContent, setShowContent] = useState(false);
  const [showContent, setShowContent] = useState({});

  const handleClick = (category) => {
    setShowContent({ ...showContent, [category]: !showContent[category] });
  };

  const navigate = useNavigate();

  const arrIcons = [
    <MdLibraryAdd />,
    <BsPencilSquare />,
    <GiOpenBook />,
    <BsFillBookmarkFill />,
  ]; // Add more icons as needed


  const signOutHandler = () => {
    if (window.confirm("Are you sure you want to sign out from Alxtrip?")) {
      localStorage.clear();
      navigate("/admin/login");
    }
  };

  return (
    <div className="leftcontainerbox">
      <div className="responsivetopbar">
        <div
          className="Hembergericons"
          onClick={() => setClosesidebar(!closesidebar)}
        >
          {closesidebar ? <VscThreeBars /> : <AiOutlineClose />}
        </div>
      </div>

      <div className={closesidebar ? "Opensidebar" : "Closesidebar"}>
        <div className="userbox">
          <div className="userprofile"></div>
          <div className="leftcontaineruserImagetext">
            <h3>{userInfo?.name}</h3>
            <p>{userInfo?.emailId}</p>
          </div>
        </div>
        <hr />

        <nav>
          <ul>
            {/* <li className="leftcontainderli">
              <Link className="leftcontainerlink" to="/sidebar">
                <div>{<AiOutlineHome />}</div>
                <div className="leftcontainerlink-home">Home</div>
              </Link>
            </li> */}

            <li>
              <Link className="leftcontainerlink" to="/admin">
                <span className="lnr lnr-inbox"></span>
                <div className="leftcontainerlink-dashboard">Dashboard</div>
              </Link>
            </li>
          </ul>
        </nav>
        {Object.keys(userInfo?.userRoleList || {}).map(
          (category, categoryIndex) => (
            <div key={categoryIndex}>
              {userInfo?.userRoleList[category].length > 0 && (
                <div className="ArticalSection">
                  <div className="artical">
                    <div className="articaltext">
                      <button
                        className="dropdown-toggle dropdowncategory"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded={showContent[category] ? "true" : "false"}
                        onClick={() => handleClick(category)}
                      >
                        {category}
                      </button>
                    </div>
                  </div>
                  {showContent[category] && (
                    <div className="dropdown">
                      {userInfo?.userRoleList[category].map(
                        (menuItem, menuItemIndex) => (
                          <nav key={menuItemIndex}>
                            <ul>
                              <li className="leftcontainderli">
                                <NavLink
                                  className="leftcontainerlink"
                                  to={menuItem.slugUrl}
                                 >
                                  <div>{arrIcons[menuItemIndex]}</div>
                                  <div className="leftcontainerlinkdiv">
                                    {menuItem.screenNm}
                                  </div>
                                </NavLink>
                              </li>
                            </ul>
                          </nav>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        )}

        <hr />
        <div>
          <label onClick={signOutHandler} className="logoutuser">
            <div className="signouticon">
              <CiLogout />
            </div>
            <button className="signoutbtn">Sign Out</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
