import React from 'react'
import {IntroCardAboutPage, About, Layout, Courses,Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { DescriptionContainer } from '../components/IntroCard/IntroCard.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';

const AboutPage = () => {
    return (
        <Layout>
            <IntroCardAboutPage/>
            <div style={{backgroundColor: "#F7F9FF", padding: "0px 5%"}}>
              <Header style={{padding: "0px", fontSize: "34px"}}>
                    <div>
                        <div>
                            Culture Matters
                        </div>
                        <Underline/>
                    </div>
              </Header>
              <DescriptionContainer  style={{fontSize: "18px", marginTop: "20px", color: "#4B586A"}}>
              We at London Trading Institute, are as proud of our culture and values as we are of our products. With our dedication we have created an encouraging and friendly environment. In addition the organisation supports grassroots and International charities wherever possible.
              </DescriptionContainer>
            <AboutContainerAboutPage style={{position: "static", margin: "0px 0px"}}>
                <Header style={{padding: "0px",margin: "100px 0px", marginBottom: "50px", fontSize: "34px"}}>
                      <div>
                          <div>
                              Our Team
                          </div>
                          <Underline/>
                      </div>
                </Header>
                <FlexContainer style={{alignItems: "center", padding: "0px 20px"}}>
                    <div>
                        <img
                            src={andy1}
                            style={{width: "100%"}}
                            >
                        </img>
                    </div>
                    <div style={{padding: "50px"}}>
                      <div style={{fontSize: "24px", color:"#172647"}}>
                        Andy Demi
                      </div>
                      <div style={{fontSize: "14px", color:"#FFAB00"}}>
                        CEO | Head Trader
                        <br/>
                        <br/>
                      </div>
                          <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", maxWidth: "800px"}}>
                            Andy Demi is the CEO and Head Trader for London Trading Institute, where he is managing a team of experienced traders as well as handling a multi-million pound portfolio. He is a BSc graduate of Economics, holds an MSc in International Securities, Investment and Banking, as well as attaining the professional Investment Management Certificate (IMC).<br/><br/><br/>
                            Starting out in the industry in 2001, Andy Demi had the opportunity to immerse himself in the markets whilst working with institutions including JP Morgan, Schroders and Barclays Global Investors. He brings with him over a decade of professional trading experience in Equities, Futures and FX markets, as well as numerous years of experience mentoring and educating students and traders alike. He is considered an expert in technical analysis as well as having a thorough grasp of macro factors influencing markets.
                          </div>
                    </div>
                </FlexContainer>
                <FlexContainer style={{alignItems: "center", marginTop: "50px"}}>
                      <div style={{padding: "50px"}}>
                    <div style={{fontSize: "24px", color:"#172647"}}>
                        Alberto Pallotta
                    </div>
                    <div style={{fontSize: "14px", color:"#FFAB00"}}>
                      Senior Quantitative Trader
                    </div>
                      <div style={{fontSize: "14px", color:"#4B586A", marginTop: "20px", maxWidth: "800px"}}>
                        Alberto started his trading career within the financial industry 17 years ago, beginning by trading stocks; through his tenure in the industry he has achieved some incredible feats. Alberto is an engineering graduate, possessing a Masters in Financial Mathematics, and is a Fitch Certified Quant. <br/><br/>
                        During his career he has built strategies for several financial institutions, including complex quantitative option pricing models, and volatility forecasters. He has a wealth of institutional experience at various Hedge Funds and Prop Houses, and is currently acting as an advisor for two London based hedge funds. He also is involved in research that is investigating the feasibility of using Artificial Intelligence in trading.<br/><br/>
                        Alberto engages in both algorithmic and discretionary trading. He trades options, futures and ETFs (the latter which he also invests in). Due to his expertise, credentials and his passion for teaching, Alberto is frequently asked to be a guest lecturer in several universities. Including Middlesex University, Warwick University and London Metropolitan University.
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
            </AboutContainerAboutPage>
                          </div>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
