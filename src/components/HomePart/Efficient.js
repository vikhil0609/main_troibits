import React from 'react';
import '../../assets/styles/homepart/efficient.css';
import '../../assets/styles/homepart/common.css';

import backKeyBoardImg    from '../../assets/images/homeimages/back-keyboard.jpg';
import partnerSkypeImg    from '../../assets/images/homeimages/partner-skype.png';
import partnerHpImg       from '../../assets/images/homeimages/partner-hp.png';
import partnerIntelImg    from '../../assets/images/homeimages/partner-intel.png';
import partnerNikeImg     from '../../assets/images/homeimages/partner-nike.png';

const Effcient = () => {
    return (
        <div>
        <div className="efficient">
           <div className="efficient-left">
                <div className="left-head" id="efficient-head">
                    Our Partners
                </div>
                <div className="left-SubText">
                    <img src={partnerNikeImg} className="partnerLogo" />
                   Skype
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" /> 
                    Hewlett-Packard
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" />
                    Intel-crop
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" />
                    Intel
                </div>
           </div>
           <div className="efficient-vrline"></div>
           <div className="efficient-mid">
                <div className="mid-head">
                    About Company
                </div>
                <div className="mid-mid">
                    <h1><strong>Efficient &</strong> </h1>
                    <h1><strong>Trustworthy</strong></h1>
                </div>
                <div className="mid-subText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        eli, sed do eisumod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud execrecitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div>
                    <a href="/contact"><button>Lets Chat</button></a> 
                </div>
           </div>
           <div className="efficient-end">
               <div>
               <div className="end-head">
                   <strong>353</strong>
               </div> 
               <div className="end-subText">
                   <p> Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing </p>
               </div>
               </div>
               <div>
                <div className="end-head">
                    <strong>29</strong>
                </div>
                <div className="end-subText">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing
               </div>
               </div>
           </div>
        </div>
        <div className="notice top-tri tri-part">
         </div>
        <div className="info">

            <h1>Liked Our Designs?</h1>
            <a href="/contact"><button>Drop a message</button></a>
        </div>
        </div>
    );
}
 
export default Effcient;