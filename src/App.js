import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import video1 from './video/video1.mp4'
function App() {
  const title = <h1 className="title red">Your name here</h1>
  const imgSrc = <img src={logo} alt='logo' />
  const imgPub = <img src="/logo512.png" alt='log1' />
  const video = <video controls width={320} height={240}>
    <source src={video1} type="video/mp4" />
  </video>
  return (
    <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      {title}
      {imgSrc}
      <br />
      {imgPub}
      <br />
      {video}
    </div>
  );
}

export default App;
