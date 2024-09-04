import './App.css';
import Video from './components/video.js';
import { videoData1, videoData2 } from './components/data';

function App() {
  return (
    <div className="App">

      <h1>Learn & Innovate: Step-by-Step Tech Tutorials</h1>

      <Video video={videoData1}/>
      <Video video={videoData2}/>

    </div>
  );

}

export default App;
