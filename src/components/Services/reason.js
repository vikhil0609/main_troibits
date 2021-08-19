import React from 'react';
import '../../assets/styles/services/reason.css';
import smart_image from "../../assets/images/media_library/Group-1174.png"
import architecture_image from "../../assets/images/media_library/Group-1176-1.png"
import Team_image from "../../assets/images/media_library/Group-1175-1.png"

function Reason(){
    return(
        <div className = "reason-component">
            <div className="notice top-tri tri-part">
                <div className="label d-none">Our Services</div>
            </div>
            <div className = "achievement-titl text-center">
                <div className = "col"><h1><strong>What Make Us Different</strong></h1></div >
            </div>
            <div className = "reason-item d-flex">
                <img className="d-block w-40" src={smart_image} alt="First slide"/>
                <div className = "reason-description d-flex">
                    <div className = "header-reason d-flex">
                        <div className = "title-reason1"><h2>Smart Thinking And Strategy</h2></div>
                    </div>
                    <div className = "reason-text">
                        <div className = "bar"></div>
                            <p className = "text-secondary">
                            Our well planned strategy and agile approach is a crucial component in
                             delivering successful app based systems to growing businesses. Vastly
                              accelerating digital transformation with automation,
                             AI-assistance and well-planned modern applications.
                            </p>
                    </div>
                </div>      
            </div>
            <div className = "reason-item2  d-flex">
                <div className = "reason-description2  d-flex ">
                    <div className = "header-reason2 d-flex ">
                        <div className = "title-reason2"><h2>Architecture And Design</h2></div>
                    </div>
                    <div className = "bar"></div>
                    <div className = "reason-text2">
                            <p className = "text-secondary">
                            We strategically lay the foundation stone before developing
                             any mobile application, enabling us to offer all features,
                              functionalities and interactive user experience that takes 
                              your app into the zone of success and offers
                             the growth prospect for the business to flourish.
                            </p>
                    </div>
                </div>  
                <img className="d-block w-40" src={architecture_image} alt="First slide"/>    
            </div>
            <div className = "reason-item d-flex">
                <img className="d-block w-40" src={Team_image} alt="First slide"/>
                <div className = "reason-description d-flex">
                    <div className = "header-reason d-flex">
                        <div className = "title-reason2"><h2>Still Thinking</h2></div>
                    </div>
                    <div className = "bar"></div>
                    <div className = "reason-text">
                            <p className = "text-secondary">
                            Adding value to your business and customers requires speed and 
                            flexibility. Our multidisciplinary teams work together, side by 
                            side and throughout the process. Open communication, combined 
                            with efficient and effective deliveries results in our well
                             developed apps to meet your business and customer expectations.
                            </p>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default Reason;