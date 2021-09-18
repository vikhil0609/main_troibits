import React from 'react';
import {NavLink} from "react-router-dom";
import Mockup    from '../../assets/images/Mockup.svg';
import partnerSkypeImg    from '../../assets/images/partner-skype.png';
import partnerHpImg       from '../../assets/images/partner-hp.png';
import partnerIntelImg    from '../../assets/images/partner-intel.png';
import partnerNikeImg     from '../../assets/images/partner-nike.png';
import Leo   from '../../assets/images/lio.jpg';
import '../../assets/styles/services/achievement.css';
import group1 from '../../assets/images/media_library/groupasda.png';
import yolo from "../../assets/images/media_library/152-min.png"
import glaucus from "../../assets/images/media_library/11_Laptop_Mockup-min-min.png"
import jQuery from 'jquery';

function Achievement(){
    var selAppItem = "bit7";

    setTimeout(() => {
        clickApp("bit7");
    }, 0);

    function clickApp(str){
        selAppItem = str;
        if (selAppItem == "bit7"){
            jQuery("#bit7pay").css("display","block");
            jQuery("#yolo").css("display","none");
            jQuery("#glaucus").css("display","none")
        }

        else if(selAppItem == "yolo"){
        jQuery("#yolo").css("display","block");
        jQuery("#bit7").css("display","none");
        jQuery("#glaucus").css("display","none")
        }

        else if (selAppItem == "glaucus") {
            jQuery("#glaucus").css("display","block")
            jQuery("#yolo").css("display","none")
            jQuery("#bit7").css("display","none")
        }
}
    function clickArrow(dir) {
        console.log(dir)
        if (dir == "left") {
            if      (selAppItem == "bit7") clickApp('glaucus');
            else if (selAppItem == "yolo") clickApp('bit7');
            else clickApp('yolo');
        }
        else {
            if      (selAppItem == "bit7") clickApp('yolo');
            else if (selAppItem == "yolo") clickApp('glacus');
            else clickApp('bit7');
        }
    }

    return(
        <div className = "achievement-challenges">
            <div className = "achievement-titl text-center">
                <div className = ""><h1><strong>Achievements and Challenges</strong></h1></div >
            </div>
            <div id="carouselExampleControls" className="carousel carousel-mockup slide" data-ride="carousel">
                <div className="carousel-inner" id="bit7">
                    <div className="d-flex carousel-item puppy active">
                         <img className="d-block w-40" src={Mockup} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">Bit7pay</h3>
                                <h5 className = "sub-title text-primary">Cryptocurrency Wallet</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    Bit7Pay is a Cryptocurrency Wallet & Exchange to store
                                    Buy and Sell Bitcoin, Ethereum, Ripple,Bitcoin Gold and keep
                                    all all other Cryptocurrencies safe. Download Bit7Pay on your mobile and 
                                    get your account verified within hours to make your first investment
                                    . We made an easy to use interface that allows users to quickly make 
                                    the transactions with no latency. Troibits helped Bit7Pay to run its 
                                    cloud servers on the latest hardware available today.
                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                </div>
                
                <div className="carousel-inner" id="yolo">
                    <div className="d-flex carousel-item puppy active">
                         <img className="d-block w-40" src={yolo} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">yolo</h3>
                                <h5 className = "sub-title text-primary">Taxi Booking Platform</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    Yolo cabs is the smartest way to get around.
                                    one tap and a car comes diredctly to you. Your
                                    driver knows exactly where to go. And you can 
                                    pay either cash or card. Daily Commute.
                                    Errand across town. Early morning flight. Late 
                                    night drinks. Wherever you're headed, count 
                                    on YoloCabs for a ride no reservations needed.
                                    you can always request everyday cars at everyday 
                                    prices. But sometimes you need a bit more space. 
                                    Or you want to go big on style. with YoloCabs,
                                    the choice is yours. 

                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                </div>

                <div className="carousel-inner" id="glaucus">
                    <div className="d-flex carousel-item puppy active">
                         <img className="d-block w-40" src={glaucus} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">Glaucus Logistics</h3>
                                <h5 className = "sub-title text-primary">Warehouse Management System</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    We made a perfect design and UI in Angular js
                                    for Glaucus Logistics. They have been founded by 
                                    a team with exhaustive experience of supply chain
                                    solutions, advisory, warehouse design and
                                    technology product development. They are the 
                                    preffered supply chain management partner for 
                                    small and mid-sized companies focusing on terading,
                                    retail & wholesale distribution allowing businesses to
                                    effectively compete with their larger competitors on 
                                    effciency and effectiveness.
                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                </div>
                <a className="carousel-control-prev" onClick={() => clickArrow('left')}  role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only" >Previous</span>
                </a>
                <a className="carousel-control-next" onClick={() => clickArrow('right')} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        
            </div>
            <div className = "project">
                <div className = "row d-flex text-center">
                <div className = "col"><h2>Advancing beyond your expectations</h2></div >
                <div className = "col" ><h4>Smart UI and intuitive design is our forte. We customise it for you after proper ideation, research, planning and create something on a blank,
                canvas which stands out, is minimal and uniquely crafted for your business.</h4></div >
                </div>
                <div className = "box d-flex">
                    <NavLink to = "/work" className = "variant text-primary">Explore More Project</NavLink>
                </div>
            </div>
            <div className = "client">
                <div className = "client-title text-center">
                    <div className = "col"><strong><h1>Our Clients Love Us</h1></strong></div >
                </div>
                <div id="carouselExampleControls"  className="carousel  carousel-client slide" data-ride="carousel">
                <div className=" inner-client">
                    <div className="d-flex client-item-box active">
                        <div className = "header-client-box d-flex">
                            <div className = "profile-client d-flex">
                                <img src = {Leo}/>
                                <div className = "profile-info">
                                    <h5>Lorenzo Zamorano</h5>
                                    <h6 className = "text-primary">Manage at Yolo</h6>
                                </div>
                            </div>
                            <div className = "company-logo">
                                <img src = {partnerIntelImg}/>
                            </div>
                        </div>
                        <div className = "body-client-box d-flex" >
                            <div className = "client-word">
                                <p>
                                    &#10077; Tarun made pixel perfect designs for yolo cabs &#10078;
                                </p>
                            </div>
                        </div>
                   </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
            <div className = "footer-logo-ach">
            <div className="image">
                <img src = {group1} />
            </div>
            </div>
        </div>
    )
}

export default Achievement;