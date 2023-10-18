import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2,largeText3, saleTime, smallText, midText,midText2, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container" style={{backgroundColor:"#2927c7"}}>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText2}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" style={{ color:"#2927c7"}}>{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner