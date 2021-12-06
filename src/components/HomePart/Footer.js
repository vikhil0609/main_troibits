import React from 'react';
import '../../assets/styles/homepart/footer.css';
 
import logoImg from '../../assets/images/logo.png';
 
const Footer = () => {
    return (
      <div className="footer-wrap">
         <div className="footer">
            <div>
            <img className="logo-img" src={logoImg} />
            </div>
             <div className="footer-content">
               <div className="footer-item infoTech">
                     2021 Trobits infotech private limited
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