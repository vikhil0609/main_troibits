import React from 'react';
import Carousel from '../components/Home/carousel';
import '../assets/styles/home/index.scss';


class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "homepage d-flex">
                <div className = 'homepage-header'>
                    <Carousel/>
                </div>
            </div>
        )
    }
}

export default HomePage;