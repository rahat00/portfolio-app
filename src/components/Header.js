import React from 'react'
import Typist from 'react-typist';
import Typical from 'react-typical'
import '../App.css'
import { Link } from 'react-router-dom';

export default function Header() {



  return (
    <>
      <div className="head-main">

        <div className="head-txt">
          <div className="txt">
            <span> get every single solutions. </span>
            <Typist >
              
              <h1>I'm Desinger and <br /> web  developer <br />
                <span> Mir Rahat</span></h1>
            </Typist>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam deserunt sint molestias nisi ipsa eos veritatis fuga omnis deleniti ullam q</p>
            <div className=" ">
              <button className="btn btns btn-danger btn-outline">Learn More</button>
             <Link to="/hireus" >
               <input type="button" className="btn btns btn-outline-dark" value="hire me" />
              </Link>
            </div>

          </div>
        </div>

        <div className="head-img">
         
            <img src= "../images/rahat.png" />
            
          
        </div>

      </div>
    </>
  )
}
