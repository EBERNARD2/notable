import './App.css';
import SideBar from './components/sidebar';
import { useEffect, useState } from 'react';
import Content from './components/content.js/content';


const colStyles ={
 
};
function App() {
  const [physicians, setPhysicians] = useState([]);
  const [currentPhysicianAppointments, setCurrentPhysicianAppointments] = useState([]);
  const [doctor, setDoctor] = useState({});

  useEffect(()=> {
    fetch("http://localhost:3005/getPhysicians").then( (res) => {
      return res.json();
    }).then((data) => {
      setPhysicians(data);
    }).catch((err) => {
      console.log(err);
    });

  }, []);
  return (
    <div class="row">
      <SideBar physicians={physicians} 
      getAppointments={getAppointments} 
      class="col"
      id="sidebar"/> 
      <Content currentAppointments={currentPhysicianAppointments} 
      doctor = {doctor}
      class="col"/>

    </div>
  );


 function getAppointments(e) {
    const doctorId = e.target.id; 

   fetch(`http://localhost:3005/getAppointments/${doctorId}`).then(res => res.json())
    .then((data) => {
      setCurrentPhysicianAppointments(data);
      for (let physician of physicians) {
        if (physician.id == doctorId){
          setDoctor(physician);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
        
}
}

export default App;
