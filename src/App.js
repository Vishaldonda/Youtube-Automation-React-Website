import './App.css';
import Video from './components/video.js';
import { videoData1, videoData2 } from './components/data';
import Portfolio from './pages/portfolio'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const size = useWindowSize();  // Get window size using custom hook
  const isMobile = size.width < 768;  // Define mobile breakpoint

  return (
    <Router basename="/Youtube-Automation-React-Website">
    <div className="App">
      <div className="header-container">
        <div className="heading">
          <h1>Learn & Innovate: Step-by-Step Tech Tutorials</h1>
        </div>
        <div className="top-right-icon">
            <Link to="/portfolio"> 
              <img 
                className="my-photo"
                src="https://drive.google.com/thumbnail?id=1nHdhywwGBhjK-m4-LxGawG5TX87GfefQ"
                alt="My profile" 
              />    
            </Link>   
      </div> 
    </div>

      <Routes>
        <Route path="/" element={
          <>
            <Video video={videoData1} isMobile={isMobile} />
            <Video video={videoData2} isMobile={isMobile} />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

    </div>
    </Router>
  );

}

export default App;
