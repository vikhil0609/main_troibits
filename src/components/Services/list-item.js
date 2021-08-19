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
                    We put in place a strategic plan and create a roadmap for your
                     business and properly research the market and the segment in which
                      you plan to grow your business in. Strategic planning is one of the
                       key services provided by Troibits Infotech. We help startups through
                        analysis, statistics, and strategy. Our customers partner with us to 
                        plan critical steps for their startup business. Our continuous
                         analysis of the market trends and dynamics keeps us alert to changes
                          and developments in different market sectors and we advise you as per that.</p>
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
                    Our well crafted designs and product branding builds the perfect 
                    opportunity to create an interest in your brand and attract your 
                    customers in the first impression. Our product design and app design
                     features are all about providing value to your customers and linking 
                     their needs to product attributes. A good design defines the lifetime
                      of the product and should exceed customer’s expectations. Troibits 
                      helps to create better products that compete on value,
                     satisfy the customer and makes your business operations easy.
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
                    <p>Smartphones are a big part of our lives and businesses
                         now and have become very useful. The power of
                          internet and smart apps fits into the pocket of 
                          anyone who carries a smartphone. With more than 60% 
                          share in the total web traffic worldwide, having a well 
                          developed and designed mobile app increases productivity 
                          and sales in your business. Smart Apps developed by 
                          Troibits and digitization of your business provides value
                           to your customers, builds your brand,
 shares exclusive content and strengthens customer loyalty.  </p>
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
                    Your business needs an attractive and appealing website to increase
                     traffic, build your digital identity and lead to high conversion rates.
                      Getting a responsive marketing ready and SEO friendly website not only
                       brings mobile users onboard but also increases brand visibility on
                        multiple platforms. We make sure your website is developed with 
                        interactive design, attracting customers in the first glance,
                         reflecting your brand and your business idea in the best way
                          possible. Our custom web apps and websites are made as per unique
                           digital marketing strategies for brands looking for flawless web designs.</p>
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
                    With the increasing impact of Internet of Things and advanced mobile
                     devices, businesses are going overboard developing enterprise apps to
                      improve productivity and efficiency. Our smart enterprise apps empower
                       remote workers, sales executives and improves teamwork. Our enterprise
                        apps offer unparalleled real-time insights increasing engagement and
                         sales. We help you transform your business and help it evolve for
                          future growth by developing custom real-time enterprise app systems
                           providing simpler management of information, improved teamwork
                    , simple and easy to use interfaces for your team.
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
                    <div className = 'col title  margin '><h1>Next Gen Technology</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {logoImg}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    We are emerging into the next generation technological advancement 
                    for better business insights, boost efficiency and allow businesses
                     to manage entire operations with our smart apps. With connected 
                     hardware and AI systems we can identify patterns, behaviour and
                      gain much better insights into business operations. Our Next Gen 
                      Tech apps provide seamless buying experience and help customers to
                       interact with products in both virtual and augmented reality 
                       environments. By connecting key processes we help businesses in 
                       boosting efficiency,
                     productivity, asset tracking and smarted business models.</p>
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
                    Innovative and smart growth marketing holds the key to attracting 
                    many clients, customers and generating leads. With the digital era 
                    and rapid growth of online activities, your business needs a productive 
                    and cost effective digital transformation to capitalise and resonate with
                     the young generation and traditional businesses. Troibits helps you 
                     attract your target audience online and successfully thrives your business
                     by creating tons of daily traffic with our growth marketing services and in converting leads to sales.</p>
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
                    Our on demand application and software management services help in 
                    maintaining your enterprise software and apps and we consistently 
                    increase the efficiency of your systems. With the increasing number 
                    of customers and teams, the expectations for value addition and better
                     experience rise and requires more functionalities. We smartly manage 
                     your system upgrades, user interface changes, removal of outdated 
                     features, performance improvements and regular app 
                    update launches to boost your businesses growth and efficiency.</p>
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