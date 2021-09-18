import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import  '../../assets/styles/header.scss';
import jQuery from 'jquery';

class HomeHeader extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          active :"home" ,
          isPositionFixed: false,
          isCarousel : false
      }
      this.addActiveClass = this.addActiveClass.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
      if(window.location.pathname==="/home"){
         this.setState({active: "home"});}
      else if(window.location.pathname==="/"){
         this.setState({active: "home"});}
      else if (window.location.pathname==="/services"){
         this.setState({active: "services"});}

      else if (window.location.pathname==="/about"){
      this.setState({active: "about"});}
      
      else if (window.location.pathname==="/work"){
      this.setState({active: "work"});}

      else if (window.location.pathname==="/contact"){
      this.setState({active: "contact"});}

      else{
         
      }

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

       if(event.srcElement.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
          this.setState({isPositionFixed: true});
       else  
          this.setState({isPositionFixed: false});
  }

    addActiveClass(e){
      const clicked = e.target.id;
      console.log(clicked);
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
                     <NavLink id = "home"className= {`menuA-item ${this.state.active === "home" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/home">
                           Home
                           <div id = "home" className={`circle ${this.state.active === "home" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "services" className= {`menuA-item ${this.state.active === "services" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/services">
                           Services
                           <div id = "services" className={`circle ${this.state.active === "services" ? "" : " d-none"}`}></div>
                     </NavLink>
            
                     <NavLink id = "company" className= {`menuA-item ${this.state.active === "company" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/company">
                           Company
                           <div id = "company" className={`circle ${this.state.active === "company" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "work" className= {`menuA-item ${this.state.active === "work" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/work">
                           Work
                           <div id = "work" className={`circle ${this.state.active === "work" ? "" : " d-none"}`}></div>
                     </NavLink>
                     <NavLink id = "contact" className= {`menuA-item ${this.state.active === "contact" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/contact">
                           Contact
                           <div id = "contact" className={`circle ${this.state.active === "contact" ? "" : " d-none"}`}></div>
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
