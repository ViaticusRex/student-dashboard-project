import React, {useState} from 'react'
import './styles/ShowMore.css'


function ShowMore({student}) {
    const currentTotal = student.codewars.current.total
    const scoreGoal = student.codewars.goal.total

    const targetGoal = Math.floor(currentTotal/scoreGoal * 100)
    const scorePercents = student.cohort.scores
    
    

    const [note,setNote] = useState([]);

    const addNewNote = (formObj) => {
        formObj.preventDefault();
        const commenterName = formObj.target['commenter-name'].value;
        const comment = formObj.target.comment.value;

       
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
                <p><span>Current Total: </span>{currentTotal}</p>
                <p><span>Last Week: </span>{student.codewars.current.lastWeek}</p>
                <p><span>Goal: </span>{scoreGoal}</p>
                <p><span>Progress: </span>{targetGoal}%</p>
            </div>

            <div className="scores">
                <h5>Scores</h5>
                <p><span>Assignments: </span>{scorePercents.assignments}%</p>
                <p><span>Projects: </span>{scorePercents.projects}%</p>
                <p><span>Assessments: </span>{scorePercents.assessments}%</p>
            </div>

            <div className="certifications">
                <h5>Certifications</h5>
                <p><span>Resume: </span>{student.certifications.resume}</p>
                <p><span>LinkedIn: </span>{student.certifications.linkedin}</p>
                <p><span>Mock Interview: </span>{student.certifications.github}</p>
                <p><span>GitHub: </span>{student.certifications.mockInterview}</p>
            </div>
            
        </div> 

        <div className="showNotes-parent">
            <h5>1-On-1 Notes</h5>
            
            <br />
            <div className='addNote'>
                <div>
                    <form onSubmit={addNewNote}>
                        <label>Username</label>
                        <input type='text' id='commenter-name' name='commenter-name'/>
                            
                        <br />
                        <label>Comment</label>
                        <input type='text' id='comment' name='comment'/>

                        <br />
                        <button className='addNote-button' >Add Note</button>

                    </form>
                </div>

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