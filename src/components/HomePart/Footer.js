import React from 'react';
import '../../assets/styles/homepart/footer.css';
 
import logoImg from '../../assets/images/homeimages/logo.png';
 
const Footer = () => {
    return (
      <div className="footer-wrap">
         <div className="footer">
            <img className="logo-img" src={logoImg} />
            <label className="logo-label">TROIBITS</label>
            <div className="footer-content">
               <div className="footer-item infoTech">
                     2019 Trobits infotech private limited
               </div>
               <div className="footer-item">
                  Home
               </div>
               <div className="footer-item">
                  Services
               </div>
               <div className="footer-item">
                  Company
               </div>
               <div className="footer-item">
                  Work
               </div>
               <div className="footer-item">
                  Contact
               </div>
            </div>
         </div>
      </div>
    );
}

export default Footer;