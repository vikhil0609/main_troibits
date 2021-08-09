import React from 'react';
import HeaderServices from '../components/Services/header';
import Navbar from '../components/Services/navbar';
import ListItem from '../components/Services/list-item';
import Industry from '../components/Services/industry';
import Technology from '../components/Services/technology';
import Achievement from '../components/Services/achievement';
import Reason from '../components/Services/reason';
import DropMessage from '../components/Services/drop-message';
import Footer from '../components/Services/footer';
import TabSlider from '../components/Services/tabSlider';
import Sidebar from "../components/sidebar";
import '../assets/styles/services/index.css';

class Services extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCarousel : false,
            windowWidth: 0,
            isPositionFixed: false,
            selected: "nav-startup-tab",
            isSidebar: false,
            isStatic: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        this.handleResize();
    }
  
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
        
    }

    handleScroll = (event) =>{
        let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
       // console.log("fdd: "+document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 284 && document.documentElement.scrollTop <= 4670 )
            this.setState({isPositionFixed: true});
        else  
            this.setState({isPositionFixed: false});

        let isStatic = false;
        if(document.documentElement.scrollTop > 4670)
            isStatic = true;
        else
            isStatic = false;
        this.setState({isStatic});
    }

    handleResize = (e) => {
        let isCarousel = this.state.isCarousel;
        if(window.innerWidth < 1140)
            isCarousel = true;
        else
            isCarousel = false;

        this.setState({isCarousel});

        let isSidebar = null;
        if(window.innerWidth <= 880)
            isSidebar = true;
        else
            isSidebar = false;
  
        this.setState({isSidebar});
    };

    

    render(){   
        const {isCarousel, isPositionFixed, isSidebar, isStatic, selected} = this.state;
        return(
            <div className = "page-wrapper">
                {
                    isSidebar ? (
                        <Sidebar/>
                    ):
                    ""
                }
                <HeaderServices/>
                {isCarousel ? <TabSlider/> : <Navbar isStatic = {isStatic} selected = {selected} isPositionFixed = {isPositionFixed}/>}
                <div className = "industry">
                    <Industry/>
                </div>
                <div className = "technology">
                    <Technology isCarousel = {isCarousel}/>
                </div>
                <div className = "achievement">
                    <Achievement/>
                </div>
                <div className = "reason">
                    <Reason/>
                </div>
                <div className = "drop-message">
                    <DropMessage/>
                </div>
                <div className = "footer">
                    <Footer />
                </div>
                <div className = "sub-footer">
                    <div className = "letf-footer-menu">2019 Troibits Infotech Private limited</div>
                    <div className = "right-footer-menu">
                        <span className = "right-footer-menu-item">Sitemap</span>
                        <span className = "right-footer-menu-item">Term Of Use</span>
                        <span className = "right-footer-menu-item">Privacy Policy</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;