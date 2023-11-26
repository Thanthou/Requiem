import React, { useRef, useEffect } from 'react';
import './App.css';
import SignIn from './pages/login/SignIn';

function getRandomImage() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const imageName = `img_${randomNumber}`;
  const imagePath = `/login_images/${imageName}.jpg`;
  return imagePath;
}


function App() {
  const leftWindowRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    if (leftWindowRef.current && imageRef.current) {
      const { width, height } = leftWindowRef.current.getBoundingClientRect();
      imageRef.current.style.width = `${width}px`;
      imageRef.current.style.height = `${height}px`;
    }
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div className="App">
      <div ref={leftWindowRef} className="App-header">
        <img ref={imageRef} src={getRandomImage()} className="login-img" alt="login" />
        {/* Additional content */}
      </div>
      <div className="App-signin">
        <SignIn />
      </div>
    </div>
  );
}
export default App;


