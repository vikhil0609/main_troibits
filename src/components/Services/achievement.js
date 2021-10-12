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
import Left from "../../assets/images/arrow-left.png"
import Right from "../../assets/images/arrow-right.png"
import jQuery from 'jquery';


const Achievement = () =>{
    var selectItem = "client1"

    function card(item){
        if (item == "client1"){
            jQuery("#client1").fadeIn()
            jQuery("#client2").css("display","none")
            jQuery("#client3").css("display","none")
        }
        
        else if (item == "client2"){
            jQuery("#client2").fadeIn()
            jQuery("#client1").css("display","none")
            jQuery("#client3").css("display","none")
        }
        
        else if (item == "client3"){
            jQuery("#client3").fadeIn()
            jQuery("#client2").css("display","none")
            jQuery("#client1").css("display","none")
        }
    }

    function clickarrow(dir){
        if (dir == "left"){
            if (selectItem == "client1"){
                selectItem = "client3"
            }

            else if (selectItem == "client2"){
                selectItem = "client1"
            }

            else if (selectItem == "client3"){
                selectItem = "client2"
            }

        }
        if (dir == "right"){
            if (selectItem == "client1"){
                selectItem = "client2"
            }

            else if (selectItem == "client2"){
                selectItem = "client3"
            }
            else if (selectItem == "client3"){
                selectItem = "client1"
            }
        }

        card(selectItem)
    }
        return(
        <div className = "achievement-challenges">
            
            <div className = "achievement-titl text-center">
                <div className = ""><h1><strong>Achievements and Challenges</strong></h1></div >
            </div>
            <div>
                <AchievementItems />
            </div>

            <div className = "project">
                <div className = "row d-flex text-center">
                <div className = "col"><h2>Advancing beyond your expectations</h2></div >
                <div className = "col" ><h4>Smart UI and intuitive design is our forte. We customise it for you after proper ideation, research, planning and create something on a blank,
                canvas which stands out, is minimal and uniquely crafted for your business.</h4></div >
                </div>
                <div className = "box d-flex">
                    <NavLink to = "/work" className = "variant">Explore More Project</NavLink>
                </div>
            </div>
            <div className = "client">
                <div className = "client-title text-center">
                    <div className = "col"><strong><h1>Our Clients Love Us</h1></strong></div >
                </div>
                <div id="carouselExampleControls"  className="carousel  carousel-client slide" data-ride="carousel">
                <div className=" inner-client" id="client1" >
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
                <div className=" inner-client" id="client2" style={{display:"none"}}>
                    <div className="d-flex client-item-box active">
                        <div className = "header-client-box d-flex">
                            <div className = "profile-client d-flex">
                                <img src = {Leo}/>
                                <div className = "profile-info">
                                    <h5>Anurag Chandel</h5>
                                    <h6 className = "text-primary">Founder at Bit7pay</h6>
                                </div>
                            </div>
                            <div className = "company-logo">
                                <img src = {partnerIntelImg}/>
                            </div>
                        </div>
                        <div className = "body-client-box d-flex" >
                            <div className = "client-word">
                                <p>
                                    &#10077; we have been working with troibits for more
                                    than 2 years and Customers use our
                                    Cryptocurrency apps everyday  &#10078;
                                </p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className=" inner-client" id="client3" style={{display:"none"}}>
                    <div className="d-flex client-item-box active">
                        <div className = "header-client-box d-flex">
                            <div className = "profile-client d-flex">
                                <img src = {Leo}/>
                                <div className = "profile-info">
                                    <h5>Mandeep Kanwal</h5>
                                    <h6 className = "text-primary">Solution Architect at Glaucus Logistics</h6>
                                </div>
                            </div>
                            <div className = "company-logo">
                                <img src = {partnerIntelImg}/>
                            </div>
                        </div>
                        <div className = "body-client-box d-flex" >
                            <div className = "client-word">
                                <p>
                                    &#10077; We really liked our warehouse Management
                                    System Design and Troibits implemented 
                                    every feature perfectly. 
                                      &#10078;
                                </p>
                            </div>
                        </div>
                   </div>
                </div>
                <a className="carousel-control-prev" role="button" data-slide="prev" onClick={() => clickarrow("left")}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next"  role="button" data-slide="next" onClick={() => clickarrow("right")}>
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

class AchievementItems extends React.Component{
    render(){
        
        var selitem = "bit7"

        function selectItem(item){
            if (item=="bit7"){
                jQuery("#bit7pay").fadeIn()
                jQuery("#yolo").css("display","none")
                jQuery("#glaucus").css("display","none")                
            }
            if (item == "yolo"){
                jQuery("#yolo").fadeIn()
                jQuery("#bit7pay").css('display',"none")
                jQuery("#glaucus").css("display","none")
            }
            if(item == "glaucus"){
                jQuery("#glaucus").fadeIn()
                jQuery("#yolo").css("display","none")
                jQuery("#bit7pay").css("display","none")
            }
        }

        function clickarrow(dir){
            if( dir == "left"){
                if(selitem == "bit7"){
                    selitem = "glaucus"
                }
                else if( selitem == "yolo"){
                    selitem = "bit7";
                }
                else{
                    selitem = "yolo"
                }
            }
            else if(dir == "right"){
                if(selitem =="bit7"){
                    selitem = "yolo"
                }
                else if (selitem == "yolo"){
                    selitem = "glaucus"
                }
                else{
                    selitem = "bit7"
                }
            }
            selectItem(selitem)
        }
        return(
            <div className="item-main">
                <div className="arrow" id="left-arrow" onClick={() =>clickarrow("left")}>
                    <img src={Left} />
                </div>
                <div className="mid" id="bit7pay">
                    <img src={Mockup} />
                    <div>
                    <div className="mid-title">Bit7pay</div>
                    <div className="sub-text">
                        <div className="mid-sub" style={{color:"#0072ff"}}>
                            Cryptocurrency Wallet & Exchange
                        </div>
                        <p>
                            Bit7 pay is Cryptocurrency wallet & Exchange
                            to store Buy and sell Bitcoin,Ethereum,Ripple,
                            Bitcoin Gold and keep all other cryptocurrencies
                            safe.Download Bit7pay on your mobile and get
                            your account verified within hours to make your
                            first investment. We made an easy to use 
                            inteface that allows users to quickly make the 
                            transactions with no latency. Troibits helped
                            Bit7pay to run it's cloud servers on the latest
                            hardware available today
                        </p>
                        <div style={{color:"#0072ff"}}>
                            Android | iOS | Web
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mid" id="yolo" style={{display:"none"}}>
                    <img src={yolo}  />
                    <div>
                    <div className="mid-title">Yolo</div>
                    <div className="sub-text">
                        <div className="mid-sub" style={{color:"#0072ff"}}>
                            Taxi Booking platform
                        </div>
                        <p>
                            Yolo cabs is the smartest way to get around.
                            One tap and a car comes directly to you. Your
                            dirver knows excatly where to go. And you can
                            pay either cash or card. Daily commute.
                            Errand across town. Early morning flight. Late
                            night drinks. wherever you're headed, Count
                            on YoloCabs for a ride -no reservations
                            needed.You can always request everyday cars
                            at everyday prices. But sometimes you need a
                            bit more space. Or you want to go big on style.
                            With YoloCabs, the choice is yours
                        </p>
                        <div style={{color:"#0072ff"}}>
                            Android | iOS
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mid" id="glaucus" style={{display:"none"}}>
                    <img src={glaucus}  />
                    <div>
                    <div className="mid-title">Glaucus Logistics</div>
                    <div className="sub-text">
                        <div className="mid-sub" style={{color:"#0072ff"}}>
                            Warehouse Management System
                        </div>
                        <p>
                            We made a perfect design and UI in Angular Js
                            for Galucus Logistics.They have been founded by
                            a team with exhausitve experience of supple chain
                            solutions,advisory,Warehouse design and
                            technology product development. They are the 
                            preffered supply chain management partner for
                            small and mid-sized companies focusing on trading,
                            retail & wholesale distribution allowing businesses to
                            effectively compete with their larger competitors on 
                            effencies and effectiveness.
                         </p>
                         <div style={{color:"#0072ff"}}>
                             Mac | windows | Web
                         </div>
                        </div>
                    </div>
                </div>
                <div className="arrow" id = "right-arrow" onClick={() =>clickarrow("right")}>
                    <img src={Right} />
                </div>
                
            </div>
        )
}
}
export default Achievement;