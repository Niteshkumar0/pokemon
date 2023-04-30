import React, { useEffect, useState } from 'react'
import "../components/po.css"

export default function Detail(props) {
  // let data = props


  return (
   <> 
    
      <ul  className='detailContainer' key={props.id}>
        <img src={props.image} alt=""  className='detailImage'/>
          <div className="detail">
            <li className='detailName  detailInformation'>{props.name}</li>
            <li className='detailWeight detailInformation'> <span className="title"> {!props.weight ? "" : "weight  :"}</span>{props.weight}</li>
            <li className='detailHeight detailInformation'> <span className="title"> {!props.weight ? "" : "height  :"} </span>{props.height}</li>
            <li className='detailAbiity  detailInformation'> <span className="title"> {!props.weight ? "" : "abilities  :"} </span> {props.ability}</li>
            <li className='detailAtribute  detailInformation'> <span className="title"> {!props.atribute ? "" : "Atribute  :"} </span> {props.atribute}</li>
          </div>

      </ul>
   </>
  )
}
