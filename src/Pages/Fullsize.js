import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavLinks from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router';


const Fullsize = () =>{

  const [userProfile , setProfile] = useState({
    
    photo:"",
    followers:"",
    following:"",
    full_name:"",
    biography:"",
    userName:"" ,
    is_verified:"",
    is_private:""
  });
  // Getting username from parameters
  const params = useParams();
  const UserName = params.username;
  const UserDataFetchApi = `https://www.instagram.com/${UserName}/channel/?__a=1`;

  const GetProfile = () =>{
     axios.get(UserDataFetchApi)
  .then((response) => { 

    if(response)
    {
      var photo = response["data"]["graphql"]["user"]["profile_pic_url_hd"];  //Getting photo here
      var followers = response["data"]["graphql"]["user"]["edge_followed_by"]["count"]; // Getting followed by 
      var following = response["data"]["graphql"]["user"]["edge_follow"]["count"]; // Getting Following 
      var full_name = response["data"]["graphql"]["user"]["full_name"]; //Full name 
      var biography = response["data"]["graphql"]["user"]["biography"]; //Biography 
      var userName =response["data"] ["graphql"]["user"]["username"];
      var is_verified = response["data"]["graphql"]["user"]["is_verified"];
      var is_private = response["data"] ["graphql"]["user"]["is_private"];
      setProfile({
        photo:photo,
        followers:followers,
        following:following,
        full_name:full_name,
        biography:biography,
        userName:userName,
        is_verified:is_verified,
        is_private: is_private
      });

    }

  });
  }

  console.log(userProfile,"aaaaaaaaaaaa")

useEffect (() =>{
  GetProfile();
},[UserName])
  

return (
<div>
  {/* CONTAINER */}
  <SearchBar />
  {/* Search results */}
  <div className="searchResultsBox dpN">
    <div id="searchUserInfo" />
  </div>
  {/* BODY */}
  <div className="fl bdy">
    <div className="bdyInner">
      {/* ADS FRAME */}
      <div className="ads mb45">
        {/* Profile Picture ID 1 */}
        <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-6411740468955874" data-ad-slot={1398544671} data-ad-format="auto" data-full-width-responsive="true" />
      </div>
      <div id="noUser" className="dpN error mb45">
        <div className="middleIcon">
          <img className="errorImg" src="/assets/images/icons-error.svg" />
        </div>
        <span className="errorSpan">User not found</span>
      </div>
      <div id="userInfo" className="mb45">
        <div className="fl prfInfo mb45">
        {!!userProfile ? <div className="fl prfPic">
           
             
           <img id="imgPrfPic" className="imgPrfPic" src={userProfile.photo}/>
         </div>
           :<div className="fl prfPic">  <div id="prfPicLoading" className="gradientLoading prfPicLoading" />
           <a href="https://www.instagram.com/amandacerny/" target="_blank">
            
             <img id="imgPrfPic" className="dpN imgPrfPic" src="/assets/images/instabig.net-fullsize" />
           </a></div>}
            {/* LOADING */}
          
          <div className="fl prfCont">
            <div className="fl prfContL">
              {/* LOADING */}
              {!!userProfile&& userProfile.is_verified== false?
                <span id="prfUsername" className="fw600">
               {userProfile.userName}
               </span>
               :
                <div id="prfVerifiedDiv" className=" middleIcon">
                 {userProfile.userName}
                  <svg className="prfVerified" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 432 425"><path id="Subtraction_1" data-name="Subtraction 1" d="M1778.312,1003.579h0l-56.923-27.025-59.175,24.706-40.747-52.728-62.124-5.282-1.843-75.982L1510,825.137l34.834-54.344-15.068-67.882,65.211-19.875,10.822-57.229h71.923L1725.455,590l53.63,40.946h64.072l12.531,59.454,58.293,28.46-13.24,63.931,31.07,56.657-47.2,44.983v64.04l-72.863,11.455-33.439,43.652Zm-128.377-202.6L1629.2,827.787l70.63,56.826,100.7-117.844-26.282-23.257L1694.2,834.346l-44.263-33.367Z" transform="translate(-1505 -584)" fill="#2c96ea" /></svg>
                </div>
                  }      
              <div id="prfUsernameDiv" className=" fl prfUsername">
              {!!userProfile ? 
              <div  >
            {  userProfile.full_name}
              </div>
              :""}   
              </div>
              {/* LOADING */}<div id="prfNameLoading" className="gradientLoading prfNameLoading" />
              <div id="prfName" className=" fl prfName" />
              
            </div>
            <div className="fl prfContR">
              {/* LOADING */}<div id="prfFollowersLoading" className="gradientLoading prfFollowersLoading" />
              <div id="prfFollowersDiv" className="dpN prfFollowers"><span id="prfFollowers" className="fw600" /> followers</div>
            </div>
          </div>
        </div>
        {/* Nav Bar */}
        <div className="fl navBar mb45">
          <div className="nav">
          
          {/* <div className="navIn navActive"> */}
            <a href="amandacerny.html">
            <NavLinks />
            </a>
             </div>
        </div>
        <div className="fl bigPP">
          {!!userProfile&&
        <img id="imgPrfPic" className="imgBigPP" src={userProfile.photo}/>
          }
          {/* LOADING */}<div id="imgBigPPDiv" className="gradientLoading imgBigPPLoading" />
         
          
          <img id="imgBigPP" className=" imgBigPP" src="/assets/images/instabig.net-fullsize"  />

        </div>
        <div className="fl picButtons">
          <span>
            <a id="fullsizeLink" target="_blank" href="fullsize.html">
              <div className="middleIcon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus" className="svg-inline--fa fa-search-plus fa-w-16 bigImgIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z" /></svg>
              </div>
              <span>Full Size</span>
            </a>
          </span>
          <span className="picDownload">
            <a id="downloadLink"  href={userProfile.photo} download>
              <div className="middleIcon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" className="svg-inline--fa fa-download fa-w-16 bigImgIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" /></svg>
              </div>
              <span>Download</span>
            </a>
          </span>
        </div>
        {/* Related Profiles */}
        <div className="fl popular mb45 dpN" id="relatedProfiles" />
        {/* Share */}
        <div className="fl mb45">
          <div className="fw600">Share:</div>
          <div className="mt25">
            <span className="shareIconsMargin">
              <a href="https://api.whatsapp.com/send?text=See%20the%20full%20size%20Instagram%20profile%20picture%20of%20%40amandacerny%0Ahttps%3A%2F%2Finstabig.net%2Ffullsize%2Famandacerny%3Flg%3Den%26ref%3Dshare" target="_blank">
                <div className="middleIcon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14 shareIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </div>
                <span>WhatsApp</span>
              </a>
            </span>
            <span className="shareIconsMargin">
              <a href="https://t.me/share/url?url=See%20the%20full%20size%20Instagram%20profile%20picture%20of%20%40amandacerny%0Ahttps%3A%2F%2Finstabig.net%2Ffullsize%2Famandacerny%3Flg%3Den%26ref%3Dshare" target="_blank">
                <div className="middleIcon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" className="svg-inline--fa fa-telegram fa-w-16 shareIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                </div>
                <span>Telegram</span>
              </a>
            </span>
            <span>
              <a href="https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=viber://forward?text=See%20the%20full%20size%20Instagram%20profile%20picture%20of%20%40amandacerny%0Ahttps%3A%2F%2Finstabig.net%2Ffullsize%2Famandacerny%3Flg%3Den%26ref%3Dshare" target="_blank">
                <div className="middleIcon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="viber" className="svg-inline--fa fa-viber fa-w-16 shareIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z" /></svg>
                </div>
                <span>Viber</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* SEO */}
      <div className="fl description mb45">
        <h1>amandacerny - View and download Instagram profile pictures in full size - Instadp</h1>
        <p>Instagram is today's most popular social media app, it is used by more than a billion people. Sometimes you can't be sure that the person who wants to follow you on Instagram, or who you want to follow, is really that person. Because if this person is a user with a secret account, the only way to recognize it is to look at the profile picture. But Instagram doesn't allow users to enlarge their profile picture.</p>
        <p>InstaBig allows you to enlarge and download Instagram profile pictures. All you have to do is type in the search box the username of the account that you want to enlarge your profile picture. You can view the full resolution of the profile picture and download it to your device. Like <b>Instadp</b>, <b>izuum</b> and <b>Instaker</b>.</p>
        <p>Enjoy great profile pictures with InstaBig!</p>
      </div>
    </div>
  </div>
  {/* FOOTER */}
  <div className="fl footer">
   <Footer />
  </div>
</div>



)
}

export default Fullsize;