import React from 'react';
import ListItem from './list-item';
import '../../assets/styles/services/tabSlider.css';


class TabSlider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            isPositionFixed: false,
            selected: ""
        }
        this.setIncrementCount = this.setIncrementCount.bind(this);
        this.setDecrementCount = this.setDecrementCount.bind(this);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this);  
        this.handleClick = this.handleClick.bind(this);  
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    setIncrementCount(){
        let count = this.state.count + 1;
        if(count > 2)
            count = 0;
        this.setState({count});
    }
    
    setDecrementCount(){
        let count = this.state.count - 1;
        if(count < 0)
            count = 2;
        this.setState({count});
    }

    addActiveClass(event){
        const clicked = event.target.id;
        console.log(clicked);
        this.setState({active : clicked});
        const a = document.getElementById("startup-accelerator"),
        b = document.getElementById("b"),
        c = document.getElementById("c"),
        d = document.getElementById("d"),
        e = document.getElementById("e"),
        f = document.getElementById("f"),
        g = document.getElementById("g"),
        h = document.getElementById("h");
        let posVal = 1;
        if(event.target.id === "item-0-1")
            posVal =  a.offsetTop - 160 ; 
        if(event.target.id === "item-0-2")
            posVal =  b.offsetTop - 160;
        if(event.target.id === "item-0-3")
            posVal =  c.offsetTop - 160;
        if(event.target.id === "item-1-1"){
            posVal =  d.offsetTop - 160;
            console.log( `pos: ${d.offsetTop} && pa: ${posVal} && ${event.target.id}`)
        }
        if(event.target.id === "item-1-2")
            posVal =  e.offsetTop - 160;
        if(event.target.id === "item-1-3"){  
            posVal =  f.offsetTop - 180;
            console.log( `pos: ${f.offsetTop} && pa: ${posVal} && ${event.target.id}`)
        }
        if(event.target.id === "item-2-1")
            posVal =  g.offsetTop - 160;
        if(event.target.id === "item-2-2")
            posVal =  h.offsetTop - 160;
        document.documentElement.scrollTop = posVal;
    }

    handleScroll = (event) =>{
            
        const container = document.getElementById('slider-container'),
        tab = document.getElementById("tab-slider"),
        a = document.getElementById("startup-accelerator"),
        b = document.getElementById("b"),
        c = document.getElementById("c"),
        d = document.getElementById("d"),
        e = document.getElementById("e"),
        f = document.getElementById("f"),
        g = document.getElementById("g"),
        h = document.getElementById("h");
        const sticky = container.offsetTop,
        longA = a.offsetTop - (window.pageYOffset + 240),
        longB = b.offsetTop - (window.pageYOffset + 180),
        longC = c.offsetTop - (window.pageYOffset + 180),
        longD = d.offsetTop - (window.pageYOffset + 180),
        longE = e.offsetTop - (window.pageYOffset + 180),
        longF = f.offsetTop - (window.pageYOffset +  200),
        longG = g.offsetTop - (window.pageYOffset + 180),
        longH = h.offsetTop - (window.pageYOffset + 180);
        
        let selected = "";
        if(longA < 0 || longA > 0)
            selected = "item-0-1";
        if(longB < 0)
            selected = "item-0-2";
        if(longC < 0)
            selected = "item-0-3";
        if(longD < 0)
            selected = "item-1-1";
        if(longE < 0)
            selected = "item-1-2";
        if(longF < 0)
            selected = "item-1-3";
        if(longG < 0)
            selected = "item-2-1";
        if(longH < 0)
            selected = "item-2-2";

        if(selected === "item-0-1" || selected === "item-0-2" || selected === "item-0-3")
            this.setState({count: 0});
        else if(selected === "item-1-1" || selected === "item-1-2" || selected === "item-1-3")
            this.setState({count: 1});
        else if(selected === "item-2-1" || selected === "item-2-2" || selected === "item-2-3")
            this.setState({count: 2});

        console.log(` offsetTop: ${b.offsetTop} && pageYOffet: ${window.pageYOffset}`)
        this.setState({selected})
        if(sticky < (window.pageYOffset + 60)){
            tab.classList.add('fixe-slider')
            this.setState({isSticky: true});
        }
        else{
            tab.classList.remove("fixe-slider");
            this.setState({isSticky: false});
        }

        if(selected === "item-2-2"){
            this.setState({isStatic: true, isSticky : false});
            tab.classList.remove("fixe-slider");
            tab.classList.add("slider-static");
        }else{
            tab.classList.remove("slider-static");
        }

        this.setState({long: a.offsetTop});
    }

    handleClick = (event) =>{
        
    }

    render(){
        return(
            <div id = "slider-container" className = "slider-container">
                <div id = "tab-slider"  className = {`tab-slider `}>
                    <div  className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div id = "item-0" className={`carousel-item tab-slider-item ${this.state.count === 0 ? ` active` : ``}`}>
                                <span onClick = {this.addActiveClass}  id = "item-0-1" className = {`d-block ${this.state.active === `item-0-1` ? ` active` : this.state.selected === "item-0-1" ? ` active` : `` }`}>Startup Accelerator</span>
                                <span  onClick = {this.addActiveClass} id = "item-0-2" className = {`d-block ${this.state.active === `item-0-2` ? ` active` : this.state.selected === "item-0-2" ? ` active` : `` }`}>Product Design</span>
                                <span  onClick = {this.addActiveClass} id = "item-0-3" className = {`d-block ${this.state.active === `item-0-3` ? ` active` : this.state.selected === "item-0-3" ? ` active` : `` }`}>Mobile App Development</span>
                            </div>
                            <div id = "item-1" className={`carousel-item tab-slider-item ${this.state.count === 1 ? ` active` : ``}`}>
                                <span  onClick = {this.addActiveClass} id = "item-1-1" className = {`d-block ${this.state.active === `item-1-1` ? ` active` : this.state.selected === "item-1-1" ? ` active` : `` }`}>Web Development</span>
                                <span  onClick = {this.addActiveClass} id = "item-1-2" className = {`d-block ${this.state.active === `item-1-2` ? ` active` : this.state.selected === "item-1-2" ? ` active` : `` }`}>Enterprise App Development</span>
                                <span  onClick = {this.addActiveClass} id = "item-1-2" className = {`d-block ${this.state.active === `item-1-3` ? ` active` : this.state.selected === "item-1-3" ? ` active` : `` }`}>IOT</span>
                            </div>
                            <div id = "item-2" className={`carousel-item tab-slider-item ${this.state.count === 2 ? ` active` : ``}`}>
                                <span  onClick = {this.addActiveClass} id = "item-2-1" className = {`d-block ${this.state.active === `item-2-1` ? ` active` : this.state.selected === "item-2-1" ? ` active` : `` }`}>Growth and Digital Marketing</span>
                                <span  onClick = {this.addActiveClass} id = "item-2-2" className = {`d-block ${this.state.active === `item-2-2` ? ` active` : this.state.selected === "item-2-2" ? ` active` : `` }`}>Software Maintenance</span>
                                <span  onClick = {this.addActiveClass} id = "item-2-2" className = {`d-block ${this.state.active === `item-2-3` ? ` active` : this.state.selected === "item-2-3" ? ` active` : `` }`}>Lorem Ipsum Ip</span>
                            </div>
                        </div>
                        <div onClick = {this.setDecrementCount} className="carousel-control-prev"  role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </div>
                        <div onClick = {this.setIncrementCount} className="carousel-control-next"  role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </div>
                    </div>
                </div>
                <ListItem/>
            </div>
        )
    }
}
export default TabSlider;