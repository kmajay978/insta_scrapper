import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
const NavLinks = () => {
   
    return(
  
      <div className="nav navHome">
      <Link to="/profile-picture">
        <div className="navIn navInHomePage">
          <div className="middleIcon">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16 navIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" /></svg>
          </div>
          <span className="fs13 navTitles">Profile Picture</span>
        </div>
        </Link>
      <Link to="/posts">
        <div className="navIn navInHomePage">
          <div className="middleIcon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="border-all" className="svg-inline--fa fa-border-all fa-w-14 navIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z" /></svg>
          </div>
          <span className="fs13 navTitles">Posts</span>
        </div>
        </Link>
        <Link to="/stories">
        <div className="navIn navInHomePage">
          <div className="middleIcon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" className="svg-inline--fa fa-spinner fa-w-16 navIcons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
          </div>
          <span className="fs13 navTitles">Stories</span>
        </div>
      </Link>
     
      <Link to="/reels">
      <div className="navIn navInHomePage">
          <div className="middleIcon">
            <svg version="1.1" id="Layer_1" className="navIcons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.14 122.88" style={{enableBackground: 'new 0 0 122.14 122.88'}} xmlSpace="preserve"><g><path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79 l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74 V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69 C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66 v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02 c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08 c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02 c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z" /></g></svg>
          </div>
          <span className="fs13 navTitles">Reels</span>
        </div>
      </Link>
      <Link to="/igtv">
        <div className="navIn navInHomePage">
          <div className="middleIcon">
            <svg version="1.1" id="Layer_1" className="navIcons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.56 122.88" style={{enableBackground: 'new 0 0 108.56 122.88'}} xmlSpace="preserve"><g><path d="M30.47,16.05h12.47l-6.35-7.16c-1.96-2.21-1.75-5.59,0.46-7.55c2.21-1.96,5.59-1.75,7.55,0.46l9.11,10.27L62.81,1.8 c1.96-2.21,5.34-2.42,7.55-0.46c2.21,1.96,2.42,5.34,0.46,7.55l-6.35,7.16h13.62c8.4,0,16.04,3.43,21.57,8.96 c5.49,5.49,8.9,13.05,8.9,21.35v46.21c0,8.3-3.41,15.86-8.9,21.35c-5.53,5.53-13.16,8.96-21.57,8.96H30.47 c-8.4,0-16.04-3.43-21.57-8.96C3.41,108.43,0,100.87,0,92.57V46.36c0-8.3,3.41-15.86,8.9-21.35 C14.43,19.48,22.07,16.05,30.47,16.05L30.47,16.05z M27.88,75.18c-2.86,0.74-5.78-0.98-6.52-3.84c-0.74-2.86,0.98-5.78,3.84-6.52 l28.8-7.45c2.86-0.74,5.78,0.98,6.52,3.84c0.14,0.53,0.19,1.07,0.17,1.59l-0.32,6.38l19.17-5.52c2.84-0.81,5.79,0.83,6.61,3.67 c0.81,2.84-0.83,5.79-3.67,6.61l-26.02,7.5c-0.64,0.23-1.34,0.34-2.06,0.31c-2.95-0.14-5.23-2.65-5.1-5.6l0.33-6.58L27.88,75.18 L27.88,75.18z M78.09,26.48H30.47c-5.4,0-10.31,2.22-13.88,5.78c-3.6,3.6-5.84,8.59-5.84,14.1v46.21c0,5.51,2.24,10.5,5.84,14.1 c3.57,3.57,8.48,5.78,13.88,5.78h47.61c5.4,0,10.31-2.22,13.88-5.78c3.6-3.6,5.84-8.59,5.84-14.1V46.36c0-5.51-2.24-10.5-5.84-14.1 C88.4,28.69,83.49,26.48,78.09,26.48L78.09,26.48z" /></g></svg>
          </div>
          <span className="fs13 navTitles">IGTV</span>
        </div>
      </Link>
    </div>
    )
}
export default NavLinks;



