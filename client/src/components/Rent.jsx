import React from "react"
import { list3 } from "../data.js"
import cover from '../images/list/p-4.png'

const Rent = () => {
  return (
    <div className="container">
    <div className="h1 text-center">Available for Rent</div>
      <div className='content grid3 mtop'>
        {list3.map((val, index) => {
          const { category, location, name, price, type } = val
          return (
            <div className='box pading shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span  style={{ background: "#ff98001a" }}>{category}</span>
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

export default Rent
