import { extend } from 'jquery';
import React from 'react';
import ListItem from './list-item';
import '../../assets/styles/services/navbar.css';


class  Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isCarousel : false,
            windowWidth: 0,
            isSticky: false,
            selected: "nav-startup-tab",
            isSidebar: false,
            isStatic: false,
            long: 0
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) =>{
            
        const container = document.getElementById('container-navbar'),
        tab = document.getElementById("tab-navbar-sticky"),
        a = document.getElementById("startup-accelerator"),
        b = document.getElementById("b"),
        c = document.getElementById("c"),
        d = document.getElementById("d"),
        e = document.getElementById("e"),
        f = document.getElementById("f"),
        g = document.getElementById("g"),
        h = document.getElementById("h");
        const sticky = container.offsetTop,
        longA = a.offsetTop - (window.pageYOffset - 340),
        longB = b.offsetTop - (window.pageYOffset - 340),
        longC = c.offsetTop - (window.pageYOffset - 340),
        longD = d.offsetTop - (window.pageYOffset - 340),
        longE = e.offsetTop - (window.pageYOffset - 340),
        longF = f.offsetTop - (window.pageYOffset - 320),
        longG = g.offsetTop - (window.pageYOffset - 340),
        longH = h.offsetTop - (window.pageYOffset - 340);
        
        let selected = "";
        if(longA < 0 || longA > 0)
            selected = "nav-startup-tab";
        if(longB < 0)
            selected = "nav-product-tab";
        if(longC < 0)
            selected = "nav-mobile-tab";
        if(longD < 0)
            selected = "nav-web-tab";
        if(longE < 0)
            selected = "nav-enterprise-tab";
        if(longF < 0)
            selected = "nav-iot-tab";
        if(longG < 0)
            selected = "nav-growth-tab";
        if(longH < 0)
            selected = "nav-software-tab";


        this.setState({selected})
        if(sticky < (window.pageYOffset + 60)){
            tab.classList.add('fixe-tab')
            this.setState({isSticky: true});
        }
        else{
            tab.classList.remove("fixe-tab");
            this.setState({isSticky: false});
        }

        if(selected === "nav-software-tab"){
            this.setState({isStatic: true, isSticky : false});
            tab.classList.remove("fixe-tab");
            tab.classList.add("tab-static");
        }else{
            tab.classList.remove("tab-static");
        }

        this.setState({long: a.offsetTop});
    }

    handleClick = (event) =>{
        const a = document.getElementById("startup-accelerator"),
        b = document.getElementById("b"),
        c = document.getElementById("c"),
        d = document.getElementById("d"),
        e = document.getElementById("e"),
        f = document.getElementById("f"),
        g = document.getElementById("g"),
        h = document.getElementById("h");
        let posVal = 1;
        if(event.target.id === "nav-startup-tab")
            posVal =  a.offsetTop + 360 ; 
        if(event.target.id === "nav-product-tab")
            posVal =  b.offsetTop + 360;
        if(event.target.id === "nav-mobile-tab")
            posVal =  c.offsetTop + 360;
        if(event.target.id === "nav-web-tab"){
            posVal =  d.offsetTop + 360;
            console.log( `pos: ${d.offsetTop} && pa: ${posVal} && ${event.target.id}`)
        }
        if(event.target.id === "nav-enterprise-tab")
            posVal =  e.offsetTop + 360;
        if(event.target.id === "nav-iot-tab"){  
            posVal =  f.offsetTop + 400;
            console.log( `pos: ${f.offsetTop} && pa: ${posVal} && ${event.target.id}`)
        }
        if(event.target.id === "nav-growth-tab")
            posVal =  g.offsetTop + 360;
        if(event.target.id === "nav-software-tab")
            posVal =  h.offsetTop + 360;
        document.documentElement.scrollTop = posVal;
    }
        
    render(){   
        const {selected, isSticky, isStatic} = this.state;
        const nav = 
        <nav id = "tab-navbar-sticky" className = {`tab-sticky`}>
                        <ul  className = {`nav-tab`}  id="nav-tab" >
                            <div onClick = {this.handleClick}
                                id = "nav-startup-tab" className = { `nav-item-bar first ${selected === "nav-startup-tab" ? ` actives`: ``}`}>
                                <div id = "nav-startup-tab"  className="circle"></div>
                                <span id = "nav-startup-tab">Startup Accelerator</span>
                            </div>
                            <div  onClick = {this.handleClick}
                                id = "nav-product-tab"
                                className = { `nav-item-bar ${selected === "nav-product-tab" ? ` actives`: ``}`}>
                                <div id = "nav-product-tab" className="circle"></div>
                                <span id = "nav-product-tab" >Product Design</span>
                            </div>
                            <div onClick = {this.handleClick}
                            id = "nav-mobile-tab" className = { `nav-item-bar ${selected === "nav-mobile-tab" ? ` actives`: ``}`}>
                                <div id = "nav-mobile-tab" className="circle"></div>
                                <span id = "nav-mobile-tab" >Mobile App Development</span>
                            </div>
                            <div onClick = {this.handleClick}
                                id = "nav-web-tab" className = { `nav-item-bar ${selected === "nav-web-tab" ? ` actives`: ``}`}>
                                <div id = "nav-web-tab" className="circle"></div>
                                <span id = "nav-web-tab" >Web Development</span>
                            </div>
                            <div onClick = {this.handleClick}
                                id = "nav-enterprise-tab" className = { `nav-item-bar ${selected === "nav-enterprise-tab"  ? ` actives`: ``}`}>
                                <div id = "nav-enterprise-tab" className="circle"></div>
                                <span id = "nav-enterprise-tab" >Enterprise App Development</span>
                            </div>
                            <div 
                                onClick = {this.handleClick}
                                id = "nav-iot-tab" className = { `nav-item-bar ${selected === "nav-iot-tab" ? ` actives`: ``}`}>
                                <div id = "nav-iot-tab" className="circle"></div>
                                <span id = "nav-iot-tab" >IOT</span>
                            </div>
                            <div 
                                onClick = {this.handleClick}
                                id = "nav-growth-tab" className = { `nav-item-bar ${selected === "nav-growth-tab" ?  ` actives`: ``}`}>
                                <div id = "nav-growth-tab" className="circle"></div>
                                <span id = "nav-growth-tab" >Growth and Digital Marketing</span>
                            </div>
                            <div  
                                onClick = {this.handleClick}
                                id = "nav-software-tab" className = { `nav-item-bar ${selected === "nav-software-tab" ? ` actives`: ``}`}>
                                <div id = "nav-software-tab" className="circle"></div>
                                <span id = "nav-software-tab" >Software Maintenance</span>
                            </div>
                        </ul>
                    </nav>
       
        return(
            <div id = "container-navbar" className = {`container `}>
                {nav}
                <ListItem isSticky = {isSticky} estatico = {isStatic} />
            </div>
        )
    }
}
export default Navbar;