import React from 'react';
import '../../assets/styles/contact/contact.css';
import Footer from '../Footer';
import Email from '../../assets/images/media_library/emaillabel.png';
import Phone from '../../assets/images/media_library/phonelabel.png'



function Contact(){

    console.log("in contact");
    return (
        <div className = "row d-flex text-left">
        <div className = "col"><h1><strong>Let’s Build Something
                        <br />Together!</strong></h1>
        </div >
        <div className = "col" ><h3>Design isn’t finished until somebody is using it.
        Let’s build interactive products for<br/> your idea and achieve brilliance together.</h3>
        <br /><br /><br />
        </div >

        <div className = "col">
            <img src={Email} />
            <h6>contact@troibits.com</h6>
            <br />
        </div>

        <div className = "col">
            <img src={Phone} />
            <h6>+91 989 950 0873</h6>
        </div>
    </div>
    );
}

export default Contact;