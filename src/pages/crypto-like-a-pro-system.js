import React from 'react'
import {IntroCard, About, Layout, Courses,Testimonial, Booking, IntroCardCoursePage, CourseItem } from '../components'
import { Banner, CourseBanner } from '../components/Courses/Courses.elements'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer } from '../globalStyles'
import andy1 from '../img/andy1.png'

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
                        Andy Demi
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        CEO | Head Trader
                        <br/>
                        <br/>
                      </div>
                    <div style={{fontSize: "14px",padding: "0px 0px", color: "#4B586A", fontWeight: "normal"}}>
                    A Trader for 17 years, he’s worked on the Trading Floors at some of the Biggest Banks & Hedge Funds such as J.P. Morgan, Schroders & Barclays Capital. He will have your back and teach you about how to trade like a pro.
                    </div>
                  </div>
            </div>
        </FlexContainer>
    )
}

const Syllabus = () => {
    return(
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
            Programme duration: 2 Months
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            made up of online training video’s plus weekly coaching coaching calls and 2 months live trading on the crypto charts on the last Saturday of the month!
            </DescriptionContainer>
            <div>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 1
                </IntroTitle>
                <div>
                <IntroTitle style={{fontSize: "28px"}}>
                Begin the Crypto like a Pro Trading System
                </IntroTitle>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Begin the Crypto like a Pro Trading System
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/>  Discover my momentum strategy to trade Crypto’s that are ready to rip higher or lower.
                </DescriptionContainer>
                <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                    <Bullet/> Identify my Trade & Risk management strategy using Volume Profile & VWAP to maximise ROI.
                </DescriptionContainer>
                </div>
            </FlexContainer>
            <FlexContainer style={{padding: "20px 40px", display: "flex"}}>
                <IntroTitle style={{fontSize: "28px", marginRight: "30px", color: "#FFAB00", minWidth: "130px"}}>
                    Month 2
                </IntroTitle>
                <div>
                    <IntroTitle style={{fontSize: "28px"}}>
                      Implement the System & begin Trading Crypto’s
                    </IntroTitle>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/> You will also get LIVE weekly Coaching & Group Mentoring to review everything that’s happened over the past week to accelerate your learning.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/>  Not stopping there, you’ll also get Weekly Analysis to show you what we should be expecting from the markets & what trade set ups that I’ll be using.
                    </DescriptionContainer>
                    <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
                        <Bullet/>You will also get my trade ideas and support via our Exclusive Elite Crypto Traders Club which will be run privately on Facebook.
                    </DescriptionContainer>
                </div>
            </FlexContainer>
            </div>
        </div>
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
            The Aim of this Programme is to show you how to trade Cryptos using my exact system in order to experience gains of uptown 400% ROI like me in the last 2 months. <br/><br/>
            Get EXCLUSIVE access to my proven Crypto Trading Blueprint and Learn How to make Money finding Low Risk, High Probability Trades from Just 1 hour per day. <br/><br/>
            Destroy the learning curve and understand how to identify trading patterns before the other 98% of retail investors decide to get in and cause the price to explode.
            </DescriptionContainer>
        </div>
        <CourseBanner>
          Tagline
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px"}}>
              Cutting Edge Crypto Trading Secrets
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", marginTop: "30px", color:"#172647"}}>
                <Bullet/> Discover my momentum strategy to catch Crypto Trades that are ready to breakout & explode higher to give us a greater ROI opportunity.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", marginTop: "30px", color:"#172647"}}>
                <Bullet/> Discover the exact system that I have developed for tracking & trading over 50 Crypto Coins - spending less that 1 hour a day screen time in the process.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#172647", marginTop: "15px"}}>
                <Bullet/> Understand the exact criteria that I use to identify my trade & risk management strategy in order to maximise my P&L and ROI. You will also learn how to manage money flow like a pro to maximise your wins.
            </DescriptionContainer>
        </div>
        <CourseBanner>
          Uncover Hedge Fund Hacks
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
              Market Conditions
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Knowing this before you trade is essential to learn. Find out how to develop your edge and apply the right strategy at the right strategy at the right time to avoid silly stop outs so that ultimately you’ll make more money.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
            Institutional Volume Analysis
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            Studying Price & Volume Data means you can identify Institutional Buying & Selling and know how to spot where the big money is going. Now you’ll be on the right side of the next major market move.
            </DescriptionContainer>
            <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
              Geometric Angles
            </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            You won’t get this anywhere else because I’m the only one doing this. These angles are so powerful because they reveal the speed & angle of the buyers and the sellers to identify Low Risk and High Probability trade set ups before they happen.
            </DescriptionContainer>
        </div>
        <CourseBanner>
          Here’s everything you get
        </CourseBanner>
        <div style={{padding: "0px 40px"}}>
        <IntroTitle style={{fontSize: "28px", marginTop: "20px"}}>
          The Crypto like a Pro System
        </IntroTitle>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>Will be a mixture of Live and online based training to help give you an edge when Trading Crypto’s.
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>See how I professionally manage my Crypto Portfolio to maximise Long & Short term returns.        
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
            <Bullet/>Learn how to spot key Buy and Sell Zones so that you can catch turning points before everyone else.
            </DescriptionContainer>
        </div>
            <CourseBanner>
              Complete Crypto Trading System
            </CourseBanner>
        <div style={{padding: "0px 40px"}}>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>Crypto Like a Pro System
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>2 Wks Live Q&A & Coaching
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>3 hrs Live Trading Analysis
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>All Live training recordings
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>3 Months VIP Group Support
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>Crypto Trade Tracker sheet
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>Beginner Bonus Programme
            </DescriptionContainer>
            <DescriptionContainer style={{fontSize: "16px", color: "#4B586A", marginTop: "10px"}}>
              <Bullet/>My Complete Crypto Hotlist
            </DescriptionContainer>
        </div>
        </>
    )
}

const IndexPage = () => {
    return (
        <Layout>
            <IntroCardCoursePage title={'Crypto like a Pro Trading'} description={'How to build a Passive Crypto Portfolio for potentially life changing gains'}/>
                <CourseItem
                    mentors={<Mentors/>}
                    overview={<OverView/>}
                    syllabus={<Syllabus/>}
                >
                </CourseItem>
            <Testimonial/>
            <Booking/>
            <div id="widget" style={{display: "flex", justifyContent: "center", marginTop: "60px"}}/>
        </Layout>
    )
}

export default IndexPage
