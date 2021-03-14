import React  from "react";

const Footer = () => {
    return (
        <div className="footerInner">
          <ul className="list-style-none">
            <li className="m0 inline-block">
              <img src="https://img.icons8.com/cotton/64/000000/instagram-new.png" className="footerLogo" alt="InstaScrapper"   /><span class="logo-text">Instagram Scrapper</span>
            </li>		
          </ul>
          <ul className="list-style-none">
            <li className="inline-block">
              <a href="javascript:void(0)">English</a>
            </li>
            <li className="inline-block">
              <a href="javascript:void(0)">Contact</a>
            </li>
            <li className="inline-block">
              <a href="javascript:void(0)">Privacy Policy</a>
            </li>
            <li className="inline-block">© 2021 InstaScrapper</li>
          </ul>
          <ul className="list-style-none">
            <li className="inline-block">
              <a href="javascript:void(0)" className="otherLanguages">Foto di profilo Instagram full size</a>
            </li>
            <li className="inline-block">
              <a href="javascript:void(0)" className="otherLanguages">Instagram-profielfoto's op volledige grootte</a>
            </li>
            <li className="inline-block">
              <a href="javascript:void(0)" className="otherLanguages">Instagram-profilbilder i full størrelse</a>
            </li>
          </ul>
        </div>
    )
}

export default Footer;