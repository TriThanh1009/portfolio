import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Layout.css'
import About from "../../Pages/About/About";
import Technical from "../../Pages/Technical/Technical";

const Layout: React.FC = () =>{


    return(
    <div className="store-layout d-flex flex-column">
        <div className="store-header">
            <Header />
        </div>
        <div className="content flex-grow-1 d-flex flex-column">
            <About></About> 
            <Technical></Technical>
        </div>
        <div className="store-footer">
            <Footer />
        </div>
  </div>
    );
}

export default Layout