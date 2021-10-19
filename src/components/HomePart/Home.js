import React, { Component } from 'react';
import '../../assets/styles/homepart/home.css';

import shadowBackImg from '../../assets/images/homeimages/shadow-back.png';
import cubeBackImg from '../../assets/images/homeimages/cube-back.png';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = props.data;
        // this.selItem = props.selItem;
    }
    
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        // if (this.selItem != nextProps.selItem) {
        //     this.selItem = nextProps.selItem;
        // }
    }


    // changeSize = (value, key) => {
    // this.setState({ [key]: value });
    //      this.callSetBase();
    // }
    // callSetBase () {
    //     setTimeout(() => {
    //         this.props.callSetBase({length:this.state.length, thick:this.state.thick, height:this.state.height, vase:this.state.vase});
    //     }, 0);

    // }
    

    render() {
        
        return (
            <div>
            <div className="home">
                <div className="home-content subpart-content">
                    <div className="left-string home-part">
                        <div className="title">Mobile App Development <br /> & Digital Transformation</div>              
                        <div className="int-line"></div>
                        <div className="description pro-thin" style={{"color":"lightgrey"}}>
                        We are your extended team who keeps digitizing your business and moves the software development and marketing process quickly with latest innovations and smart app systems. 
                        </div>
                        <div className="chat-btn" ><a href="/contact" style={{textDecoration:"none"}}>Lets chat</a></div>
                    </div>
                    <div className="right-webgl home-part" id="rightWebGL">
                        <div id="colorShadow"><img src={""} /></div>
                        <div id="container"><img src={""} /></div>
                    </div>
                </div>
            </div>
            <div className="notice top-tri tri-part">
            <div className="label">Our Services</div>
            <span></span>
         </div>
            </div>
        )
    }
}
  
export default Home;