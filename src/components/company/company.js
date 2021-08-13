import React from 'react';
import '../../assets/styles/companypart/company.css'
import Notch from '../../assets/images/media_library/Group-454.png'
import Consultant from '../../assets/images/media_library/Group-969-1.png'
import Growth from '../../assets/images/media_library/Group-970-1.png'
import Mid3 from "../../assets/images/media_library/Group-972-1-min.png"
import Box from "../../assets/images/media_library/Group-971-1.png"
import lastLogo from "../../assets/images/media_library/Group-491@2x-min.png"

function Company(){
    return(
        <div >
            <div className="CompanyHead">
            <div className="CompanyHeading">
            <div className="Companyleft">
                <strong>
                    <span>
                        <h4>We are</h4>
                    </span>
                        <h1>A <span style={{color:"Blue"}}>Creative </span> Company</h1>
                        <h4>Delivering interactive experiences and creating new standards</h4>
                        <p>Troibits is an Indian Technology Company that makes your business and daily life technology 
                        enabled by becoming your Technology Partners. From IT Consultation, Product Design, 
                        Branding, App Development, Website Development, Digital Marketing, Growth Strategy and Investment, 
                        Troibits support and work together to grow and make business ideas successful. 
                        With impeccable knowledge of Internet of Things, Business Automation, 
                        Content Management Systems (CMS), Customer Relationship Management (CRM), Point of Sales Systems (POS),
                         Search Engine Optimization (SEO) , 
                        Marketing Strategy and latest Technology , Troibits has all the aspects of growth covered.</p>
                </strong>
                <button className="button1-company">Lets Chat</button>
            </div>

            <div className="Companyright">
                <strong>
                    <br /><br />
                    <h2>What do we do</h2>
                    <h4>Startup Acceleration</h4>
                    <h4>Mobile App Development</h4>
                    <h4>Website Development</h4>
                    <h4>Enterprise App Development</h4>
                    <h4>Product Design and Branding</h4>
                    <h4>Next Gen Technology</h4>
                    <h4>Growth Marketing</h4>
                    <h4>Maintenance and Support</h4>
                
                </strong>
            </div>
            </div>
            <div className="CompanyMid1">
                <h1 style={{color:"White"}}>What we stand for</h1>
                <h6>Troibits focuses on high quality customer experience, satisfaction and honesty. We have the</h6>
                <h6>confidence in our ability to digitally transform our customer’s lives and business.</h6>
            </div>

            <div className="CompanyMid2">
                <div className="image" >
                    <img src={Consultant} id="imageId" />
                    <h4>Right IT Consultation</h4>
                    <div className="CompanySub">
                    We focus on a broad range of activities, like competitive analysis, 
                        corporate strategy, operations management
                        , our core value is to tell you what is right for your business.
                    </div>         
                </div>

                <div className="image">
                    <img src={Growth} id="imageId"/>
                    <h4>Growing Together</h4>
                    <div className="CompanySub">
                        We partner with like-minded businesses to help improve and drive efficiency in business processes
                        , operations and believe in growing together
                    </div>
                </div>
                
                <div className="image">
                    <img src={ Notch} id="imageId"/>
                    <h4>Top-Notch Apps</h4>
                    <div className="CompanySub">
                    Our best in class mobile and web apps can transform your customer experience and service,
                         apart from increasing your product sales and business visibility
                    </div>
                </div>
            </div>
            </div>
            
            <div className="CompanyMid3">
                <div className="CompanyBox">

                </div>
            </div>
            <div className="CompanyLast">
                <div className="techLogo">
                    <img src={lastLogo}/>
                </div>

                <div className="process">
                    <h1 style={{fontSize:"3vw"}}>Our Process</h1>
                    <h6>From idea to product launch, growth and software maintenance. We are determined to provide
                         IT support through complete life cycle of your business.</h6>
                    <ul>
                        <li>IP Protection</li>
                        <li>Consultation And Research</li>
                        <li>Ideation And Strategic Planning</li>
                        <li>Product Design</li>
                        <li>Agile Development</li>
                        <li>testing And Quality Assurance</li>
                        <li>Product Launch</li>
                        <li>Growth And Maintainance</li>
                    </ul>
                </div>

            </div>
            </div>
    );
}


export default Company;