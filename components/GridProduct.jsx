import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';


function GridProduct({allBanners}) {
  return (
   
    <div className='grid-banner-container'>
         
        <div className='grid-container'>
          
        {allBanners.map((banner,i)=>(
            <div className={`grid-item item-${i}`} >
                <div className='grid-text'>
                <h3>{banner.discount}</h3>
                <h3 className='midText'>{banner.midText}</h3>
                <h3 className='largeText'>{banner.largeText1}</h3>
                <Link href={`/product/${banner.product}`}>
                <button type="button" className='grid-btn'>Browse</button>
                </Link>
                </div> 
                <div>
                    
                </div>
                <img src={urlFor(banner.image)} alt="headphones" className="grid-banner-image" />
            </div>
        ))
        
            }
       
        </div>
      
    </div>

  )
}

export default GridProduct