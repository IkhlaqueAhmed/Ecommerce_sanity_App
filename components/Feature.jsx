import React from 'react'
import {FaTruckFast} from 'react-icons/fa';
import {BsTruck} from 'react-icons/bs'
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {FiHeadphones} from 'react-icons/fi';
import {MdPayment} from 'react-icons/md';

function Feature() {
  return (
    <div className='feature-container'>
        <div className='feature-item'>
        <BsTruck/>
            <div className='feature-desc'>
            <h2 className='title'>Free Shipping</h2>
                <h2 className='f-desc'>Free Shippping On All Order</h2>
            </div>
        </div>
        <div className='feature-item'>
          
        <RiMoneyDollarCircleLine/>
            <div className='feature-desc'>
                <h2 className='title'>Money Guarentee</h2>
                <h3 className='f-desc'>30 Day Money Back</h3>
            </div>
        </div>
        <div className='feature-item'>
          
        <FiHeadphones />
            <div className='feature-desc'>
                <h2 className='title'>Money Guarentee</h2>
                <h3 className='f-desc'>Technical Support 24/7</h3>
            </div>
        </div>
        <div className='feature-item'>
          
        <MdPayment/>
            <div className='feature-desc'>
                 <h2 className='title'>Secure Payment</h2>
                <h3 className='f-desc'>All Cards Accepted</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Feature