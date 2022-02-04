import React from 'react'
import metric from '../../img/metric.svg'
import alberto from '../../img/alberto1.png'
import andy1 from '../../img/andy1.png'
import andy2 from '../../img/andy2.png'
import middlesex from '../../img/middlesex.jpeg'

import { Banner, AboutContainer } from './About.element'
import { FlexContainer } from '../../globalStyles'

const About = (props) => {
    return (
        <div style={{backgroundColor: "#F7F9FF"}}>
            <Banner style={{ height: "auto" }}>
            <FlexContainer style={{ display: "flex", justifyContent: "center", padding: "0px 0px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "25px 0px"}}>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "2px" }}>
                        <img
                            src={metric}
                            height={50}
                        >
                        </img>
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>86%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "300px", marginTop: "4px"}}>
                        of traders improved their trading after joining London Trading Institute.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",margin: "25px 0px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={metric}
                            height={50}
                        >
                        </img>
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>92%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "300px", marginTop: "4px"}}>
                        of traders believe the membership is a good value.
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "25px 0px"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={metric}
                            height={50}
                        >
                        </img>
                        <div style={{ fontSize: "32px", marginLeft: "10px" }}>98%</div>
                    </div>
                    <div style={{ fontSize: "14px", width: "300px", marginTop: "4px"}}>
                        of traders believe our scans help them come to The market prepared.
                    </div>
                </div>
            </FlexContainer>
            </Banner>
            <Banner></Banner>
            <AboutContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who are the London Trading Institute?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px"}}>
                            We are a Group of Financial Traders that run a Privately Traded Investment Fund in London.<br/><br/>
                            As of right now, the two owners Andy and Alberto manage over $2.5M in funds and trade everything from FX to Crypto to Algorithmic Trading Systems.<br/><br/> 
                            Based either online or in our state of the art offices, we run a variety of programmes so that students can learn directly from Professional Traders.<br/><br/> 
                            Our goal is to bridge the gap between theoretical knowledge and the practical elements required for you to consistently make money in the markets.
                        </div>
                    </div>
                    <div>
                        <img
                            src={andy2}
                            style={{width: "100%"}}
                        >
                        </img>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div>
                        <img
                            src={andy1}
                            style={{width: "100%"}}
                        >
                        </img>
                    </div>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who is Andy Demi?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px"}}>
                        A Trader for 18 years, he’s worked on the Trading Floors at some of the Biggest Banks & Hedge Funds such as J.P. Morgan, Schroders & Barclays Capital.<br/><br/> 
                        Whilst managing a $200M account for a Hedge Fund back in 2015, part of Andy’s job was to teach the Junior Traders how to make more money.<br/><br/>
                        They once made $1.5M in 1 day of trading and their Success uncovered a Passion for Training & Mentoring and this is how LTI was born.<br/><br/>
                        A respected figure within the London Financial District, he has appeared as a guest speaker at Financial Events, TV Shows and Universities.<br/><br/>
                        He is proud to be working in collaboration with Middlesex University to provide course content for one of the modules of their finance degrees.
                        </div>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                            Who are the London Trading Institute?
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px"}}>
                            We are a Group of Financial Traders that run a Privately Traded Investment Fund in London.<br/><br/>
                            As of right now, the two owners Andy and Alberto manage over $2.5M in funds and trade everything from FX to Crypto to Algorithmic Trading Systems.<br/><br/> 
                            Based either online or in our state of the art offices, we run a variety of programmes so that students can learn directly from Professional Traders.<br/><br/> 
                            Our goal is to bridge the gap between theoretical knowledge and the practical elements required for you to consistently make money in the markets.
                        </div>
                    </div>
                    <div>
                        <img
                            src={alberto}
                            style={{width: "100%"}}
                        >
                        </img>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center"}}>
                    <div>
                        <img
                            src={middlesex}
                            style={{width: "100%"}}

                        >
                        </img>
                    </div>
                    <div style={{padding: "50px"}}>
                        <div style={{fontSize: "24px", color:"#172647"}}>
                            Middlesex University
                        </div>
                        <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px"}}>
                        As part of a cohesive partnership between the London Trading Institute and Middlesex University, students from theEconomics and Finance degrees have had the opportunity to learn the core foundational and practical components of Applied Financial Trading. Through our joint mission of helping students fulfil their academic potential, we have been able to help hundreds of students to learn more about Investments and Financial Trading, and in particular the practical skills needed to build a fruitful career in a very demanding industry. We are proud of what we have achieved to date, and we look forward to working together for many more years with our collective goal of enhancing lives through education.
                        </div>
                    </div>
                </FlexContainer>
            </AboutContainer>
        </div>
    )
}

export default About
