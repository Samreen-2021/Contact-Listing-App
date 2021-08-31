
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const[userData, setUserData] = useState([]);
  const[userAge, setUserAge] = useState("");
  useEffect(() => {
      fetch('https://randomuser.me/api/?results=9')
      .then(results => results.json())
      .then(data =>{
          console.log(data)
          setUserData(data.results);
      });
  },[])
  return(
    <>
    <div  style={{textAlign: 'center', fontSize: '46px'}}>Contact Listing App</div>
      {
      userData.map((user) => (
        <div className="card mb-3 mx-auto" style={{width: '600px', backgroundColor: 'aqua', margin: '45px', padding:'30px'}}>
         <div className="row g-0" >
          <div className="col-md-4">    
            <img src={user.picture.large} alt="user-img"></img>
          </div>
          <div class="col-md-8">
            <div class="card-body" style={{color: 'purple'}} >
              <h5 className="card-name">Name: {user.name.first} {user.name.last} </h5>
              <h5 className='card-Gender'>Gender: {user.gender} </h5>
              <h5 className='card-email'>Email: {user.email} </h5>
              <h5 className='card-age'>Age: {userAge} </h5>
              <p className='text-center'><button className="btn btn-primary" onClick = {() => setUserAge(user.dob.age)}>Toggle Age</button></p>
            </div>
          </div>
        </div>
        </div>
      
      
      ))}
    </>
);}


export default App;
