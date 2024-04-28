import React from 'react';
import {useState} from 'react';
import './styles/App.css'
import NavBar from './NavBar';
import ClassDates from './ClassDates';
import StudentInfo from './StudentInfo';
import data from './data/data.json'



function App() {
  const [currentData, setCurrentData] = useState([...data]);
  const [cohortBold, setCohortBold] = useState('All Students')

  function studentCohort(classTerm){
    if(classTerm === 'All Students'){
      setCohortBold(classTerm)
      setCurrentData(data);
    } else {

      let filteredArr = data.filter(student => classTerm == student.cohort.cohortCode);
      setCohortBold(classTerm)
      setCurrentData(filteredArr);
    }
    
  }

  return (
    <div className="app-body">
      <NavBar/>
      <ClassDates filteredStudents = {studentCohort}/>
      <StudentInfo  cohortTerm = {cohortBold} data = {currentData}/>
      

    </div>
  );
}

export default App;


