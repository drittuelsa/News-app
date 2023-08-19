import React from "react";
import { Header } from "./Header";
import { Footer} from "./Footer";
import { Outlet } from "react-router-dom";
import './style.css';


export const NavBar = () => {

    return(
        <div >
            
            <Header/>
            <Outlet/>
            <Footer/>
         
        </div>
    )
    }