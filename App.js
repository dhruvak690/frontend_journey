import React from "react";
import  ReactDOM  from "react-dom/client";

//const heading = React.createElement("h1",{id:"heading"},"first step");

const jsxheading = (<h1 className="head" tabIndex="5">First Step</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
