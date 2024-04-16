
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieBestSellers } from '@/cmps/smallCmps/PieBestSellers';
ChartJS.register(ArcElement, Tooltip, Legend);



export function UserDashboard() {

  return (
    <section className='UserDashboard main-container'>

      <section className='basic-stats'>

        <div className='earnings-to-date'>
          <span className='title'>Earnings to date</span>
          <span className='stat'>101,750$</span>
        </div>

        <div className='avg-selling-price'>
          <span className='title'>Avg.selling price</span>
          <span className='stat'>78$</span>
        </div>

        <div className='order-completion'>
          <span className='title'>Order completion</span>
          <span className='stat'>90%</span>
        </div>

        <div className='on-time-delivery'>
          <span className='title'>On-time delivery</span>
          <span className='stat' >97%</span>
        </div>

        <div className='orders-completed'>
          <span className='title'>Orders completed</span>
          <span className='stat'>97%</span>
        </div>

        <div className='earned-in-lest-month'>
          <span className='title'>Earned in lest 30 days</span>
          <span className='stat'>11,750$</span>
        </div>
      </section>
      
      <section className='charts'>
          <PieBestSellers />
      </section>
    </section>
  )

}