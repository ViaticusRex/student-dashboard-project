import React, {useState} from 'react'
import './styles/ShowMore.css'


function ShowMore({student}) {
    
    //change to percentages
    const currentTotal = student.codewars.current.total
    const scoreGoal = student.codewars.goal.total

    const targetGoal = Math.floor(currentTotal/scoreGoal * 100)
   
    
    
    //state for notes
    const [note,setNote] = useState([]);

    const addNewNote = (formObj) => {
        formObj.preventDefault();
        const commenterName = formObj.target['commenter-name'].value;
        const comment = formObj.target.comment.value;

       //DO MORE RESEARCH
        const newNote = {
            id: Date.now(),
            commenterName,
            comment,
        };

        setNote((prevNotes) => [...prevNotes, newNote]);


        formObj.target.reset();
    };

  return (
    <div className='showMore-parent'>
        <div className="showMore-categories">
            <div className="codeWars">
                <h5>CodeWars</h5>
                <p><span id='category'>Current Total: </span>{currentTotal}</p>
                <p><span id='category'>Last Week: </span>{student.codewars.current.lastWeek}</p>
                <p><span id='category'>Goal: </span>{scoreGoal}</p>
                <p><span id='category'>Progress: </span>{targetGoal}%</p>
            </div>

            <div className="scores">
                <h5>Scores</h5>
                <p><span id='category'>Assignments: </span>{student.cohort.scores.assignments * 100}%</p>
                <p><span id='category'>Projects: </span>{student.cohort.scores.projects * 100}%</p>
                <p><span id='category'>Assessments: </span>{student.cohort.scores.assessments * 100}%</p>
            </div>

            <div className="certifications">
                <h5>Certifications</h5>
                <p><span id='category'>Resume: </span>{student.certifications.resume}
                {student.certifications.resume ? '✅' : '❌'}</p>
                <p><span id='category'>LinkedIn: </span>{student.certifications.linkedin}
                {student.certifications.linkedIn ? '✅' : '❌'}</p>
                <p><span id='category'>Mock Interview: </span>{student.certifications.github}
                {student.certifications.github ? '✅' : '❌'}</p>
                <p><span id='category'>GitHub: </span>{student.certifications.mockInterview}
                {student.certifications.mockInterview ? '✅' : '❌'}</p>
            </div>
            
        </div> 

        <div className="showNotes-parent">
            <h5>1-On-1 Notes</h5>
            
            <br />
            <div className='addNote'>
                <div>
                    <form onSubmit={addNewNote}>
                        <label>Instructor</label>
                        <input type='text' id='commenter-name' name='commenter-name'/>
                            
                        <br />
                        <label>Comment</label>
                        <input type='text' id='comment' name='comment'/>

                        <br />
                        <button className='addNote-button' >Add Note</button>

                    </form>
                </div>

                {/* <div className="existingNotes">
                    <p>
                    //maybe to put the existing comments?
                    </p>
                </div> */}



                {note.map((note) => (
                        <div className='new-comments' key={note.id}>
                            <p>
                                <strong>{note.commenterName}:</strong> {note.comment}
                            </p>
                        </div>
                    ))}

            </div>
        </div>






    </div>
  )
}

export default ShowMore