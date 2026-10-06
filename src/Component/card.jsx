import React from 'react'
import { RiBookmarkLine } from"@remixicon/react";

const Card = (props) => {

  return (
    <>
   
      <div className="card">
        <div className="top">
          <img src={props.logo}/>
          <button>Save <RiBookmarkLine  size="10px"/></button>
        </div>
        <div className="center">
            <h3>{props.company}  <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'> 
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
           
        </div>
        <div className="bottom">
           
                <div className="location">
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>

        </div>

      </div>

   

    </>
  )
}

export default Card