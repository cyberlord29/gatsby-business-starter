import React from 'react'
import {IntroCardAboutPage, About, Layout, Courses, Testimonial, Booking, Footer } from '../components'
import { AboutContainer, AboutContainerAboutPage, Banner } from '../components/About/About.element'
import { DescriptionContainer, IntroTitle } from '../components/IntroCard/IntroCard.element'
import { Bullet, FlexContainer, Header, Underline } from '../globalStyles'
import andy1 from '../img/andy1.png';
import andy2 from '../img/alberto1.png';

const AboutPage = () => {
    return (
        <Layout>
            <div style={{backgroundColor: "#F7F9FF", padding: "100px 5%"}}>
              <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                <IntroTitle style={{marginBottom: "20px", textAlign: "center"}}>
                  Privacy Policy
                </IntroTitle>
                <Underline></Underline>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online. PII, as used in Privacy and Electronic Communications Regulations, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
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
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          What personal information do we collect from the people that visit our website?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details from which a visitor can be identified.
                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          When do we collect information?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                London Trading Institute collects and processes your personal data when you :
                <br/>
                <br/><Bullet></Bullet>Arrive on our website from a social media site such as Facebook Twitter, Instagram, Snapchat, Pinterest,or LinkedIn;
                <br/><Bullet></Bullet>Complete a call back / enquiry form;
                <br/><Bullet></Bullet>You register on our site to apply for a course or programme, corporate/ executive education, professional training, (online, distance learning or campus based) and whether you are applying for yourself or for employees or other staff at your organisation which may be or become a customer of ours;
                <br/><Bullet></Bullet>Sign up for marketing materials; or
                <br/><Bullet></Bullet>You provide us with your personal data by any other means.
                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          How do we collect your data ?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                We use different methods to collect data from and about you including through:
                <br/>
                <br/><Bullet></Bullet>                Direct interactions: You may give us your Identity, Contact details by filling in forms or by communicating with us by post, phone, email or otherwise. This includes personal data you provide when you:
Apply for our products or services
<br/><Bullet></Bullet>
Create an account on our website
<br/><Bullet></Bullet>
Use our site
<br/><Bullet></Bullet>
Subscribe to our service or publications
<br/><Bullet></Bullet>
Request marketing to be sent to you
<br/><Bullet></Bullet>
Enter a promotion or survey
<br/><Bullet></Bullet>
Give us some feedback.
<br/><Bullet></Bullet> Automated technologies or interactions: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our cookie policy.
Third parties or publicly available sources: We may receive personal data about you from various third parties and public sources as set out below:
<br/><br/>Technical Data from the following parties:
<br/>
<br/><Bullet></Bullet>Analytics providers such as Google analytics, Google optimize, Google Webmaster tools, Google tag manager, Facebook, Instagram
<br/><Bullet></Bullet>
Advertising networks such as Google Advertising Network, Facebook, Instagram, Bing and Linkedin based outside the EU and similar network we will be partnering with
<br/><Bullet></Bullet>
Search information providers such as Google, Bing and other search engines based inside and outside the EU, social media networks such as Facebook, Linkedin and Instagram, based inside  the EU and others providing similar services.
<br/><Bullet></Bullet>
Contact, Financial and Transaction Data from providers of technical, payment and delivery services such as Google Analytics, Facebook, Instagram, Bing, Linkedin and and any Payment Gateway that we intend to use in the future or amy other similar services we will partner with in future.
<br/><Bullet></Bullet>
Identity and Contact Data from data aggregators.
<br/><Bullet></Bullet>
Identity and Contact Data from publicly available sources such as the Electoral Register based inside the EU.
<br/><Bullet></Bullet>
Student Data from staff, administrative functions of other educational establishments, mentees or mentors, complainants.

<br/><br/>Academic, contact, identity, marketing and communications and technical data from (i) publishers, who are owners of private websites, and are based in and outside Europe and (ii) agents, referring organisations such as other universities.

                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          How do we use your information?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br/>
                <br/><Bullet></Bullet>Where we need to perform the contract we are about to enter into or have entered into with you.
                <br/><Bullet></Bullet>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                <br/><Bullet></Bullet>Where we need to comply with a legal or regulatory obligation.
                <br/><Bullet></Bullet>To administer a contest, promotion, survey or other site feature
                <br/><Bullet></Bullet>To send periodic emails regarding your query or other products and services
                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          How do we protect visitor information?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                <br/>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so. We do not use vulnerability scanning and/or scanning to PCI standards.
                <br/>We use regular Malware Scanning.

                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          How long will you use my personal data for?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  <br/>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
                  <br/>In some circumstances you can ask us to delete your data:
                  <br/>In some circumstances we may anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case we may use this information indefinitely without further notice to you.

                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          We do use an SSL certificate
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                We only provide articles and information, we never ask for personal or private information like credit card numbers.

                </DescriptionContainer>
                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          Do we use ‘cookies’?
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                  No we do not currently use any cookies for our systems or thrid party systems currently. 
                  <br/>We will update our policy here when we do start using them.
                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          Third Party Marketing
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                Google’s advertising requirements can be summed up by Google’s Advertising Principles. They are put in place to provide a positive experience for users.
                  <br/><a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">You can check it out here.</a>
                  <br/><br/>We use Google AdSense Advertising on our website.
                  <br/><br/>Google, as a third party vendor, uses cookies to serve ads on our site. Google’s use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
                  <br/><br/>We have implemented the following:
                  <br/>
                  <br/><Bullet></Bullet>Demographics and Interests Reporting in Google Tracking Tools like Adwords & Analytics.We along with third-party vendors, such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions, and other ad service functions as they relate to our website.
                  <br/><Bullet></Bullet>Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising initiative opt out page or permanently using the Google Analytics Opt Out Browser add on.
                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          Email Marketing
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                We collect your email address in order to:
                <br/>
                  <br/><Bullet></Bullet>Send information, respond to inquiries, and/or other requests or questions
                  <br/><Bullet></Bullet>Process orders and to send information and updates pertaining to orders
                  <br/><Bullet></Bullet>We may also send you additional information related to your product and/or service
                  <br/><Bullet></Bullet>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred
                  <br/><br/>In accordance with the GDPR we agree to the following:
                  <br/>
                  <br/><Bullet></Bullet>NOT use false, or misleading subjects or email addresses
                  <br/><Bullet></Bullet>Identify the message as an advertisement in some reasonable way
                  <br/><Bullet></Bullet>Include the physical address of our business or site headquarters
                  <br/><Bullet></Bullet>Monitor third party email marketing services for compliance, if one is used
                  <br/><Bullet></Bullet>Honor opt-out/unsubscribe requests quickly
                  <br/><Bullet></Bullet>Allow users to unsubscribe by using the link at the bottom of each email
                  <br/>If at any time you would like to unsubscribe from receiving future emails, you can follow the instructions at the bottom of each email and we will promptly remove you from ALL correspondence.

                </DescriptionContainer>

                <Header style={{padding: "0px",margin: "0px 0px", marginBottom: "20px", fontSize: "34px"}}>
                      <div>
                          <div>
                          Your Legal Rights
                          </div>
                          
                      </div>
                </Header>
                <DescriptionContainer style={{fontSize: "14px", margin: "20px 0px", padding: "20px", textAlign: "left"}}>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data.
                <br/>
                <br/><Bullet></Bullet>Request access to your personal data.
                <br/><Bullet></Bullet>You have the right to access your personal data. This enables you to receive a copy of the personal data we hold about you and check that we are lawfully processing it.
                <br/><Bullet></Bullet>To make a request: If you wish to make a request for access to your information, please contact us at London Trading Institute, New Broad Street House, 5 New Broad Street, London EC2M 1NH, United Kingdom or email us info@londontradinginstitute.com
                <br/><Bullet></Bullet>No fee usually required: You will not have to pay a fee to access your personal data (or to exercise any of the other rights), although we have the right to charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your request in these circumstances.

                <br/><Bullet></Bullet>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
                <br/><Bullet></Bullet>We try to respond to all legitimate requests within one month from the date your access request is received. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                <br/><Bullet></Bullet>Request correction of your personal data: This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                <br/><Bullet></Bullet>                Request erasure of your personal data
<br/>This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.

                </DescriptionContainer>
                
            </AboutContainerAboutPage>
                          </div>
            <Testimonial/>
            <Booking/>
        </Layout>
    )
}

export default AboutPage
