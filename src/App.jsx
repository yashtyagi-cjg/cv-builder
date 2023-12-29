import { useState } from 'react'
import './App.css'
import Preview from './components/Preview';
import Background from './components/BackgroundInfo';

function App() {
  //const [personalInfo, setPersonalInfo] = useState([]);
  const [backgroundInfo, setBackgroundInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  //

function changeBackgroundInfo(event) {
  event.preventDefault();

  setBackgroundInfo((prevBackgroundInfo) => [
    ...prevBackgroundInfo,
    {
      uni: event.target[0].value,
      course: event.target[1].value,
      gpa: event.target[2].value,
      date: event.target[3].value,
      desc: event.target[4].value,
    },
  ]);
}

  function changeEducationInfo(){
    setEducationInfo();
  }

  function changeExperienceInfo(){
    setExperienceInfo();
  }


  return (
    <div>
      <Background
      backgroundInfo={backgroundInfo}
      onChange={changeBackgroundInfo}
      />
      <Preview
      educationInfo={educationInfo}
      backgroundInfo={backgroundInfo} 
      experienceInfo={experienceInfo}
      />
    </div>
  )
}

export default App
