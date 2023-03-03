import React from "react";

const Articles = ({ data }) => {
  console.log(data);

  return (
    <>
              

                
      {data &&
        data.map((element) => {
          return (
            <div key={element.id} className="col-12 col-md-4 section-articles">
            <div className=" col-8 col-md-4 ">
              <div >
                <div className={element.section} />
              </div>
            </div>
            <div className=" col-8 col-md-8 section-article-right">
              <div>
                <h2>{element.id}</h2>
                <h5> <a href="#">{element.title}</a> </h5>
                <p> {element.comment}</p>
              </div>
            </div>
          </div>
 
          );
        })}

          
      
    </>
  );
};

export default Articles;
