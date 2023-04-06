import React from "react";
import NavbarLinks from "./NavbarLinks";
// import {Route, Routes} from "react-router-dom";
// import Shop from "./Pages/Shop";
// import Drivers from "./Pages/Drivers";
// import Support from "../../public/Support.html";

function App(){
    return(
        <>
            <NavbarLinks/>
            {/* <Routes>
                <Route exact path="/shop" Component={Shop}/>
                <Route exact path="/drivers" Component={Drivers}/>
                <Route exact path="/support" Component={Support}/>
            </Routes> */}
        </>
    );
}

export default App;