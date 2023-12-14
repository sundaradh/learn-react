import logo from './logo.svg';
import './App.css';
import video from './data/video.js';
import Thumbnail from './components/Thumbnail.js';
import LikeButton from './components/LikeButton.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
   
    <div>
      <Thumbnail />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <video autoplay="autoplay" playsinline="playsinline" muted="muted" class="plyr__video" data-video-player-target="player"><source src={video.url} type="video/webm"/></video>
      <LikeButton video={video} />
    </div>
      </div>
    </div>
  );
}

export default App;
