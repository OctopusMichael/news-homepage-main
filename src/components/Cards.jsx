import React from "react";
/* import retro from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg"
import gaming from "../images/image-gaming-growth.jpg"; */
import Articles from "./Articles";

const Cards = ({data}) => {
  return (
    <>
      <div className="container section-container-one">
        <div className="row section-container-two">
          <div className="col-12 col-md-8">
            <div className="row section-left">
              <div className="col-12">
                <div className="hero-img"/>
            
              </div>
              <div className=" col-12 col-md-6">
               

                <h1>The Bright Future of Web 3.0?</h1>
               
              </div>
              <div className="col-12 col-md-6 ">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="btn"> READ MORE </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 section-right">
            <h1>New</h1>
            <h5> <a href="#">Hydrogen VS Electric Cars</a> </h5>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr />
            <h5> <a href="#">The Downsides of AI Artistry</a></h5>
            <p>
              {" "}
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr />
            <h5><a href="#"> Is VC Funding Drying Up? </a></h5>
            <p>
              {" "}
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
           
          </div>
          <Articles data={data} />
        
        </div>
      </div>
    </>
  );
};

export default Cards;
