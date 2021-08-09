import React from "react";
import {NavLink} from "react-router-dom";
import logoImg from '../../assets/images/logo.png';
import '../../assets/styles/services/list-item.css';

function ListItem (props){
    const {isPositionFixed, isCarousel, isStatic, estatico, isSticky} = props;
    return (
        <div className = {`list-name-container ${isSticky ? ' stick': estatico ? ' status': ''}`}>
            <div 
            className=
            {`list-item tab-content  py-3 px-3 px-sm-0 d-flex 
             ${isPositionFixed ? ` carou`: ``}`} id="startup-accelerator">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Statup Accelerator</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className= {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="b">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Product Design</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="c">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Mobile App Development</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="d">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Web Development</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="e">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Enterprise App Development</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="f">
                <div className = 'header-list d-flex'>
                    <div className = 'col title  margin '><h1>IOT</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="g">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Growth  Digital Marketing</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="h">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Software Maintenance</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    El día de ayer, 28 de septiembre, por la tarde, los servicios de Microsoft, incluidos Teams, 
                    Outlook y Office 365, 
                    presentaron fallas. Usuarios de diversos países, entre ellos México, Australia, Brasil
                    Estados Unidos y Reino Unido señalaron a través de diversos medios que no podían 
                    acceder a varias de las funciones.De acuerdo con información del sitio DownDetector
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#">Strategy Planning</NavLink>
                        <NavLink className = "nav-Link" to = "#">Market Analysis</NavLink>
                        <NavLink className = "nav-Link" to = "#">Product Reasearch</NavLink>
                        <NavLink className = "nav-Link" to = "#">Company Creation</NavLink>
                        <NavLink className = "nav-Link" to = "#">Funding Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Legal Support</NavLink>
                        <NavLink className = "nav-Link" to = "#">Infrastructure Setuo</NavLink>
                        <NavLink className = "nav-Link" to = "#">HR Support</NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListItem;