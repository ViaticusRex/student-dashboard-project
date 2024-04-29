import React from 'react'
import './styles/StudentInfo.css'
import StudentCard from './StudentCard'


function StudentInfo({data, cohortTerm}) {
    
    
    const totalStudents = data.length
    const formattedCohortTerm = cohortTerm.replace(/([a-z])([A-Z])/g, '$1 $2');


    const studentData = data.map((student, idx) => {
        return (
            <StudentCard key = {idx} student = {student} />
        )
    })



    return (
    <div className='studentInfo'>
        <h2>{formattedCohortTerm}</h2>
        <p>Total Students <span>{totalStudents}</span> </p>
        {studentData}

    </div>
  )
}

export default StudentInfo