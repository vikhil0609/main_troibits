import React from 'react';
import styles from "../../assets/styles/companypart/company.module.css"
import Consultant from "../../assets/images/media_library/Group-969-1.png";
import Growth from "../../assets/images/media_library/Group-970-1.png";
import Notch from "../../assets/images/media_library/Group-454.png";
import MainLogo from "../../assets/images/media_library/Group-1190.png"
import TechLogo from "../../assets/images/media_library/Group-491@2x-min.png"
import Header from "../Header";
import  '../../assets/styles/header.scss';
import "../../assets/styles/header.css";
import jQuery from 'jquery';



class Company extends React.Component{

    componentDidMount (){
        window.scrollTo(0,0);
        window.scrollTo({
            top: 10,
            left: 10,
            behavior: 'smooth'
          });
    }

    render(){
        function display_sub_text(Class,number){
            jQuery(Class).css("display","block");
            jQuery(".hello").css("color","black")
            for (var i=1; i<9 ;i++){
                if (i == number){
                    jQuery("#"+number).css({"color":"#0072ff"})
                }
                var item = "#subText"+i
                if (item!= Class){
                    jQuery(item).css("display","none")
                    jQuery("#"+i).css({"color":"white"})
                }
            }
        }

    return (
        <div className={styles.CompanyHead}> 
            <div className={styles.CompanyHeading}>
                <div className={styles.Companyleft}>
                    <strong>
                        <h3>We are</h3>
                        <h1>A <span style={{color:"blue"}}>Creative  </span>
                            Company</h1>
                        <h4 style={{marginBottom:"10px"}}>Delivering interactive experiences
                         and creating new standards</h4>
                         <p>
                         Troibits is an Indian Technology Company that makes 
                         your business and daily life technology enabled by becoming
                          your Technology Partners. From IT Consultation, Product Design
                          , Branding, App Development, Website Development, Digital Marketing
                          , Growth Strategy and Investment, Troibits support and work together
                           to grow and make business ideas successful. With impeccable
                            knowledge of Internet of Things, Business Automation, Content 
                            Management Systems (CMS), Customer Relationship Management (CRM), 
                            Point of Sales Systems (POS), Search Engine Optimization (SEO) , 
                            Marketing Strategy and latest Technology
                          , Troibits has all the aspects of growth covered.
                         </p>
                    </strong>
                    <a href="/contact" style={{textDecoration:"none"}}><button className={styles.CompanyBtn1}>
                        Lets Chat
                    </button></a>
                </div>
            <div className={styles.Companyright}>  
                <h1 style={{color:"blue"}}> What do Do</h1>
                <h5>Startup Acceleration</h5>
                <h5>Mobile App Development</h5>
                <h5>Website Development</h5>
                <h5>Enterprise App Development</h5>
                <h5>Product Design and Branding</h5>
                <h5>Next Gen Technology</h5>
                <h5>Growth Marketing</h5>
                <h5>Maintenance and Support</h5>
            </div>
            </div>
            <div className={styles.Companymid}>
            <div className={styles.Companymid1}>
                <h1>
                    What we stand for
                </h1>
                <h6>
                Troibits focuses on high quality customer experience, satisfaction and honesty. We have the<br />
                confidence in our ability to digitally transform our customer’s lives and business.
                </h6>
            </div>
            <div className={styles.Companymid2}>
                <div className={styles.Image}>
                    <img src={Consultant} id={styles.image} />
                    <h3>Right It Consultant</h3>
                    <h6>We focus on a broad range of activities, like competitive analysis,
                         corporate strategy, operations management,
                         our core value is to tell you what is right for your business.</h6>
                </div>
                <div className={styles.Image} >
                    <img src={Growth} id={styles.image} />
                    <h3>Growth Together</h3>
                    <h6>
                    We partner with like-minded businesses to help improve and 
                    drive efficiency in business processes,
                     operations and believe in growing together.
                    </h6>
                </div>

                <div className={styles.Image} style={{paddingBottom:"10%"}} >
                    <img src={Notch} id={styles.image} />
                    <h3>Top-Notch Apps</h3>
                    <h6>
                    Our best in class mobile and web apps can transform your 
                    customer experience and service,
                     apart from increasing your product sales and business visibility.
                    </h6>
                </div>
            </div>
            </div>
            <div className={styles.Companymid3}>
                <div className ={styles.BackgroundLogo}>
                    <div className={styles.firstBox}>

                    </div>
                    <div className={styles.CompanyBox}>
                        <div className={styles.Data}>
                            <img src={MainLogo} />
                            <h2 style={{color:"blue",paddingBottom:"1%"}}>Our Mission</h2>
                            <h4>"To technically enable business around the globe</h4>
                            <h4>by providing innovative solutions and grow together"</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.CompanyLast}>
                <div className={styles.techLogo}>
                    <img src={TechLogo} alt="TechLogo" />
                </div>
                <div className={styles.Process}>
                    <h1>Our Process</h1>
                    <h6>From idea to product launch, growth and software maintenance. We
                         are determined to provide IT support through complete life cycle of
                          your business.</h6>
                    <ul className={styles.Companyulist}>
                        <li className={styles.Companylist} id="1"  onClick={() => display_sub_text("#subText1","1")}>IP Protection
                            <div className={styles.subText}  id="subText1" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="2"  onClick={() => display_sub_text("#subText2","2")}>Consultant And Research
                        <div className={styles.subText} id="subText2" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="3" onClick={() => display_sub_text("#subText3","3")}>Ideation And Strategic Planning
                        <div className={styles.subText} id="subText3" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="4" onClick={() => display_sub_text("#subText4","4")}>Product Design
                        <div className={styles.subText} id="subText4" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="5" onClick={() => display_sub_text("#subText5","5")}>Agile Deveploment
                        <div className={styles.subText} id="subText5" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="6" onClick={() => display_sub_text("#subText6","6")}>Testing and Quality Assurance
                        <div className={styles.subText} id="subText6" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="7" onClick={() => display_sub_text("#subText7","7")}>Product Launch
                        <div className={styles.subText} id="subText7" style={{display:"none"}}>This is subtext</div></li>
                        <li className={styles.Companylist} id="8" onClick={() => display_sub_text("#subText8","8")}>Growth and Maintenance
                        <div className={styles.subText} id="subText8" style={{display:"none"}}>This is subtext</div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
}

export default Company;