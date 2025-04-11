import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/profile';
import About from './components/About/About';
// 
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
// import Interests from './components/Interests/Interests';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Profile />
              <About />
              <WorkExperience />
             <Projects />
               
              <Education />
              <Contact /> 
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;