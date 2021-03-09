import React, { useEffect, useState } from 'react';
import axios from "axios";
import $, { error } from 'jquery';

const Home = () => {
const [user , setUser] = useState('');
 
const UserDataFetchApi = 'https://www.instagram.com/'+ user+'/?__a=1';
const FetchUserOnchange = 'https://www.instagram.com/web/search/topsearch/?context=blended&query='+user+'&include_reel=false&count=10';
const handleSubmit = () => {
  axios.get(UserDataFetchApi)
  .then((response) => { 
   
    console.log(response,"userData.............");
 
     }, (error) =>{
 
     });

}

const FetchUser = (UserFetch) =>{
  // Here setting user data
  setUser(UserFetch);

  
    axios.get(FetchUserOnchange)
    .then((response) => { 
     
      console.log(response,"FetchOnchangeUser.............");
   
       }, (error) =>{
   
       });
 
}

 
useEffect (() =>{
 
},[])
return (
<div>

<form>
  <div className="insta_text">
  <h1>INSTAGRAM_SCRAPPER</h1>
  </div>
<div className="field" id="searchform">
  <input type="text" id="searchterm" value={user} onChange={(e) => FetchUser(e.target.value)} placeholder="Search username" />
  <button type="button" id="search" onClick={handleSubmit}><i className="fas fa-search"></i></button>
</div>
{/* <div className="preview_user">
  <li>hii</li>
  <li>hii</li>
</div> */}
</form>
</div>
)
}
export default Home;
