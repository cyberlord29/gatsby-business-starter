import React from 'react'
import { Layout ,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/alberto1.png'
import algo from '../img/algorithms.jpg'
const Mentors = () => {
    return(
        <FlexContainer style={{padding: "0px 40px"}}>
            <img
                style={{borderRadius: "6px"}}
                src={andy1}
                height={180}
            >
            </img>
            <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{flexDirection: "column", marginLeft: "20px",flexBasis: "70%", padding: "10px"}}>
                    <div style={{fontSize: "24px",padding: "12px 0px"}}>
                        Alberto Pallotta
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        Founder & Senior Quantitative Trader
                        <br/>
                        <br/>
                      </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    Alberto started his trading career within the financial industry 17 years ago, beginning by trading stocks; through his tenure in the industry he has achieved some incredible feats. Alberto is an engineering graduate, possessing a Masters in Financial Mathematics, and is a Fitch Certified Quant.
                    </div>
                  </div>
            </div>
        </FlexContainer>
    )
}

const Syllabus = () => {
    return(
        <>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 1
                </IntroTitle>
                <div>
                <IntroTitle style={{fontSize: "28px"}}>
                    Begin Your Trader Training
                </IntroTitle>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Find out what it takes to become our next Associate Trader via our online video’s presented by Head Trader Andy Demi.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Get access to LIVE weekly Coaching and our private Elite Traders Club to ask any of your questions & super charge your learning.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Learn the skills required to have the confidence to start taking trades differently than 95% of the current retail trading market.
                </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 2
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
                        Create Your Plan
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> By Now you’ll know how to identify Money Making Opportunities.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/>  You’ll also know how to Manage Your Risk just like a Pro Trader.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> Now it’s time to Create Your Trading Plan & Refine Your Trades.
                    </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 3
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
                        Putting It All Together
                    </IntroTitle>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Strategy
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        You will now understand what it takes to find Low Risk, High Probablity trade set-ups.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Taking Action
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                        Your new knowledge of the markets will give you everything that you need to trade with confidence.
                    </DescriptionContainer>
                    <IntroTitle style={{fontSize: "20px", marginTop: "20px"}}>
                        <Bullet/> Become A Trader
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", paddingLeft: "20px"}}>
                    Continue building your momentum & get access to our Capital Growth Programme with funding up to $2M
                    </DescriptionContainer>
                </div>
            </FlexContainer>
        </>
    )
}

const OverView = () => {
    return(
        <>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
                About this Course
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            This programme is designed to teach you how to build your own trading systems with the guidance of your tutor.<br/>
            This is not a course teaching technically difficult coding. In fact, quite contrary to this, the course was specifically designed for anyone to be able to use and build systems. <br/>
            The course will cover various important areas including how to back test strategy ideas, strategy implementation, coding your own indicators and portfolio optimasation. <br/>
            Included in the programme are 3 successful trading systems with open code so you can learn how these we’re put together and how to optimise them for different conditions.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
              The Course is tailored to fit into even the busiest of schedules.<br/>
              We will provide:
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "30px"}}>
              <Bullet/>3 hours of teaching per week for 3 months online.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>1-hour Q and A session per week
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>2 hours of pre-recorded classes per week
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px", marginBottom: "40px"}}>
              <Bullet/>Ongoing Support from your teacher
            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
        Algorithmic trading or quantitative trading involves the usage of statistics & programming into trading.
        </CourseBanner>
        <div style={{padding: "0px 40px", marginTop: "30px"}}>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Developing Algorithmic Trading Strategies is different to traditional trading methods. The focus is on developing trading systems which follow a logical sequence of rules, removing the discretionary aspect of trading entirely. It circumvents traditional issues arising from human trading psychology, which is one of the biggest factors for why traders fail.<br/><br/>
            Though Systematic Trading has been around for decades, the ability to process information and react much quicker than a human can, as well as the ability for a system to follow a defined set of instructions for placing trades, means that Systematic Trading is widely regarded as the wave of the future.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            Why Should a Trader Learn Quantitative Trading?
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Currently, Algorithmic Trading is more frequently used by big institutions and professional traders, but the rise in machine-learning and Artificial Intelligence has supercharged its capabilities and has only increased its popularity immensely – a trend, we believe, is only likely to continue to increase as the marriage of Systematic Trading and Artificial Intelligence and machine-learning becomes more mainstream.<br/><br/>
            At London Trading Institute, we give you the rare and unique opportunity to learn directly from a Certified Quant, Alberto Pallotta, who has the knowledge, passion, experience and a verified track record within this sphere. He has developed over one hundred Algorithmic Trading Strategies which he uses to manage his personal multi-million pound account.
            </DescriptionContainer>
        </div>
        <CourseBanner style={{padding: "20px 20px"}}>
          Perfect for students or professionals who are new to the domain of quantitative trading
        </CourseBanner>
        <div style={{padding: "0px 40px", marginTop: "30px"}}>
        <DescriptionContainer  style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
        If you want to have access to ready-made trading systems which we ourselves use to trade profitably, as well as the knowledge to develop your own trading systems, book your free consultation today to discuss this opportunity and see if algorithmic trading is for you
        </DescriptionContainer>
        </div>
    </>
    )
}

const IndexPage = () => {
    return (
        <Layout>
            <IntroCardCoursePage img={algo} title={'Algorithmic Trading Course'} description={'Learn how to build automated trading systems'}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                    // syllabus={<Syllabus/>}
                >
                </CourseItem>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
