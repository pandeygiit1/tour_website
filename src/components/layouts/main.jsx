import React, { Component } from "react";

import HomePage from "../pages/home/HomePage";
// import Headers from "../common/headers";
// import Footers from "../common/footers";

//default layout
class MainLayout extends Component {

  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log("render main")
    return (
        <>
          
              <HomePage/>
        
        </>
    );
  }
}

export default MainLayout;
