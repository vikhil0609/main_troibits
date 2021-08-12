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
               <div className="column">
                    <img src={Android} id="Image" />
               </div>
               <div className="column">
                    <img src={Logistics} id="Image"/>
               </div> 
               <div className="column">
                    <img src={Yolo} id="Image"/>
               </div>  
            </div> 
           
            <div className="" id="row">
                <div className="column">
                        <img src={CaptainThug} id="Image" />
                </div>
                <div className="column">
                        <img src={Excursify} id="Image"/>
                </div> 
                <div className="column">
                        <img src={CoinKarts} id="Image"/>
               </div> 
            </div>

            <div className="" id="row">
                <div className="column">
                        <img src={Hospitals} id="Image"/>
                </div>
                <div className="column">
                        <img src={BluePaisa} id="Image"/>
                </div> 
                <div className="column">
                        <img src={Gamerz} id="Image"/>
               </div> 
            </div>

            <div className="col" id="last">
                <h2 style={{color:"white"}}>
                    Want us to craft well designed apps and digitally transform<br/> your business?  
                </h2>
            </div>

            <div className="col">
                <button className="btn">
                    <a href="/contact">Drop us a message</a>
                </button>
            </div>

        </div>
        </div>
    );
}

export default Work;