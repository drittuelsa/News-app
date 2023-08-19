import React from "react";
import { BsFillTelephoneFill,BsFacebook, BsTwitter, BsInstagram, BsSearch} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {FcGlobe} from "react-icons/fc";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { AuthDetails } from "./AuthDetails";


export function Header(){

    const getnews = useSelector((state) =>{
        return state.news
    })
    // console.log(getnews);

    return(
        <div>
             <header className="header-top-stripe ">
            <div className="container ">
                <div className="row d-flex align-items-center justify-content-between ">

                    <div className="col-2 d-flex small ">
                        <p><BsFillTelephoneFill/></p>
                        <a href="tel:+001234567890" className="link ms-2">+001234567890</a>
                    </div>
            
                    <div className=" col-2 d-flex">
                        <p className="icon ms-3"><BsFacebook/></p>
                        <p className="icon ms-3"><BsTwitter/></p>
                        <p className="icon ms-3"><BsInstagram/></p>                
                    </div>       
                </div>
             </div>  
            </header>

            <header className="header-top">
                <div className="container-xxl">
                    <div className="row ">
                        <div className="col head1">
                        <NavLink to="/" className="logo py-1 ms-2"><FcGlobe/><b>NewsHunt</b></NavLink>
                        </div>
                      
                        <div className="col py-3 box1">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Product"/>
                             <span className="input-group-text"><BsSearch/></span>
                            </div>
                        
                        </div>

                        <div className="col py-3 box2 ">
                        <NavLink to= "login" ><button className="login btn btn-light head2"><b>LOGIN</b></button></NavLink>
                        <NavLink to= "signUp" ><button className="login btn btn-light head2"><b>SIGNUP</b></button></NavLink>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom " >
                <div className="container-xxl ">
                    <div className="row">
                    <div className="col py-3 box1">
                        <NavLink to="/" className="head2" ><b>HOME</b></NavLink>

                        <NavLink to="/" className="head2 ms-3"><b>BUSINESS</b></NavLink> 

                        <NavLink to="/" className="head2 ms-3"><b>TRAVEL</b></NavLink> 
                        
                        <NavLink to="/" className="head2 ms-3"><b>SPORTS</b></NavLink>  

                        <NavLink to="/" className="head2 ms-3"><b>BLOG</b></NavLink>
                        </div>

                        <div className="col py-3 ">
                        <b><AuthDetails/></b>
                        </div>
                       
                        <div className="col py-2 box2">
                        <button class="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>Favorites</b>
                             <span className="badge text-black fs-5">{getnews.length}</span> 
                            </button>

                            {
                                getnews.length ?
                                <div className="dropdown-menu">
                <table className="table">
                  <tr className="text-center">
                    <th>Image</th>
                    <th>Content</th>
                  </tr>
                  {
                    getnews.map((article) =>{
                        return(
                            <>
                    <tr>
                    <td> <img  src={article.urlToImage} style={{width:70, height:50}} alt="image"/> </td>
                    <td> By {article.author} <a href={article.url} >Read more</a></td>
                    </tr>
                            </>
                        )
                        })
                  }
                 
                  </table>
                            
                        </div>:

                
                    <div className="dropdown-menu">
                    <GrClose style={{position:"absolute",right:8}}/>
                     <p className="m-2"> Favorite Article is empty</p>
                     </div>
                }
                </div>

            </div>
            </div> 
            </header>
          
        </div>
    )
}