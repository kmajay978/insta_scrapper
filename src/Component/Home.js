import React, { useState } from 'react';
import axios from "axios";

const Home = () => {
const [user , setUser] = useState('');

const handleSubmit = () => {
  alert(user)
}
 
return (
<div>

<form>
  <div className="insta_text">
  <h1>INSTAGRAM_SCRAPPER</h1>
  </div>
<div className="field" id="searchform">
  <input type="text" id="searchterm" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Search username" />
  <button type="button" id="search" onClick={handleSubmit}><i className="fas fa-search"></i></button>
</div></form>
</div>
)
}
export default Home;
