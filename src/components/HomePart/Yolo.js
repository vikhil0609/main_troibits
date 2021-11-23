import React from 'react';
import '../../assets/styles/homepart/yolo.css';
import '../../assets/styles/homepart/common.css';
import jQuery from 'jquery';
import yoloPhoneColorImg  from '../../assets/images/homeimages/yolo-phone-color.png'; //  phone-frame
import arrowLeftImg       from '../../assets/images/homeimages/arrow-left.png';
import arrowRightImg      from '../../assets/images/homeimages/arrow-right.png';
import bit7pay from '../../assets/images/homeimages/bit7pay.png';
import skylark from "../../assets/images/homeimages/skylark.png"
import google_play from "../../assets/images/homeimages/google_play.png";
import apple from "../../assets/images/homeimages/apple.png";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


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
                        <div className="vr"></div>
                        <img src={arrowRightImg} onClick={() => clickArrow('right')}></img>
        </div>
            <div className="yolo" id="yolo">
            <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div>
                    <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">YOLO</div>
                    <div className="description">The smartest way to get around</div>
                    <div className="play_image">
                        <img src={google_play}  />
                        <img src={apple} />
                    </div>
                    </div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={yoloPhoneColorImg}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>Skylark</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Bit7Pay</div>
                    </div>
                </div>
            </div>
    </div>
    <div className="yolo" id="first-app">
    <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div>
                <div className="notice-blue">Taxi booking</div>
                    <div className="yolo-title">Skylar</div>
                    <div className="description">North India’s Biggest Poultry Group</div>
                    <div className="play_image">
                        <img src={google_play}  />
                        <img src={apple} />
                    </div>    
                </div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={skylark}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>skylark</div>
                        <div className="app-content-item app-content-yolo" onClick={() => clickApp('yolo')}>Yolo</div>
                        <div className="app-content-item app-content-third" onClick={() => clickApp('third')}>Bit7Pay</div>
                    </div>
                </div>
            </div>
    </div>
    <div className ="yolo" id="third-app">
    <div className="yolo-content subpart-content">
                <div className="yolo-part left-taxi">
                    <div>
                    <div className="notice-blue">Cryptocurrency</div>
                    <div className="yolo-title">Bit7Pay</div>
                    <div className="description">Buy,Sell and Store multiple cryptocurrencies</div>
                    <div className="play_image">
                        <img src={google_play}  />
                        <img src={apple} />
                    </div>
                    </div>
                </div>
                <div className="yolo-part center-img">
                    <img className="yolo-phone-img" src={bit7pay}></img>
                </div>
                <div className="yolo-part right-app">
                    <div className="app-title">App Showcase</div>
                    <div className="app-content">
                        <div className="app-content-item app-content-first" onClick={() => clickApp('first')}>skylark</div>
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
