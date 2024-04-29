import React, {useState} from 'react'
import './styles/StudentCard.css'
import ShowMore from './ShowMore'

// formatting date of birth on the card
const newDob = (date) => {
  const [month, day, year] = date.split('/');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formattedMonth = monthNames[parseInt(month,10)-1]
  const formattedDate = [formattedMonth, day, year]

  return formattedDate

}

//determine whether or not student is on track
function isOnTrack(student) {
  const { certifications, codewars } = student;

  const hasResumeCert = certifications.resume;
  const hasLinkedInCert = certifications.linkedin;
  const hasGitHubCert = certifications.github;
  const hasMockInterviewCert = certifications.mockInterview;

  const codeWarsOnTrack = codewars.current.total > 600;

  return hasResumeCert && hasLinkedInCert && hasGitHubCert && hasMockInterviewCert && codeWarsOnTrack;
}




//show more button state/functionality
function StudentCard({student}) {
  const [showMore, setShowMore] = useState(false);

  const expandStudentCard = () => {
    setShowMore(!showMore);
  }
  //new date prop
  const formattedDob = newDob(student.dob)

  //student on-track
  const onTrack = isOnTrack(student);
  console.log('Is Student On Track?', onTrack)
 

  return (
    <div className='student-card'>
      
      <div className='student-card-default'>
        <div className='student-photo'> 
          <img src= {student.profilePhoto} alt="⚙️"/>
        </div>
        
        <div className='studentInfo-list'>
          <p className='student-name'>{student.names.preferredName} {student.names.surname}</p>
          <p className='student-email'>{student.username}</p>
          <p className='student-dob'><span>{formattedDob[0]}: </span>{formattedDob[1]}, {formattedDob[2]}</p>
            
          <button className='button-showMore' onClick={expandStudentCard}>
            <span>{showMore ? 'Show Less...' : 'Show More...'}</span>
          </button>

        </div>
        
        <p id='onTrack'>
          {onTrack && <span>On Track To Graduate</span>}
        </p>

      </div>
      
      {showMore && <ShowMore student = {student}/>}

    </div>
  )
}

export default StudentCard