import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavLinks from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
const Profile = () =>{
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