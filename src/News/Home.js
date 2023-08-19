import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { AddNews, GetNews } from "./action";
import { Link } from "react-router-dom";
import {FiHeart} from "react-icons/fi";

export function Home(){

    const news = useSelector((state) =>{
        return state.articles
    })

//  console.log(news)

    const dispatch = useDispatch();

   useEffect(() =>{
    dispatch(GetNews(news))
   },[dispatch])

   const send = (e) =>{
        // console.log(e)

    dispatch(AddNews(e))
    }

    return(
        <div> 
            <div className="container mt-2 image">
            <div className="row col-5">
                <h1 className="heading1 mt-5"><b>Trending News</b></h1>
                <h2 className="heading1"><b>Read Now</b></h2>   
            </div>   
            <div> 

            </div>
            </div>

            <div className="container mt-3">
            <div className="row d-flex align-items-center justify-content-center m-auto"> 
           {
            news.map((article, index) =>(
              <div className="col cards ">
                <div className="details">
                <span className="title"><b>{article.title}</b></span>
                </div>
                <div className="image-box"> 
               <img  src={article.urlToImage} style={{width:550, height:350}} alt="image"/> 
                </div>
                <div className="text-muted">
                    {article.description}
                    
                </div>

                <div>  <span>{article.publishedAt}</span> |  BY<span style={{color:"blue"}}> {article.author}</span></div>
                <a href={article.url} >Read More</a>
                <button className="ms-5 btn btn-danger" onClick={()=> send(article)}><FiHeart/></button>
              </div>

              
             
            ))
           }
          </div> 
           
          </div>  

          
        </div>
    )
}