import React from 'react'
import './styles/ClassDates.css'


function ClassDates({filteredStudents}) {

  return (
    <div className='classDates-list'>
        <h3>Choose a Class by Start Date</h3>
        <p onClick={()=> {filteredStudents("All Students")}}>All Students</p>
        <p onClick={()=> {filteredStudents("Winter 2026")}}>Winter 2026</p>
        <p onClick={()=> {filteredStudents("Fall 2026")}}>Fall 2026</p>
        <p onClick={()=> {filteredStudents("Summer 2026")}}>Summer 2026</p>
        <p onClick={()=> {filteredStudents("Spring 2026")}}>Spring 2026</p>
        <p onClick={()=> {filteredStudents("Winter 2025")}}>Winter 2025</p>
        <p onClick={()=> {filteredStudents("Fall 2025")}}>Fall 2025</p>
        <p onClick={()=> {filteredStudents("Summer 2025")}}>Summer 2025</p>
        <p onClick={()=> {filteredStudents("Spring 2025")}}>Spring 2025</p>
    </div>
  )
}

export default ClassDates