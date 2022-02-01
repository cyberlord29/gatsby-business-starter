import React from 'react'
import {IntroCardAboutPage, About, Layout, Courses, Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';

const AboutPage = () => {
    return (
        <Layout>
            <div style={{backgroundColor: "#F7F9FF", padding: "100px 5%"}}>
              <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                <IntroTitle style={{marginBottom: "20px", textAlign: "center"}}>
                  Thank you for your Interest
                </IntroTitle>
                <Underline></Underline>
                <DescriptionContainer style={{margin: "20px 0px"}}>
                  Someone from the team will get back to you.
                </DescriptionContainer>
                <div style={{margin: "30px 0px"}}>
                <DescriptionContainer style={{textAlign: "center", marginBottom: "40px"}}>
                  {/* Meanwhile here is some of our content */}
                </DescriptionContainer>
                <FlexContainer>
                  {/* <iframe style={{margin: "40px"}} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAndyDemiLTG%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
                  {/* <iframe width="360" height="215" src="https://www.youtube.com/embed/fYxFINQo-gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  */}
                </FlexContainer>
                </div>
              </div>
              <AboutContainerAboutPage style={{position: "static", margin: "0px 0px"}}>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "50px", fontSize: "34px"}}>
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
                        Alberto started his trading career within the financial industry 15 years ago, beginning by trading stocks; through his tenure in the industry he has achieved some incredible feats. Alberto is an engineering graduate, possessing a Masters in Financial Mathematics, and is a Fitch Certified Quant. <br/><br/>
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
