import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavLinks from '../components/Nav';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
const Profile = () =>{
return (
    <div>
  {/* CONTAINER */}
  <div className="con">
    <div className="conInner">
      <div className="fl conButton">
       <Logo />
      </div>
      <div className="fl conSearch">
        <input type="text" className="inpSearch" autoCorrect="off" autoCapitalize="none" placeholder="Search username" />
        <a id="searchButton" href="javascript:void(0)">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 searchIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
        </a>
      </div>
      <div className="fl taR conButton">
        <a href="javascript:void(0)">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" className="svg-inline--fa fa-history fa-w-16 conIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z" /></svg>
        </a>
      </div>
    </div>
  </div>
  {/* Search results */}
  <div className="searchResultsBox dpN">
    <div id="searchUserInfo" />
  </div>
  {/* BODY */}
  <div className="fl bdy">
    <div className="bdyInner">
      {/* ADS FRAME */}
      <div className="fl ads mb45">
        {/* Blog 1 */}
        <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-6411740468955874" data-ad-slot={9041230977} data-ad-format="auto" data-full-width-responsive="true" />
      </div>
      {/* SEO */}
      <div className="fl description mb45">
        <h1>Instagram Profile Picture Zoom</h1>
        <p>Instagram profile pictures are public pictures of users. You cannot view pictures and stories of a private account unless you follow them, but you can see the profile picture even if you don't follow it. Since these pictures appear small on the profile page, you cannot see the details and you may want to zoom in. But <b>Instagram profile picture does not allow zooming</b>.</p>
        <p>Since profile pictures are public, users choose their best picture as their profile picture. It is publicly visible right above the picture or video shared on the homepage, next to your username in stories, right next to the message you post in messages, in comments, in the profile and in many places. When Instagram users see an effective profile picture, the rate of clicking on that profile is very high. Because the first thing that attracts attention is the profile pictures of the users. For example, in a post where you read their comments, the profile picture attracts your attention first rather than the name of the person who commented or his comment. When you visit a user's profile, the first thing that catches your eye is the profile picture. If the user you are visiting already has a hidden account and you do not follow him, the only thing you can see is the profile picture. If you want to increase your Instagram interactions, we have a little advice for you. Choosing a prominent profile picture will increase the likelihood of users visiting your account. So, how can you zoom in if <i>Instagram profile picture doesn't allow zooming</i>?</p>
        <h2>What is Instagram Profile Picture Zoom?</h2>
        <p>Profile picture zoom is a service that allows you to zoom users' profile pictures, view them in full resolution and download them to your phone. Many websites and applications provide profile picture zooming services on the internet. However, these websites and applications are generally complex and user experience difficult services. So how can you do <i>Instagram profile picture zoom</i> in the easiest and simplest way?</p>
        <h2>How to Zoom Instagram Profile Picture?</h2>
        <p>As you know, Instagram profile picture does not allow zooming and this can be really annoying. Web sites and applications that provide Instagram profile picture zooming and downloading services on the Internet can be very complex and can reach the user in a very difficult way. InstaBig offers you profile picture zooming service with a simple and easy interface. How can you perform <b>Instagram profile picture zoom</b> with InstaBig?</p>
        <ol className="decimal">
          <li>Type the username in the search box above.</li>
          <li>Click on the user whose profile picture you want to zoom in on the search results.</li>
          <li>You have successfully zoomed the Instagram profile picture!</li>
        </ol>
        <p>It's that easy. Moreover, you can download profile pictures to your phone and computer in full resolution and make them permanent.</p>				<img src="images/articles-instagram-profile-picture-zoom-873245.webp" className="articleBigImg" alt="Instagram Profile Picture Zoom" />
        <div className="articleTags mt45"><a href="instagram-profile-photo-zoom.html"><span className="articleTag">Instagram Profile Photo Zoom</span></a><a href="instagram-profile-photo-downloader.html"><span className="articleTag">Instagram Profile Photo Downloader</span></a><a href="full-resolution-instagram-profile-photo.html"><span className="articleTag">Full Resolution Instagram Profile Photo</span></a></div>			</div>
      {/* ARTICLES */}
      <ul className="fl articleList mb45">
        <li className="fl articles">
          <div className="fl articleInner">
            <div className="fl articleThumbnail">
              <a href="download-instagram-stories-and-highlights.html" title="Download Instagram Stories and Highlights">
                <img className="articleImg" src="images/cover-download-instagram-stories-and-highlights-cover-622905.webp" alt="Download Instagram Stories and Highlights" />
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
                <img className="articleImg" src="images/cover-download-instagram-reels-online-cover-318151.webp" alt="Download Instagram Reels Online" />
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
                <img className="articleImg" src="images/cover-download-instagram-photos-and-videos-cover-440729.webp" alt="Download Instagram Photos and Videos" />
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

export default Profile;