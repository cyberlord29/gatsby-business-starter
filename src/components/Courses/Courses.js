import React from 'react'
import { Banner, CoursesContainer, Header, Button, CourseItem } from './Courses.elements'
import { FlexContainer, Underline } from '../../globalStyles'
import view from '../../img/view.jpg'
import time from '../../img/time.jpg'
import learn from '../../img/learn.jpg'
import { navigate } from 'gatsby'
import clp from '../../img/clp.jpg'

const Course = ({title}) => {
    return (
        <CourseItem onClick={()=>navigate('/crypto-like-a-pro')}>
            <div style={{height: "185px"}}>
                <img
                    src={clp}
                    alt="course"
                    height={"100%"}
                >
                </img>
            </div>
            <div style={{padding: "12px 0px"}}>
                {title}
            </div>
            <div style={{width: "100%", margin: "4px 0px", border: "1px solid #8790A524"}}/>
            <div style={{display: "flex", justifyContent: "flex-start", padding: "12px 0px"}}>
                <div style={{display: "flex", alignItems: "center", marginLeft: "2px"}}>
                    <img 
                        src={view}
                        height={12}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>1,200</div>
                </div>
                <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                    <img 
                        src={time}
                        height={15}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>20 hours</div>
                </div>
                <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                    <img 
                        src={learn}
                        height={15}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>Beginner</div>
                </div>
            </div>
        </CourseItem>
    )
}

const Courses = (props) => {
    return (
        <CoursesContainer>
            <Banner>
                Learn what it really takes to become a Professional Trader and you’ll begin to see the markets on a whole new level.
            </Banner>
            <div style={{padding: "10px 5% 70px"}}>
                <Header style={{display: "flex"}}>
                    <div>
                        <div>
                            Our Popular Courses
                        </div>
                        <Underline width={10}/>
                    </div>
                    {/* <Button>
                        ALL COURSES
                    </Button> */}
                </Header>
                <FlexContainer>
                    <Course title="Crypto Like a Pro"/>
                    <Course title="Associate Trader Programme"/>
                    <Course title="Crypto Like a Pro Trading System"/>
                </FlexContainer>
            </div>
        </CoursesContainer>
    )
}

export default Courses
