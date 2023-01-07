import React from "react"
import { list } from "../data.js"
import cover from '../images/list/p-5.png'

const Buy = () => {
  return (
    <div className="container">
    <div className="h1 text-center">Available</div>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { category, location, name, price, type } = val
          return (
            <div className='box pading shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Buy
