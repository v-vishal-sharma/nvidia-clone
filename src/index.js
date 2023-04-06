import React from "react";
import ReactDOM from "react-dom"
import App from "./Components/App";
import Icons from "./Components/Icons";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("navlinks")
);
ReactDOM.render(<Icons/>,document.getElementById("navlinks-icons"));



