import React from 'react';
import '../../assets/styles/homepart/yolo.css';
import '../../assets/styles/homepart/common.css';
import jQuery from 'jquery';

import yoloCubeImg        from '../../assets/images/homeimages/yolo-cube.png';
import yoloPhoneImg       from '../../assets/images/homeimages/yolo-phone.png'; //  phone-frame
import yoloPhoneColorImg  from '../../assets/images/homeimages/yolo-phone-color.png'; //  phone-frame
import arrowLeftImg       from '../../assets/images/homeimages/arrow-left.png';
import arrowRightImg      from '../../assets/images/homeimages/arrow-right.png';
import bit7pay from '../../assets/images/homeimages/bit7pay.png';

const Yolo = () => {
    var selAppItem = "yolo";

    setTimeout(() => {
        clickApp("yolo");
    }, 0);

    function clickApp(str) {
        selAppItem = str;
        jQuery(".app-content-item").removeClass("active");
        jQuery(".app-content-"+str).addClass("active");
        if (selAppItem == "yolo"){
            jQuery("#yolo").css("display","block");
            jQuery("#first-app").css("display","none");
            jQuery("#third-app").css("display","none");
        } 

        else if (selAppItem == "first"){
            jQuery("#yolo").css("display","none");
            jQuery("#third-app").css("display","none");
            jQuery("#first-app").css("display","block");
        }

        else if (selAppItem == "third"){
            jQuery("#third-app").css("display","block");
            jQuery("#first-app").css("display","none");
            jQuery("#yolo").css("display","none");
        }

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
        <div className="main">
            <div className="arrow-part">
                        <img src={arrowLeftImg} onClick={() => clickArrow('left')}></img>
                        <img src={arrowRightImg} onClick={() => clickArrow('right')}></img>
        </div>
            <div className="yolo" id="yolo">
            <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">YOLO</div>
                    <div className="description">The smartest way to get around</div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={yoloPhoneColorImg}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>Skylar</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Bit7Pay</div>
                    </div>
                </div>
            </div>
    </div>
    <div className="yolo" id="first-app">
    <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">Skylar</div>
                    <div className="description">North India’s Biggest Poultry Group</div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={yoloPhoneColorImg}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>skylar</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Bit7Pay</div>
                    </div>
                </div>
            </div>
    </div>
    <div className ="yolo" id="third-app">
    <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div className="notice-blue">Cryptocurrency</div>
                    <div className="yolo-title">Bit7Pay</div>
                    <div className="description">Buy,Sell and Store multiple cryptocurrencies</div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={bit7pay}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>skylar</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Bit7Pay</div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    );
}

export default Yolo;
