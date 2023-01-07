import React from "react"
import Heading from "./Heading"
import {teamData} from './teamData.js'
import "./team.css"
import cover from "../images/customer/team-1.jpg"
import Back from "./Back"
import img from "./pricing.jpg"

const Team = () => {
  return (
    <>
      <Back name='Best Team for you' title='Experts having more than 10 years of Experience.' cover={img} />
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {teamData.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Inspections</button>
                <div className='details'>
                  <div className='img'>
                    <img src={cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <span className="fw-bold">Offie Address:</span>  <label>{val.address}</label>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Take Appoitment
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
