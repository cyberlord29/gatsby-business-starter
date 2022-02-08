import React from 'react'
import facebook from '../../img/facebook.png'
import love from '../../img/love.png'
import youtube from '../../img/youtube.png'
import star from '../../img/star.png'

import { Banner, AboutContainer } from './Testimonial.element'
import { FlexContainer, Header, Underline } from '../../globalStyles'

const Testimonial = () => {
    return (
        <div style={{backgroundColor: "#F7F9FF"}}>
            <Banner style={{ height: "auto" }}>
              <FlexContainer style={{ padding: "2rem 4rem"}}>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px", width: "25%"}}>
                        <img
                            src={star}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>4.9</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              TRUST PILOT RATING
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={facebook}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>5,673</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              FACEBOOK FOLLOWERS
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={love}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>32,696</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              STUDENTS MENTORED
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={youtube}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>2,345</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              YOUTUBE FOLLOWERS
                            </div>
                        </div>
                    </div>
            </FlexContainer>
            </Banner>
            <Banner style={{height: "50px"}}>
            </Banner>
            <AboutContainer style={{padding: "10px", textAlign: "center"}}>
                    <div>
                        <div style={{textAlign: "center", fontSize: "24px"}}>
                            Here's what people say
                        </div>
                    <div id="trustpilot" className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5d5379337341e9000183edcc" data-style-height="24px" data-style-width="100%" data-theme="light">
                    <a href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank" rel="noopener">Trustpilot</a>
                    </div>
                    <div style={{marginTop: "5px"}}>Excellent</div>
                    <a href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank" >
                    <img style={{marginTop: "5px"}} height={50} alt="TrustScore 5 out of 5" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"></img>
                    </a>
                    </div>
            </AboutContainer>
        </div>
    )
}

export default Testimonial
