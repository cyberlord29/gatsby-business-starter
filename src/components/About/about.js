import React from 'react'
// import {  } from './about.element'
import { Underline } from '../../globalStyles'
import metric from '../../img/metric.svg'
import { Banner, Header, Button } from './About.element'
const Courses = (props) => {
    return (
        <div>
            <Banner style={{height: "50px"}}> <div style={{display: "flex", justifyContent: "center", padding: "12px 0px"}}>
                <div style={{display: "flex", alignItems: "center", marginLeft: "2px"}}>
                    <img 
                        src={metric}
                        height={50}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>1,200</div>
                </div>
                <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                    <img 
                        src={metric}
                        height={50}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>20 hours</div>
                </div>
                <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>
                    <img 
                        src={metric}
                        height={50}
                    >
                    </img>
                    <div style={{fontSize: "13px", marginLeft: "5px"}}>Beginner</div>
                </div>
            </div>
            </Banner>
           
        </div>
    )
}

export default Courses
