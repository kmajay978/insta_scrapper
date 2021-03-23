import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavLinks from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { GetUserPosts } from '../components/CommonFunction';
const Posts = () =>{

  const [userPost , setPosts] = useState();

//after : graphql.user.edge_owner_to_timeline.page_info.end_cursor
// id : graphql.user.id
  const setData = {
    "query_hash": "472f257a40c653c64c666ce877d59d2b",
    "id":"2137174039",
    "first":12,
    "after":""
  }

  const AllDataPostApi = GetUserPosts(setData);

  const AllUserPosts = () =>{
    axios.get(AllDataPostApi)
 .then((response) => { 
   if(response)
   {
     console.log(response,"qqqqqqqqqqqqqqqqqq");
     
   }

 });
 }
 
  useEffect (() =>{
    AllUserPosts();
  
  },[])

  
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
  
        {/* Posts Home 1 */}
      
      {/* Nav Bar */}
      <div className="fl navBar mb45">
        <NavLinks />
      </div>
{/* Posts will be shows here */}
      <div className="fl posts mb45">
        
					<div className="gradientLoading post"></div>
					<div className="gradientLoading post postMl">
       
          </div>
					<div className="gradientLoading post postMl"></div>
					<div className="gradientLoading post postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
					<div className="gradientLoading post postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
					<div className="gradientLoading post postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
					<div className="gradientLoading post postMl postMt"></div>
				</div>

      <div className="fl searchInBody mb45">
        <span className="searchInBodyH1">Paste Instagram post link:</span>
        <input type="text" className="inpSearch inpSearchBody" autoCorrect="off" autoCapitalize="none" placeholder="https://www.instagram.com/p/CH82CJOng28/" />
        <div className="searchResultsBoxInBody dpN">
          <div id="searchUserInfoInBody" />
        </div>
      </div>
      {/* SEO */}
      <div className="fl description mb45">
        <h1>Download and View Instagram Photos and Videos</h1>
        <p>You can download or view Instagram photos and videos in full resolution to your phone and computer with Instagram post downloader. Instagram does not allow you to download photos and videos of users. You can only download Instagram posts using the online free download tools.</p>
        <p>Downloading Instagram photos and videos is very easy with InstaBig. Copy the link of the post you want to download and paste it into the search box above and click on the post result found. The post you want to download will be displayed. You can download Instagram posts in full resolution to your phone and computer by clicking the Download button just below.</p>
      </div>
      <div className="fl features mb45">
        <div className="fl feature">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus" className="svg-inline--fa fa-search-plus fa-w-16 featureIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z" /></svg>
          <span className="featuresHeading">Full Size</span>
          <p className="pFeature">You can see the full resolution of the profile pictures.</p>
        </div>
        <div className="fl feature">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" className="svg-inline--fa fa-download fa-w-16 featureIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" /></svg>
          <span className="featuresHeading">Downloadable</span>
          <p className="pFeature">You can download profile pictures to your smart phone and computer.</p>
        </div>
        <div className="fl feature">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" className="svg-inline--fa fa-history fa-w-16 featureIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z" /></svg>
          <span className="featuresHeading">History</span>
          <p className="pFeature">The profiles you look at are saved in your browser cookies, so you can look it again.</p>
        </div>
      </div>
      {/* ARTICLES */}
      <ul className="fl articleList mb45">
        <li className="fl articles">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="instagram-profile-picture-zoom.html" title="Instagram Profile Picture Zoom">
                <img className="articleImg" src="/assets/images/articles-instagram-profile-picture-zoom-873245.webp" alt="Instagram Profile Picture Zoom" />
              </a>
            </div>
            <div className="fl articleBody">
              <a href="instagram-profile-picture-zoom.html" title="Instagram Profile Picture Zoom">
                <span className="articleTitle">Instagram Profile Picture Zoom</span>
              </a>
              <span className="articleSummary">InstaBig to zoom the Instagram profile picture. Zoom and download full resolution Instagram profile pictures online without the app.</span>
            </div>
          </div>
        </li>
        <li className="fl articles">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="download-instagram-stories-and-highlights.html" title="Download Instagram Stories and Highlights">
                <img className="articleImg" src="/assets/images/articles-download-instagram-stories-and-highlights-622905.webp" alt="Download Instagram Stories and Highlights" />
              </a>
            </div>
            <div className="fl articleBody">
              <a href="download-instagram-stories-and-highlights.html" title="Download Instagram Stories and Highlights">
                <span className="articleTitle">Download Instagram Stories and Highlights</span>
              </a>
              <span className="articleSummary">Download Instagram stories and highlights and make them permanent with InstaBig. View full resolution stories and download them to your phone.</span>
            </div>
          </div>
        </li>
        <li className="fl articles">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="download-instagram-reels-online.html" title="Download Instagram Reels Online">
                <img className="articleImg" src="/assets/images/articles-download-instagram-reels-online-318151.webp" alt="Download Instagram Reels Online" />
              </a>
            </div>
            <div className="fl articleBody">
              <a href="download-instagram-reels-online.html" title="Download Instagram Reels Online">
                <span className="articleTitle">Download Instagram Reels Online</span>
              </a>
              <span className="articleSummary">InstaBig to download full resolution Instagram Reels. Download Instagram Reels videos to your phone for free and online.</span>
            </div>
          </div>
        </li>
        <li className="fl articles">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="download-instagram-photos-and-videos.html" title="Download Instagram Photos and Videos">
                <img className="articleImg" src="/assets/images/articles-download-instagram-photos-and-videos-440729.webp" alt="Download Instagram Photos and Videos" />
              </a>
            </div>
            <div className="fl articleBody">
              <a href="download-instagram-photos-and-videos.html" title="Download Instagram Photos and Videos">
                <span className="articleTitle">Download Instagram Photos and Videos</span>
              </a>
              <span className="articleSummary">Download Instagram photos and videos to your phone in full resolution. InstaBig online Instagram photo and video download tool.</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/* FOOTER */}
  <div className="fl footer">
    <Footer />
  </div>
</div>



)
}

export default Posts;