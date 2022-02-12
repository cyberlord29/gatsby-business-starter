import React, { useEffect, useRef, useState } from 'react'
import facebook from '../../img/facebook.png'
import love from '../../img/love.png'
import youtube from '../../img/youtube.png'
import star from '../../img/star.png'

import { Banner, AboutContainer } from './Testimonial.element'
import { Bullet, CarouselBullet, FlexContainer, Header, Underline } from '../../globalStyles'
import { DescriptionContainer, IntroTitle } from '../IntroCard/IntroCard.element'


function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const Testimonial = () => {
    const [carousel, setCarousel] = useState(0);
    const [clicked, setClicked] = useState(3000)
    useInterval(() => {
        setCarousel((carousel + 1)%3);
      }, clicked);
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
                        <div style={{display: "flex", flexDirection: "row", width: "100%", marginTop: "20px", display: "-webkit-inline-box"}}>
                        <a style={{color: "inherit", textDecoration: "none"}} href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank" rel="noopener">

                            {carousel===0 &&  <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Confused trader to a confident trader and investor in Cryptos</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Neet, AUS</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I’ve been following Andy Demi from London Trading Institute online for almost 18 months. I was a struggling trader with no focus or direction. Switching from coach to coach and strategy to strategy losing money continuously and on a quest to find that 1 perfect mentor to help me be a successful trader. So I made the decision and have recently signed up with Andy for one to one coaching. The last 3 months have been the most rewarding 3 months in my 4 years of learning to trade. Andy’s passion and wealth of knowledge is incredible! He is selfless, patient and one thing that really stands out is that he is always the same person. Every time I watch the live shows or have a coaching session he is Calm, focused and so very humble.
                                </DescriptionContainer>
                            </div>
                            }
                            {carousel===1 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Complex trading made simple</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Garry Hartley, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I’ve been LTI for about a year now. Andy has an outstanding ability to explain complex trading in simple terms to all abilities, and the rest of the team like Dan and Ben are just as helpful. The team are able to advance your knowledge of the markets very quickly and are able to teach you market quirks that only traders of the highest level would know. I would strongly recommend them.
                                </DescriptionContainer>
                            </div>
}
                            {carousel===2 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                I've been on my journey with LTI now…</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Gavin Miller, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I've been on my journey with LTI now for around 6 months and started with no knowledge of the FX Market.
The course content is incredibly thorough and the support you get from the LTI team (Andy Demi + Dan Tyler) is brilliant.
Learning with the LTI has been a great experience and have no hesitation in recommending these guys.
                                </DescriptionContainer>
                            </div>}
</a>
                        </div>
                    <div onClick={()=>setClicked(null)}>
                        <CarouselBullet selected={carousel==0} onClick={()=>setCarousel(0)}></CarouselBullet>
                        <CarouselBullet  selected={carousel==1}  onClick={()=>setCarousel(1)}></CarouselBullet>
                        <CarouselBullet   selected={carousel==2} onClick={()=>setCarousel(2)}></CarouselBullet>
                    </div>
                    </div>
            </AboutContainer>
        </div>
    )
}

export default Testimonial
