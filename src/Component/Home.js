import React, { useEffect, useState } from 'react';
import axios from "axios";
import $, { error } from 'jquery';

const Home = () => {
const [user , setUser] = useState('');
 
const APIUrl = 'https://www.instagram.com/'+ user+'/?__a=1';
const handleSubmit = () => {
  axios.get(APIUrl)
  .then((response) => { 
   
    console.log(response,"userData.............");
 
     }, (error) =>{
 
     });

  //    axios.post("https://www.instagram.com/web/search/topsearch/?context=blended&query="+user+"&include_reel=false&count=10")
  //    console.log(response);
  //  } , (error)=> {
 
  //  })

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
  <input type="text" id="searchterm" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Search username" />
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
