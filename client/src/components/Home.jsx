import React from 'react'
import Link from 'react-router-dom/Link'
import Hero from './Hero'
import Recent from './Recent'
import Heading from './Heading'
import Location from './Location'
import { awards } from '../data.js'
import './awards.css'
function Home() {
  return (
    <div>
      <Hero />
      <Recent />
      <div>
        <section className='awards padding'>
          <div className='container'>
            <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

            <div className='content grid4 mtop'>
              {awards.map((val, index) => (
                <div className='box' key={index}>
                  <div className='icon'>
                    <span>{val.icon}</span>
                  </div>
                  <h1>{val.num}</h1>
                  <p>{val.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Location/>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to='/contact' className='btn5'>Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home