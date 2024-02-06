import './App.css';
import {useState} from 'react';
import Navigation from './Components/navigation';
import Experience from './Components/experienceGrid';
import AboutMe from './Components/aboutMeGrid';
import headshot from "./Images/headshot.jpeg";

function App() {
  const [currentComponent, setCurrentComponent] = useState("experience");

  return (
    <div className="App">
      <Navigation/>
      <main>
          <div className='bio'>
              <img src={headshot} width="200px;"/>
              <h1>Allegra</h1>
              <strong><p>2 Years Experience &#9900; Ready to Learn</p></strong>
              <p>#WomanInTech #BootCampGrad #SingleMama<br/>#LGBTQAlly #ColoradoLife</p>
              <button className='bio_btn'><a href="mailto: allegrase@protonmail.com" target='_blank'>Hire Me</a></button>
          </div>
          <div className='alt_btns'>
              <a className='alternate' onClick={()=>setCurrentComponent("experience")}>
                <h3>Experience</h3>
              </a>
              <a className='alternate' onClick={()=>setCurrentComponent("about")}>
                <h3>About Me</h3>
              </a>
          </div>
              {currentComponent === "experience" && <Experience/>}
              {currentComponent === "about" && <AboutMe/>}
        </main>
    </div>
      
  );
}

export default App;