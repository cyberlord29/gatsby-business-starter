import React, { useState } from 'react'
import { CourseContainer, Navbar, NavItem, Underline } from "./Courses.elements"

const CourseItem = (props) => {

  const pages = [
    "Overview",
    "Mentors",
    "Syllabus",
    // "Training Viedoes"
  ]

  const [page, setPage] = useState("Overview")

  return(
    <div style={{backgroundColor:"#F7F9FF", paddingBottom: "50px"}}>
      <Navbar style={{paddingTop: "40px"}}>
        {
          pages.map((name)=>
            <NavItem onClick={()=>setPage(name)}>
              <div style={{marginBottom:"7px"}}>
                {name}
              </div>
              {page==name && <Underline/>}
            </NavItem>
          )
        }
      </Navbar>
      <CourseContainer>
        {props[page.toLowerCase()]}
      </CourseContainer>
    </div>
  )
}

export default CourseItem