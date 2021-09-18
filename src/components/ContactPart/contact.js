import React from 'react';
import contactstyles from '../../assets/styles/contact/contact.module.css';
import Email from '../../assets/images/media_library/emaillabel.png';
import Phone from '../../assets/images/media_library/phonelabel.png';
import Footer from "../Footer";


class Contact extends React.Component{
    render(){
    return (
        <div className = "row d-flex text-left" id={contactstyles.heading}>
        <div className = {contactstyles.col}><h1><strong>Let’s Build Something 
                        <br /> Together!</strong></h1>
        </div >
        <div  className={contactstyles.col} >
            <div className={contactstyles.contactRect}>
                
            </div>
                <h3 id={contactstyles.contactDesign}>Design isn’t finished until somebody is using it.
                Let’s build interactive products for<br/> your idea and achieve brilliance together.</h3>
        <br /><br /><br />
        </div >



        <div className = {contactstyles.col} id={contactstyles.contactlast}>
            <img src={Email} />
            <h6>contact@troibits.com</h6>
            <img src={Phone} />
            <h6>+91 989 950 0873</h6>
        </div>
    </div>
    );
}
}

export default Contact;