import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Menegoth")
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name);
      setGitHubURL(data.html_url);
      setAvatarURL(data.avatar_url);
    })
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <img src={avatarURL} alt="Github profile avatar" />
      <h2>{gitHubName}</h2>
      <a href={gitHubURL}><button>Link to GitHub Profile</button></a>
    </div>
  );
}

export default App;
