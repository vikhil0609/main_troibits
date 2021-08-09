import React from 'react';
import '../assets/styles/yolo.css';
import '../assets/styles/common.css';
import jQuery from 'jquery';

import yoloCubeImg        from '../assets/images/yolo-cube.png';
import yoloPhoneImg       from '../assets/images/yolo-phone.png'; //  phone-frame
import yoloPhoneColorImg  from '../assets/images/yolo-phone-color.png'; //  phone-frame
import arrowLeftImg       from '../assets/images/arrow-left.png';
import arrowRightImg      from '../assets/images/arrow-right.png';

const Yolo = () => {
    var selAppItem = "yolo";

    setTimeout(() => {
        clickApp("yolo");
    }, 0);

    function clickApp(str) {
        selAppItem = str;
        jQuery(".app-content-item").removeClass("active");
        jQuery(".app-content-"+str).addClass("active");
    }
    function clickArrow(dir) {
        if (dir == "left") {
            if      (selAppItem == "first") clickApp('third');
            else if (selAppItem == "yolo") clickApp('first');
            else clickApp('yolo');
        }
        else {
            if      (selAppItem == "first") clickApp('yolo');
            else if (selAppItem == "yolo") clickApp('third');
            else clickApp('first');
        }
    }

    return (
        <div className="yolo">
            <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">YOLO</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
                    <div className="arrow-part">
                        <img src={arrowLeftImg} onClick={() => clickArrow('left')}></img>
                        <img src={arrowRightImg} onClick={() => clickArrow('right')}></img>
                    </div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-cube-img" src={yoloCubeImg}></img>
                    <img className="yolo-phone-img" src={yoloPhoneColorImg}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>First app</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Third one</div>
                    </div>
                </div>
            </div>

            <div className="yolo-footer foot-tri tri-part"></div>

               <div className="yolo-projectsheadline">Lorem Ipsum Lorem Ipsum Lorem</div>
                 <div className="yolo-projects-subheading">Our design is a key factor why we are able to create better products as we do a proper ideation, research, planning then create something on a blank piece of paper which stands out and is minimal.</div>
    <div className="yolo-projects-button">Explore More Projects</div>
              
            
        </div>
    );
}

export default Yolo;
