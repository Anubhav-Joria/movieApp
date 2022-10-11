import React from "react";
import Show from "./Show";

function Shows({ data, handlePreview }) {
  
    return (
        
        <div className="container">
            <div className="row my-4">
            {
                data.map((e)=>{
                    return (
                        <div className="col-md-4 my-3" key={e.show.id}>
                            <Show handlePreview = {handlePreview} e = {e}/>
                          </div>
                      )
                })
            }
            </div>
            
        </div>
  
    )
}

export default Shows;
