import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Beats Prdoucts  All rights reserverd by Ikhlaque Ahmed</p>
      <p className="icons">
        <AiFillInstagram href='https://www.linkedin.com/in/ikhlaque-ahmed-babab020b/' />
        <AiOutlineTwitter />
        <AiFillLinkedin/>
      </p>
    </div>
  )
}

export default Footer