import React, {useState} from 'react'
import githubIcon from './assets/githubIcon.svg'

function App() {

  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  const searchBtn = async() => {

    await fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((json) => setData([json]));

  }
console.log("data", data);
  return (
    <div className="App">
        <div className="navbar">
            <div className="githubLogoContainer">
                <img src={githubIcon} alt="githubLogo" />
            </div>
            <div className="searchUserContainer">
                <input onChange={handleSearchInput} type="search" name="username" id="searchUser" placeholder="Search..." />
                <button onClick={searchBtn}>Search</button>
            </div>
        </div>
       
           {data.map((i)=> <div className="userList" key={i.id}>
             <div className="userCard">
              <div className="avatarContainer">
                <img src={i.avatar_url} alt="avatar_img" />
              </div>
                <div className="userInfo">
                  <p>name : <span>{i.name}</span></p>
                  <p>bio : <span>{i.bio}</span></p>
                  <p>login : <span>{i.login}</span></p>
                  <p>location : <span>{i.location}</span></p>
                  <a href={i.html_url} alt={i.html_url} target="_blank" rel="noopener noreferrer">{i.html_url}</a>
                 
                </div>
              </div>
           </div>)}
        
    </div>
  );
}

export default App;
