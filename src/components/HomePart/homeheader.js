import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import  '../../assets/styles/header.scss';
import Gradient from "../../assets/images/gradient.png";
import jQuery from 'jquery';

class HomeHeader extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          active :"home",
          isPositionFixed: false,
          isCarousel : false,
          isGradient: true,
      }
      this.addActiveClass = this.addActiveClass.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
   }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
    }

    handleResize = (e) => {
      let isCarousel = null;
      if(window.innerWidth <= 880)
          isCarousel = true;
      else
          isCarousel = false;

      this.setState({isCarousel});
   };

  
  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
      
      jQuery("#Scroll").css("background-color","#0b0b0b")

       if(event.srcElement.body.scrollTop > 100 || document.documentElement.scrollTop > 100  ){
          this.setState({isPositionFixed: true});
          this.setState({isGradient:false});
          console.log(this.state.isGradient)
       }
       else{
          this.setState({isPositionFixed: false});
         this.setState({isGradient:true});
         }
}

    addActiveClass(e){
      const clicked = e.target.id;
      this.setState({active : clicked});
   }



   render(){  
      const {isCarousel} = this.state;
      if(!isCarousel)
         
         return (
            <div id="Scroll" style={{backgroundColor:"transparent"}} className= {`header-wrap${this.state.isPositionFixed ? ' fixed' : ""}`} onScroll = {this.handleScroll}>
               <div className="header">
                  <div className="left-logo">
                     <img className="logo-img" src={logoImg} />
                     <label className="logo-label">Troibits</label>
                  </div>
                  <div className="menu menuA">
                     <NavLink id = "home" className= {`menuA-item ${this.state.active === "home" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/home">
                           Home
                           <div id = "home" className="circle"></div>
                     </NavLink>
                     <NavLink id = "services" className= {`menuA-item ${this.state.active === "services" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/services">
                           Services
                     </NavLink>
            
                     <NavLink id = "company" className= {`menuA-item ${this.state.active === "company" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/company">
                           Company
                     </NavLink>
                     <NavLink id = "work" className= {`menuA-item ${this.state.active === "work" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/work">
                           Work
                     </NavLink>
                     <NavLink id = "contact" className= {`menuA-item ${this.state.active === "contact" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/contact">
                           Contact
                     </NavLink> 
                  </div>
               </div>
            </div>
        );
      else
         return(<div className = 'd-none'></div>)
   }
}
 
export default HomeHeader;
