import React from 'react';
import '../../assets/styles/homepart/services.css';
import '../../assets/styles/homepart/common.css';

import panelLogoStrategy  from '../../assets/images/homeimages/panel-logo-strategy.png';
import panelLogoBrand     from '../../assets/images/homeimages/panel-logo-brand.png';
import panelLogoApp       from '../../assets/images/homeimages/panel-logo-app.png';
import panelLogoProduct   from '../../assets/images/homeimages/panel-logo-product.png';
import panelLogoMaintence from '../../assets/images/homeimages/panel-logo-maintence.png';
import panelLogoMarket    from '../../assets/images/homeimages/panel-logo-market.png';
import panelLogoFuning    from '../../assets/images/homeimages/panel-logo-funing.png';
import panelLogoChat      from '../../assets/images/homeimages/panel-logo-chat.png';
import Growth from "../../assets/images/media_library/growth-Marketing.png";
import Startup from '../../assets/images/AssetsTroibits/startup.PNG';
import enterprise from '../../assets/images/AssetsTroibits/enterprise.PNG';
import website from '../../assets/images/AssetsTroibits/website.PNG';
import mobile from '../../assets/images/AssetsTroibits/mobile.PNG';
import maintainance from '../../assets/images/AssetsTroibits/maintainance.PNG';
import nextgen from '../../assets/images/AssetsTroibits/NextGen.PNG';
import productdesign from '../../assets/images/AssetsTroibits/productDesign.PNG';

const Services = () => {
    return (
      <div className="services">
         <div className="notice top-tri tri-part">
            <div className="label">Our Services</div>
         </div>
         <div className="content-wrap">
            <div className="services-content subpart-content">
               <div className="main-title">What we do?</div>
               <div className="main-description"><h6 style={{color:"white"}}>Your search for end-to-end technology partner ends here. 
               We are digitallytransforming businesses with our well designed, easy to use smart apps.</h6>
               </div>
               <div className="panels">
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={Startup}></img>
                        </div>
                        <div className="panel-title">
                           <div>StartUp</div> <div>Acceleration</div>
                        </div>
                        <div className="description">
                        Strategic Planning, Pitch Deck, B2B, B2C Plans, IT Consultation and ROI Management
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
             
                           <img src={mobile}></img>
                        </div>
                        <div className="panel-title">
                           <div>Mobile App</div> <div>Development</div>
                        </div>
                        <div className="description">
                        Android App Development, iOS App Development, Hybrid App Development, Flutter and SaaS
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={website}></img>
                        </div>
                        <div className="panel-title">
                           <div>Website</div> <div>Development</div>
                           {/*meny mation */}
                        </div>
                        <div className="description">
                        React, Angular, WordPress, CMS and Admin Web Apps, Marketing Ready Websites
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={enterprise}></img>
                        </div>
                        <div className="panel-title">
                           <div>Enterprise App</div> <div>Development</div>
                        </div>
                        <div className="description">
                        Sales, Logistics, Inventory and Employee Management, CRM , CMS , POS and SaaS
                        </div>
                     </div>
                  </div>
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={productdesign}></img>
                        </div>
                        <div className="panel-title">
                           <div>Product Design</div> <div>and Branding</div>
                        </div>
                        <div className="description">
                        Branding, Corporate Identity, Logo, Marketing Media, Web and Mobile App Design
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={nextgen}></img>
                        </div>
                        <div className="panel-title">
                           <div>Next Gen</div> <div>Technology</div>
                        </div>
                        <div className="description">
                        AI, AR, VR, ML, Connected Hardware, I.O.T, Automation and Drone Tech
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={Growth}></img>
                        </div>
                        <div className="panel-title">
                           <div>Growth</div> <div>Marketing</div>
                        </div>
                        <div className="description">
                        Digital Marketing Campaigns, Media and Video Production, Social Media Marketing and PR
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={maintainance}></img>
                        </div>
                        <div className="panel-title">
                           <div>Maintainance</div> <div>and support</div>
                        </div>
                        <div className="description">
                        Adaptive Enhancements, Updates, Features and Release Management, Server Migration
                        </div>
                  </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
 
export default Services;