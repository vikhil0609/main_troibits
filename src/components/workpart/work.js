import React from 'react';
import '../../assets/styles/work/work.css'
import Android from '../../assets/images/media_library/Group-977.png'
import Logistics from '../../assets/images/media_library/Group-978.png'
import Yolo from '../../assets/images/media_library/Group-979.png'
import CaptainThug from '../../assets/images/media_library/Group-980.png'
import Excursify from '../../assets/images/media_library/Group-981.png'
import CoinKarts from '../../assets/images/media_library/Group-982.png'
import Hospitals from '../../assets/images/media_library/Group-98332.png'
import BluePaisa from '../../assets/images/media_library/Group-984.png'
import Gamerz from '../../assets/images/media_library/Group-985.png'
import '../../assets/styles/header.scss'

function Work(){
    return(
        <div className="start" >
           <div className = "col" id="workmain"><h1><strong>We <span style={{color:"#0a5de9" }}>Create </span>
                                     Websites and Apps</strong></h1>
            </div>
            <div className="col" id="workmain">
                <h6>
                Our design is a key factor why we are able to create better products as we do a proper research 
                and planning before ideations <br />
                and create something on a blank piece of paper which stands out and is minimal.
                </h6>
                <br/> <br/>

            <div className="" id="row">
               <div className="WorkColumn">
                    <img src={Android} id="Image" />
               </div>
               <div className="WorkColumn">
                    <img src={Logistics} id="Image"/>
               </div> 
               <div className="WorkColumn">
                    <img src={Yolo} id="Image"/>
               </div>  
            </div> 
           
            <div className="" id="row">
                <div className="WorkColumn">
                        <img src={CaptainThug} id="Image" />
                </div>
                <div className="WorkColumn">
                        <img src={Excursify} id="Image"/>
                </div> 
                <div className="WorkColumn">
                        <img src={CoinKarts} id="Image"/>
               </div> 
            </div>

            <div className="" id="row">
                <div className="WorkColumn">
                        <img src={Hospitals} id="Image"/>
                </div>
                <div className="WorkColumn">
                        <img src={BluePaisa} id="Image"/>
                </div> 
                <div className="WorkColumn" >
                    <img src={Gamerz} id="Image"/>
               </div> 
            </div>
            </div>

            <div className="col" id="Worklast">
                <h2 style={{color:"white"}}>
                    Want us to craft well designed apps and digitally transform<br/> your business?  
                </h2>
            </div>

            <div className="col">
            <a href="/contact"> 
                <button className="btn">
                    Drop us a message
                </button>
                </a>
            </div>
        </div>
    );
}

export default Work;