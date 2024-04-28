import React, {useState} from 'react'
import './styles/StudentCard.css'
import ShowMore from './ShowMore'








function StudentCard({student}) {
  const [showMore, setShowMore] = useState(false);

  const expandStudentCard = () => {
    setShowMore(!showMore);
  }

  return (
    <div className='student-card'>
      
      <div className='student-card-default'>
        <div className='student-photo'> 
          <img src= {student.profilePhoto}></img>
        </div>
        
        <div className='studentInfo-list'>
          <p className='student-name'>{student.names.preferredName} {student.names.surname}</p>
          <p className='student-email'>{student.username}</p>
          <p className='student-dob'>{student.dob}</p>
            
          <button className='button-showMore' onClick={expandStudentCard}>
            <span>{showMore ? 'Show Less...' : 'Show More...'}</span>
          </button>

        </div>
        
        <p id='onTrack'><span>On Track To Graduate</span></p>

      </div>
      
      {showMore && <ShowMore student = {student}/>}

    </div>
  )
}

export default StudentCard