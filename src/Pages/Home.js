import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavLinks from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';



const Home = () =>{
  return(
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
        {/* Home 1 */}
        <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-6411740468955874" data-ad-slot={9841524366} data-ad-format="auto" data-full-width-responsive="true" />
      </div>
      <div className="fl popular mb45">
        <span className="popularH1">Popular</span>
        {/* Popular #1 */}
        <a href="amandacerny?ref=popular.html">
          <div className="fl popularPrfInfo">
            <div className="fl popularPrfPic">
              <img id="imgPrfPic" className="popularImgPrfPic" src="/assets/images/instabig.net-ac.jpg" />
            </div>
            <div className="fl popularPrfCont">
              <div className="fl popularPrfContL">
                <div id="prfUsernameDiv" className="fl popularPrfUsername">
                  <span id="prfUsername" className="fw600">amandacerny</span>
                  <div id="prfVerifiedDiv" className="dpN popularMiddleIcon">
                    <svg className="popularPrfVerified" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 432 425"><path id="Subtraction_1" data-name="Subtraction 1" d="M1778.312,1003.579h0l-56.923-27.025-59.175,24.706-40.747-52.728-62.124-5.282-1.843-75.982L1510,825.137l34.834-54.344-15.068-67.882,65.211-19.875,10.822-57.229h71.923L1725.455,590l53.63,40.946h64.072l12.531,59.454,58.293,28.46-13.24,63.931,31.07,56.657-47.2,44.983v64.04l-72.863,11.455-33.439,43.652Zm-128.377-202.6L1629.2,827.787l70.63,56.826,100.7-117.844-26.282-23.257L1694.2,834.346l-44.263-33.367Z" transform="translate(-1505 -584)" fill="#2c96ea" /></svg>
                  </div>
                </div>
                <div id="prfName" className="fl popularPrfName">Amanda 𝕮𝖊𝖗𝖓𝖞</div>
              </div>
            </div>
          </div>
        </a>
        {/* Popular #2 */}
        <a href="hannahstocking?ref=popular.html">
          <div className="fl popularPrfInfo popularML15">
            <div className="fl popularPrfPic">
              <img id="imgPrfPic" className="popularImgPrfPic" src="/assets/images/instabig.net-hs.jpg" />
            </div>
            <div className="fl popularPrfCont">
              <div className="fl popularPrfContL">
                <div id="prfUsernameDiv" className="fl popularPrfUsername">
                  <span id="prfUsername" className="fw600">hannahstocking</span>
                  <div id="prfVerifiedDiv" className="dpN popularMiddleIcon">
                    <svg className="popularPrfVerified" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 432 425"><path id="Subtraction_1" data-name="Subtraction 1" d="M1778.312,1003.579h0l-56.923-27.025-59.175,24.706-40.747-52.728-62.124-5.282-1.843-75.982L1510,825.137l34.834-54.344-15.068-67.882,65.211-19.875,10.822-57.229h71.923L1725.455,590l53.63,40.946h64.072l12.531,59.454,58.293,28.46-13.24,63.931,31.07,56.657-47.2,44.983v64.04l-72.863,11.455-33.439,43.652Zm-128.377-202.6L1629.2,827.787l70.63,56.826,100.7-117.844-26.282-23.257L1694.2,834.346l-44.263-33.367Z" transform="translate(-1505 -584)" fill="#2c96ea" /></svg>
                  </div>
                </div>
                <div id="prfName" className="fl popularPrfName">Hannah Stocking</div>
              </div>
            </div>
          </div>
        </a>
        {/* Popular #3 */}
        <a href="addisonraee?ref=popular.html">
          <div className="fl popularPrfInfo popularML15">
            <div className="fl popularPrfPic">
              <img id="imgPrfPic" className="popularImgPrfPic" src="/assets/images/instabig.net-ar.jpg" />
            </div>
            <div className="fl popularPrfCont">
              <div className="fl popularPrfContL">
                <div id="prfUsernameDiv" className="fl popularPrfUsername">
                  <span id="prfUsername" className="fw600">addisonraee</span>
                  <div id="prfVerifiedDiv" className="dpN popularMiddleIcon">
                    <svg className="popularPrfVerified" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 432 425"><path id="Subtraction_1" data-name="Subtraction 1" d="M1778.312,1003.579h0l-56.923-27.025-59.175,24.706-40.747-52.728-62.124-5.282-1.843-75.982L1510,825.137l34.834-54.344-15.068-67.882,65.211-19.875,10.822-57.229h71.923L1725.455,590l53.63,40.946h64.072l12.531,59.454,58.293,28.46-13.24,63.931,31.07,56.657-47.2,44.983v64.04l-72.863,11.455-33.439,43.652Zm-128.377-202.6L1629.2,827.787l70.63,56.826,100.7-117.844-26.282-23.257L1694.2,834.346l-44.263-33.367Z" transform="translate(-1505 -584)" fill="#2c96ea" /></svg>
                  </div>
                </div>
                <div id="prfName" className="fl popularPrfName">Addison Rae ♥️</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* Nav Bar */}
      <div className="fl navBar mb45">
      <NavLinks />
      </div>
      <div className="fl searchInBody mb45">
        <span className="searchInBodyH1">Search for an Instagram username or paste the post link:</span>
        <input type="text" className="inpSearch inpSearchBody" autoCorrect="off" autoCapitalize="none" placeholder="https://www.instagram.com/p/CH82CJOng28/" />
        <div className="searchResultsBoxInBody dpN">
          <div id="searchUserInfoInBody" />
        </div>
      </div>
      {/* SEO */}
      <div className="fl description mb45">
        <h1>Download Instagram Profile Pictures, Photos, Videos, Stories, Reels and IGTV Videos</h1>
        <p>You can view or download Instagram profile picture, photo, video, story, reels and IGTV videos to your phone and computer in full resolution with Instagram content downloader. Instagram does not allow you to download photos and videos. For this reason, you can only download Instagram content using online free download tools.</p>
        <p>Downloading Instagram content is very easy with InstaBig. You can search by typing the username in the smart search box above, or by pasting the link of any Instagram post (photo, video, reels, IGTV) you can download Instagram posts in full resolution to your phone and computer very easily and quickly.</p>
        <h2>Download Full Resolution Instagram Profile Picture</h2>
        <p>To view and download Instagram profile pictures in full resolution, you can search by typing the username of the user whose profile picture you want to download in the smart search box above, or you can download Instagram profile pictures in full resolution by pasting the Instagram user's profile link.</p>
        <h2>Download Instagram Photo and Video</h2>
        <p>To view and download Instagram photos and videos in full resolution, you can search by typing the username of the user whose posts you want to download in the smart search box above, or you can download Instagram photos and videos in full resolution by pasting the link of any post.</p>
        <h2>Download Instagram Stories</h2>
        <p>To view and download Instagram stories in full resolution, you can search by typing the username of the user whose stories you want to download in the smart search box above and download Instagram stories in full resolution.</p>
        <h2>Download Instagram Reels</h2>
        <p>To view and download Instagram reels in full resolution, you can search by typing the username of the user whose reels you want to download in the smart search box above, or you can download Instagram reels in full resolution by pasting the link of any reels.</p>
        <h2>Download Instagram IGTV</h2>
        <p>To view and download Instagram IGTV videos in full resolution, you can search by typing the username of the user whose IGTV videos you want to download in the smart search box above, or you can download Instagram IGTV videos in full resolution by pasting the link of any IGTV video.</p>
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
                <img className="articleImg" src="/assets/images/cover-instagram-profile-picture-zoom-cover-873245.webp" alt="Instagram Profile Picture Zoom" />
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
                <img className="articleImg" src="/assets/images/cover-download-instagram-stories-and-highlights-cover-622905.webp" alt="Download Instagram Stories and Highlights" />
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
                <img className="articleImg" src="/assets/images/cover-download-instagram-reels-online-cover-318151.webp" alt="Download Instagram Reels Online" />
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
        <li className="fl articles mb0">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="download-instagram-photos-and-videos.html" title="Download Instagram Photos and Videos">
                <img className="articleImg" src="/assets/images/cover-download-instagram-photos-and-videos-cover-440729.webp" alt="Download Instagram Photos and Videos" />
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

export default Home;
