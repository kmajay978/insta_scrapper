// FUNCTIONS

var showAlertValue = 0;

// searchbox nav function
// var searchVal = '';
// function searchAll() {

// 	var toWorkPasteEvent = setTimeout(function(){

// 		var searchStr = encodeURIComponent(document.getElementsByClassName('inpSearch')[0].value.replace(/\s/g, ''));
// 		var fromUrl = 0;

// 		if (searchVal != document.getElementsByClassName('inpSearch')[0].value) {

// 			searchVal = document.getElementsByClassName('inpSearch')[0].value;

// 			if (document.getElementsByClassName('inpSearch')[0].value.length > 0) {
// 				document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
// 				document.getElementById('searchUserInfo').innerHTML = '<div class="searchLoadingIcon"></div>';
// 			}
// 			else
// 				document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');

// 			// search post with url
// 			if (searchVal.match('instagram.com/p/') != null) {
// 				var regEx = /\/p\/(.*?)\//;
// 				var match = searchVal.match(regEx);
// 				if (match != null) {
// 					var xmlhttp = new XMLHttpRequest();
// 					xmlhttp.onreadystatechange = function() {

// 						if (this.readyState == 4 && this.status == 200) {

// 							if (isJson(this.responseText) == false) {
// 								if (showAlertValue == 0) {
// 									showAlertValue = 1;
// 									showAlert();
// 								}
// 							}
// 							else {
// 								searchObj = JSON.parse(this.responseText);

// 								document.getElementById('searchUserInfo').innerHTML = '';

// 								var searchPrfLink = document.createElement("a");
// 								searchPrfLink.href = "https://instabig.net/p/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
// 								searchPrfLink.classList.add("searchPrfLink");

// 								var searchPrfInfo = document.createElement("div");
// 								searchPrfInfo.classList.add("fl");
// 								searchPrfInfo.classList.add("searchPrfInfo");

// 								var searchPrfPic = document.createElement("div");
// 								searchPrfPic.classList.add("fl");
// 								searchPrfPic.classList.add("searchPrfPic");

// 								var searchImgPrfPic = document.createElement("img");
// 								searchImgPrfPic.classList.add("searchImgPrfPic");
// 								searchImgPrfPic.classList.add("searchImgPrfPicPost");
// 								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
// 								searchPrfPic.appendChild(searchImgPrfPic);

// 								var searchPrfCont = document.createElement("div");
// 								searchPrfCont.classList.add("fl");
// 								searchPrfCont.classList.add("searchPrfCont");

// 								var searchPrfContL = document.createElement("div");
// 								searchPrfContL.classList.add("fl");
// 								searchPrfContL.classList.add("searchPrfContL");

// 								var searchPrfUsername = document.createElement("div");
// 								searchPrfUsername.classList.add("fl");
// 								searchPrfUsername.classList.add("searchPrfUsername");

// 								var searchFw600 = document.createElement("span");
// 								searchFw600.classList.add("fw600");
// 								searchFw600.classList.add("fs14");
// 								searchFw600.innerHTML = 'post by ' + searchObj.graphql.shortcode_media.owner.username;

// 								var searchPrfName = document.createElement("div");
// 								searchPrfName.classList.add("fl");
// 								searchPrfName.classList.add("fs14");
// 								searchPrfName.classList.add("searchPrfName");
// 								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


// 								searchPrfUsername.appendChild(searchFw600);

// 								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
// 									var searchPrfVerifiedDiv = document.createElement("div");
// 									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

// 									var searchPrfVerified = document.createElement("img");
// 									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
// 									searchPrfVerified.classList.add("searchPrfVerified");
// 									searchPrfVerified.classList.add("ml5");

// 									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

// 									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
// 								}

// 								searchPrfContL.appendChild(searchPrfUsername);
// 								searchPrfContL.appendChild(searchPrfName);
// 								searchPrfCont.appendChild(searchPrfContL);

// 								searchPrfInfo.appendChild(searchPrfPic);
// 								searchPrfInfo.appendChild(searchPrfCont);
// 								searchPrfLink.appendChild(searchPrfInfo);

// 								var searchUserInfo = document.getElementById("searchUserInfo");
// 								searchUserInfo.appendChild(searchPrfLink);
// 							}
// 						}
// 						else if (this.status == 404) {
// 							// no post with this id
// 							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 						}
// 					};
// 					xmlhttp.open('GET', 'https://www.instagram.com/p/' + match[1] + '/?__a=1', true);
// 					xmlhttp.send();
// 				}
// 				else {
// 					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 				}
// 			}
// 			// search reel with url
// 			else if (searchVal.match('instagram.com/reel/') != null) {
// 				var regEx = /\/reel\/(.*?)\//;
// 				var match = searchVal.match(regEx);
// 				if (match != null) {
// 					var xmlhttp = new XMLHttpRequest();
// 					xmlhttp.onreadystatechange = function() {

// 						if (this.readyState == 4 && this.status == 200) {

// 							if (isJson(this.responseText) == false) {
// 								if (showAlertValue == 0) {
// 									showAlertValue = 1;
// 									showAlert();
// 								}
// 							}
// 							else {
// 								searchObj = JSON.parse(this.responseText);

// 								document.getElementById('searchUserInfo').innerHTML = '';

// 								var searchPrfLink = document.createElement("a");
// 								searchPrfLink.href = "https://instabig.net/reel/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
// 								searchPrfLink.classList.add("searchPrfLink");

// 								var searchPrfInfo = document.createElement("div");
// 								searchPrfInfo.classList.add("fl");
// 								searchPrfInfo.classList.add("searchPrfInfo");

// 								var searchPrfPic = document.createElement("div");
// 								searchPrfPic.classList.add("fl");
// 								searchPrfPic.classList.add("searchPrfPic");

// 								var searchImgPrfPic = document.createElement("img");
// 								searchImgPrfPic.classList.add("searchImgPrfPic");
// 								searchImgPrfPic.classList.add("searchImgPrfPicPost");
// 								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
// 								searchPrfPic.appendChild(searchImgPrfPic);

// 								var searchPrfCont = document.createElement("div");
// 								searchPrfCont.classList.add("fl");
// 								searchPrfCont.classList.add("searchPrfCont");

// 								var searchPrfContL = document.createElement("div");
// 								searchPrfContL.classList.add("fl");
// 								searchPrfContL.classList.add("searchPrfContL");

// 								var searchPrfUsername = document.createElement("div");
// 								searchPrfUsername.classList.add("fl");
// 								searchPrfUsername.classList.add("searchPrfUsername");

// 								var searchFw600 = document.createElement("span");
// 								searchFw600.classList.add("fw600");
// 								searchFw600.classList.add("fs14");
// 								searchFw600.innerHTML = 'reel by ' + searchObj.graphql.shortcode_media.owner.username;

// 								var searchPrfName = document.createElement("div");
// 								searchPrfName.classList.add("fl");
// 								searchPrfName.classList.add("fs14");
// 								searchPrfName.classList.add("searchPrfName");
// 								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


// 								searchPrfUsername.appendChild(searchFw600);

// 								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
// 									var searchPrfVerifiedDiv = document.createElement("div");
// 									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

// 									var searchPrfVerified = document.createElement("img");
// 									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
// 									searchPrfVerified.classList.add("searchPrfVerified");
// 									searchPrfVerified.classList.add("ml5");

// 									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

// 									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
// 								}

// 								searchPrfContL.appendChild(searchPrfUsername);
// 								searchPrfContL.appendChild(searchPrfName);
// 								searchPrfCont.appendChild(searchPrfContL);

// 								searchPrfInfo.appendChild(searchPrfPic);
// 								searchPrfInfo.appendChild(searchPrfCont);
// 								searchPrfLink.appendChild(searchPrfInfo);

// 								var searchUserInfo = document.getElementById("searchUserInfo");
// 								searchUserInfo.appendChild(searchPrfLink);
// 							}
// 						}
// 						else if (this.status == 404) {
// 							// no reel with this id
// 							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 						}
// 					};
// 					xmlhttp.open('GET', 'https://www.instagram.com/reel/' + match[1] + '/?__a=1', true);
// 					xmlhttp.send();
// 				}
// 				else {
// 					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 				}
// 			}
// 			// search igtv with url
// 			else if (searchVal.match('instagram.com/tv/') != null) {
// 				var regEx = /\/tv\/(.*?)\//;
// 				var match = searchVal.match(regEx);
// 				if (match != null) {
// 					var xmlhttp = new XMLHttpRequest();
// 					xmlhttp.onreadystatechange = function() {

// 						if (this.readyState == 4 && this.status == 200) {

// 							if (isJson(this.responseText) == false) {
// 								if (showAlertValue == 0) {
// 									showAlertValue = 1;
// 									showAlert();
// 								}
// 							}
// 							else {
// 								searchObj = JSON.parse(this.responseText);

// 								document.getElementById('searchUserInfo').innerHTML = '';

// 								var searchPrfLink = document.createElement("a");
// 								searchPrfLink.href = "https://instabig.net/tv/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
// 								searchPrfLink.classList.add("searchPrfLink");

// 								var searchPrfInfo = document.createElement("div");
// 								searchPrfInfo.classList.add("fl");
// 								searchPrfInfo.classList.add("searchPrfInfo");

// 								var searchPrfPic = document.createElement("div");
// 								searchPrfPic.classList.add("fl");
// 								searchPrfPic.classList.add("searchPrfPic");

// 								var searchImgPrfPic = document.createElement("img");
// 								searchImgPrfPic.classList.add("searchImgPrfPic");
// 								searchImgPrfPic.classList.add("searchImgPrfPicPost");
// 								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
// 								searchPrfPic.appendChild(searchImgPrfPic);

// 								var searchPrfCont = document.createElement("div");
// 								searchPrfCont.classList.add("fl");
// 								searchPrfCont.classList.add("searchPrfCont");

// 								var searchPrfContL = document.createElement("div");
// 								searchPrfContL.classList.add("fl");
// 								searchPrfContL.classList.add("searchPrfContL");

// 								var searchPrfUsername = document.createElement("div");
// 								searchPrfUsername.classList.add("fl");
// 								searchPrfUsername.classList.add("searchPrfUsername");

// 								var searchFw600 = document.createElement("span");
// 								searchFw600.classList.add("fw600");
// 								searchFw600.classList.add("fs14");
// 								searchFw600.innerHTML = 'IGTV by ' + searchObj.graphql.shortcode_media.owner.username;

// 								var searchPrfName = document.createElement("div");
// 								searchPrfName.classList.add("fl");
// 								searchPrfName.classList.add("fs14");
// 								searchPrfName.classList.add("searchPrfName");
// 								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


// 								searchPrfUsername.appendChild(searchFw600);

// 								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
// 									var searchPrfVerifiedDiv = document.createElement("div");
// 									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

// 									var searchPrfVerified = document.createElement("img");
// 									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
// 									searchPrfVerified.classList.add("searchPrfVerified");
// 									searchPrfVerified.classList.add("ml5");

// 									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

// 									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
// 								}

// 								searchPrfContL.appendChild(searchPrfUsername);
// 								searchPrfContL.appendChild(searchPrfName);
// 								searchPrfCont.appendChild(searchPrfContL);

// 								searchPrfInfo.appendChild(searchPrfPic);
// 								searchPrfInfo.appendChild(searchPrfCont);
// 								searchPrfLink.appendChild(searchPrfInfo);

// 								var searchUserInfo = document.getElementById("searchUserInfo");
// 								searchUserInfo.appendChild(searchPrfLink);
// 							}
// 						}
// 						else if (this.status == 404) {
// 							// no igtv with this id
// 							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 						}
// 					};
// 					xmlhttp.open('GET', 'https://www.instagram.com/tv/' + match[1] + '/?__a=1', true);
// 					xmlhttp.send();
// 				}
// 				else {
// 					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 				}
// 			}
// 			// search with url
// 			else if (searchVal.match('instagram.com') != null) {
// 				var regEx = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
// 				var match = searchVal.match(regEx);
// 				if (match != null) {
// 					var xmlhttp = new XMLHttpRequest();
// 					xmlhttp.onreadystatechange = function() {

// 						if (this.readyState == 4 && this.status == 200) {

// 							if (isJson(this.responseText) == false) {
// 								if (showAlertValue == 0) {
// 									showAlertValue = 1;
// 									showAlert();
// 								}
// 							}
// 							else {
// 								searchObj = JSON.parse(this.responseText);
// 								for (var i = 0; i < searchObj.users.length; i++) {
// 									if (searchObj.users[i].user.username == match[1]) {
// 										document.getElementById('searchUserInfo').innerHTML = '';

// 										var searchPrfLink = document.createElement("a");
// 										searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box';
// 										searchPrfLink.classList.add("searchPrfLink");

// 										var searchPrfInfo = document.createElement("div");
// 										searchPrfInfo.classList.add("fl");
// 										searchPrfInfo.classList.add("searchPrfInfo");

// 										var searchPrfPic = document.createElement("div");
// 										searchPrfPic.classList.add("fl");
// 										searchPrfPic.classList.add("searchPrfPic");

// 										var searchImgPrfPic = document.createElement("img");
// 										searchImgPrfPic.classList.add("searchImgPrfPic");
// 										searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
// 										searchPrfPic.appendChild(searchImgPrfPic);

// 										var searchPrfCont = document.createElement("div");
// 										searchPrfCont.classList.add("fl");
// 										searchPrfCont.classList.add("searchPrfCont");

// 										var searchPrfContL = document.createElement("div");
// 										searchPrfContL.classList.add("fl");
// 										searchPrfContL.classList.add("searchPrfContL");

// 										var searchPrfUsername = document.createElement("div");
// 										searchPrfUsername.classList.add("fl");
// 										searchPrfUsername.classList.add("searchPrfUsername");

// 										var searchFw600 = document.createElement("span");
// 										searchFw600.classList.add("fw600");
// 										searchFw600.classList.add("fs14");
// 										searchFw600.innerHTML = searchObj.users[i].user.username;

// 										var searchPrfName = document.createElement("div");
// 										searchPrfName.classList.add("fl");
// 										searchPrfName.classList.add("fs14");
// 										searchPrfName.classList.add("searchPrfName");
// 										searchPrfName.innerHTML = searchObj.users[i].user.full_name;


// 										searchPrfUsername.appendChild(searchFw600);

// 										if (searchObj.users[i].user.is_verified == true) {
// 											var searchPrfVerifiedDiv = document.createElement("div");
// 											searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

// 											var searchPrfVerified = document.createElement("img");
// 											searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
// 											searchPrfVerified.classList.add("searchPrfVerified");
// 											searchPrfVerified.classList.add("ml5");

// 											searchPrfVerifiedDiv.appendChild(searchPrfVerified);

// 											searchPrfUsername.appendChild(searchPrfVerifiedDiv);
// 										}

// 										searchPrfContL.appendChild(searchPrfUsername);
// 										searchPrfContL.appendChild(searchPrfName);
// 										searchPrfCont.appendChild(searchPrfContL);

// 										searchPrfInfo.appendChild(searchPrfPic);
// 										searchPrfInfo.appendChild(searchPrfCont);
// 										searchPrfLink.appendChild(searchPrfInfo);

// 										var searchUserInfo = document.getElementById("searchUserInfo");
// 										searchUserInfo.appendChild(searchPrfLink);

// 										break;
// 									}
// 								}
// 							}
// 						}
// 						else if (this.status == 404) {
// 							// no user with this username
// 							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 						}
// 					};
// 					xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?context=user&query=' + match[1], true);
// 					xmlhttp.send();
// 				}
// 				else {
// 					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
// 				}
// 			}
// 			// search with string
// 			else {
// 				var searchSetTimeout = setTimeout(function(){
// 					if (searchStr == encodeURIComponent(document.getElementsByClassName('inpSearch')[0].value.replace(/\s/g, ''))) {
// 						var xmlhttp = new XMLHttpRequest();
// 						xmlhttp.onreadystatechange = function() {

// 							if (this.readyState == 4 && this.status == 200) {

// 								if (isJson(this.responseText) == false) {
// 									if (showAlertValue == 0) {
// 										showAlertValue = 1;
// 										showAlert();
// 									}
// 								}
// 								else {
// 									searchObj = JSON.parse(this.responseText);

// 									if (searchObj.users.length > 0 || searchObj.hashtags.length > 0)
// 										document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
// 									else
// 										document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');


// 									document.getElementById('searchUserInfo').innerHTML = '';

// 									// users result
// 									for (var i = 0; i < searchObj.users.length; i++) {

// 										var searchPrfLink = document.createElement("a");
// 										searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box';
// 										searchPrfLink.classList.add("searchPrfLink");

// 										var searchPrfInfo = document.createElement("div");
// 										searchPrfInfo.classList.add("fl");
// 										searchPrfInfo.classList.add("searchPrfInfo");

// 										var searchPrfPic = document.createElement("div");
// 										searchPrfPic.classList.add("fl");
// 										searchPrfPic.classList.add("searchPrfPic");

// 										var searchImgPrfPic = document.createElement("img");
// 										searchImgPrfPic.classList.add("searchImgPrfPic");
// 										searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
// 										searchPrfPic.appendChild(searchImgPrfPic);

// 										var searchPrfCont = document.createElement("div");
// 										searchPrfCont.classList.add("fl");
// 										searchPrfCont.classList.add("searchPrfCont");

// 										var searchPrfContL = document.createElement("div");
// 										searchPrfContL.classList.add("fl");
// 										searchPrfContL.classList.add("searchPrfContL");

// 										var searchPrfUsername = document.createElement("div");
// 										searchPrfUsername.classList.add("fl");
// 										searchPrfUsername.classList.add("searchPrfUsername");

// 										var searchFw600 = document.createElement("span");
// 										searchFw600.classList.add("fw600");
// 										searchFw600.classList.add("fs14");
// 										searchFw600.innerHTML = searchObj.users[i].user.username;

// 										var searchPrfName = document.createElement("div");
// 										searchPrfName.classList.add("fl");
// 										searchPrfName.classList.add("fs14");
// 										searchPrfName.classList.add("searchPrfName");
// 										searchPrfName.innerHTML = searchObj.users[i].user.full_name;


// 										searchPrfUsername.appendChild(searchFw600);

// 										if (searchObj.users[i].user.is_verified == true) {
// 											var searchPrfVerifiedDiv = document.createElement("div");
// 											searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

// 											var searchPrfVerified = document.createElement("img");
// 											searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
// 											searchPrfVerified.classList.add("searchPrfVerified");
// 											searchPrfVerified.classList.add("ml5");

// 											searchPrfVerifiedDiv.appendChild(searchPrfVerified);

// 											searchPrfUsername.appendChild(searchPrfVerifiedDiv);
// 										}

// 										searchPrfContL.appendChild(searchPrfUsername);
// 										searchPrfContL.appendChild(searchPrfName);
// 										searchPrfCont.appendChild(searchPrfContL);

// 										searchPrfInfo.appendChild(searchPrfPic);
// 										searchPrfInfo.appendChild(searchPrfCont);
// 										searchPrfLink.appendChild(searchPrfInfo);

// 										var searchUserInfo = document.getElementById("searchUserInfo");
// 										searchUserInfo.appendChild(searchPrfLink);
// 									}

// 									// hashtags result
// 									for (var i = 0; i < searchObj.hashtags.length; i++) {
// 										console.log(encodeURIComponent(searchObj.hashtags[i].hashtag.name));

// 										var searchPrfLink = document.createElement("a");
// 										searchPrfLink.href = encodeURI("https://instabig.net/hashtag/" + searchObj.hashtags[i].hashtag.name + '?ref=search_box');
// 										searchPrfLink.classList.add("searchPrfLink");

// 										var searchPrfInfo = document.createElement("div");
// 										searchPrfInfo.classList.add("fl");
// 										searchPrfInfo.classList.add("searchPrfInfo");

// 										var searchPrfPic = document.createElement("div");
// 										searchPrfPic.classList.add("fl");
// 										searchPrfPic.classList.add("searchPrfPic");

// 										var searchImgPrfPic = document.createElement("img");
// 										searchImgPrfPic.classList.add("searchImgPrfPic");
// 										searchImgPrfPic.src = searchObj.hashtags[i].hashtag.profile_pic_url;
// 										searchPrfPic.appendChild(searchImgPrfPic);

// 										var searchPrfCont = document.createElement("div");
// 										searchPrfCont.classList.add("fl");
// 										searchPrfCont.classList.add("searchPrfCont");

// 										var searchPrfContL = document.createElement("div");
// 										searchPrfContL.classList.add("fl");
// 										searchPrfContL.classList.add("searchPrfContL");

// 										var searchPrfUsername = document.createElement("div");
// 										searchPrfUsername.classList.add("fl");
// 										searchPrfUsername.classList.add("searchPrfUsername");

// 										var searchFw600 = document.createElement("span");
// 										searchFw600.classList.add("fw600");
// 										searchFw600.classList.add("fs14");
// 										searchFw600.innerHTML = '#' + searchObj.hashtags[i].hashtag.name;

// 										var searchPrfName = document.createElement("div");
// 										searchPrfName.classList.add("fl");
// 										searchPrfName.classList.add("fs14");
// 										searchPrfName.classList.add("searchPrfName");
// 										searchPrfName.innerHTML = searchObj.hashtags[i].hashtag.media_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' posts';


// 										searchPrfUsername.appendChild(searchFw600);

// 										searchPrfContL.appendChild(searchPrfUsername);
// 										searchPrfContL.appendChild(searchPrfName);
// 										searchPrfCont.appendChild(searchPrfContL);

// 										searchPrfInfo.appendChild(searchPrfPic);
// 										searchPrfInfo.appendChild(searchPrfCont);
// 										searchPrfLink.appendChild(searchPrfInfo);

// 										var searchUserInfo = document.getElementById("searchUserInfo");
// 										searchUserInfo.appendChild(searchPrfLink);
// 									}
// 								}
// 							}
// 						};
// 						xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?query=' + searchStr, true);
// 						xmlhttp.send();
// 					}
// 				}, 1500);
// 			}
// 		}
// 	}, 4);
// }


// searchbox nav function new
var searchVal = '';
function searchAll() {

	var toWorkPasteEvent = setTimeout(function(){

		var searchStr = encodeURIComponent(document.getElementsByClassName('inpSearch')[0].value.replace(/\s/g, ''));
		var fromUrl = 0;

		if (searchVal != document.getElementsByClassName('inpSearch')[0].value) {

			searchVal = document.getElementsByClassName('inpSearch')[0].value;

			// if (document.getElementsByClassName('inpSearch')[0].value.length > 0) {
			// 	document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
			// 	document.getElementById('searchUserInfo').innerHTML = '<div class="searchLoadingIcon"></div>';
			// }
			// else
			// 	document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');

			// search post with url
			if (searchVal.match('instagram.com/p/') != null) {

				if (document.getElementsByClassName('inpSearch')[0].value.length > 0 && document.getElementsByClassName('searchResultsBox')[0].classList.contains('dpN')) {
					console.log(document.getElementsByClassName('inpSearch')[0].value.length);
					document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
					document.getElementById('searchUserInfo').innerHTML = '<div class="searchLoadingIcon"></div>';
				}

				if (document.getElementsByClassName('inpSearch')[0].value.length == 0) {
					console.log(document.getElementsByClassName('inpSearch')[0].value.length);
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
				}

				var regEx = /\/p\/(.*?)\//;
				var match = searchVal.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {

							if (isJson(this.responseText) == false) {
								if (showAlertValue == 0) {
									showAlertValue = 1;
									showAlert();
								}
							}
							else {
								searchObj = JSON.parse(this.responseText);

								document.getElementById('searchUserInfo').innerHTML = '';

								var searchPrfLink = document.createElement("a");
								searchPrfLink.href = "https://instabig.net/p/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
								searchPrfLink.classList.add("searchPrfLink");

								var searchPrfInfo = document.createElement("div");
								searchPrfInfo.classList.add("fl");
								searchPrfInfo.classList.add("searchPrfInfo");

								var searchPrfPic = document.createElement("div");
								searchPrfPic.classList.add("fl");
								searchPrfPic.classList.add("searchPrfPic");

								var searchImgPrfPic = document.createElement("img");
								searchImgPrfPic.classList.add("searchImgPrfPic");
								searchImgPrfPic.classList.add("searchImgPrfPicPost");
								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
								searchPrfPic.appendChild(searchImgPrfPic);

								var searchPrfCont = document.createElement("div");
								searchPrfCont.classList.add("fl");
								searchPrfCont.classList.add("searchPrfCont");

								var searchPrfContL = document.createElement("div");
								searchPrfContL.classList.add("fl");
								searchPrfContL.classList.add("searchPrfContL");

								var searchPrfUsername = document.createElement("div");
								searchPrfUsername.classList.add("fl");
								searchPrfUsername.classList.add("searchPrfUsername");

								var searchFw600 = document.createElement("span");
								searchFw600.classList.add("fw600");
								searchFw600.classList.add("fs14");
								searchFw600.innerHTML = 'post by ' + searchObj.graphql.shortcode_media.owner.username;

								var searchPrfName = document.createElement("div");
								searchPrfName.classList.add("fl");
								searchPrfName.classList.add("fs14");
								searchPrfName.classList.add("searchPrfName");
								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


								searchPrfUsername.appendChild(searchFw600);

								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
									var searchPrfVerifiedDiv = document.createElement("div");
									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

									var searchPrfVerified = document.createElement("img");
									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
									searchPrfVerified.classList.add("searchPrfVerified");
									searchPrfVerified.classList.add("ml5");

									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
								}

								searchPrfContL.appendChild(searchPrfUsername);
								searchPrfContL.appendChild(searchPrfName);
								searchPrfCont.appendChild(searchPrfContL);

								searchPrfInfo.appendChild(searchPrfPic);
								searchPrfInfo.appendChild(searchPrfCont);
								searchPrfLink.appendChild(searchPrfInfo);

								var searchUserInfo = document.getElementById("searchUserInfo");
								searchUserInfo.appendChild(searchPrfLink);
							}
						}
						else if (this.status == 404) {
							// no post with this id
							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/p/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
				}
			}
			// search reel with url
			else if (searchVal.match('instagram.com/reel/') != null) {

				if (document.getElementsByClassName('inpSearch')[0].value.length > 0 && document.getElementsByClassName('searchResultsBox')[0].classList.contains('dpN')) {
					document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
					document.getElementById('searchUserInfo').innerHTML = '<div class="searchLoadingIcon"></div>';
				}
				else
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');

				var regEx = /\/reel\/(.*?)\//;
				var match = searchVal.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {

							if (isJson(this.responseText) == false) {
								if (showAlertValue == 0) {
									showAlertValue = 1;
									showAlert();
								}
							}
							else {
								searchObj = JSON.parse(this.responseText);

								document.getElementById('searchUserInfo').innerHTML = '';

								var searchPrfLink = document.createElement("a");
								searchPrfLink.href = "https://instabig.net/reel/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
								searchPrfLink.classList.add("searchPrfLink");

								var searchPrfInfo = document.createElement("div");
								searchPrfInfo.classList.add("fl");
								searchPrfInfo.classList.add("searchPrfInfo");

								var searchPrfPic = document.createElement("div");
								searchPrfPic.classList.add("fl");
								searchPrfPic.classList.add("searchPrfPic");

								var searchImgPrfPic = document.createElement("img");
								searchImgPrfPic.classList.add("searchImgPrfPic");
								searchImgPrfPic.classList.add("searchImgPrfPicPost");
								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
								searchPrfPic.appendChild(searchImgPrfPic);

								var searchPrfCont = document.createElement("div");
								searchPrfCont.classList.add("fl");
								searchPrfCont.classList.add("searchPrfCont");

								var searchPrfContL = document.createElement("div");
								searchPrfContL.classList.add("fl");
								searchPrfContL.classList.add("searchPrfContL");

								var searchPrfUsername = document.createElement("div");
								searchPrfUsername.classList.add("fl");
								searchPrfUsername.classList.add("searchPrfUsername");

								var searchFw600 = document.createElement("span");
								searchFw600.classList.add("fw600");
								searchFw600.classList.add("fs14");
								searchFw600.innerHTML = 'reel by ' + searchObj.graphql.shortcode_media.owner.username;

								var searchPrfName = document.createElement("div");
								searchPrfName.classList.add("fl");
								searchPrfName.classList.add("fs14");
								searchPrfName.classList.add("searchPrfName");
								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


								searchPrfUsername.appendChild(searchFw600);

								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
									var searchPrfVerifiedDiv = document.createElement("div");
									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

									var searchPrfVerified = document.createElement("img");
									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
									searchPrfVerified.classList.add("searchPrfVerified");
									searchPrfVerified.classList.add("ml5");

									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
								}

								searchPrfContL.appendChild(searchPrfUsername);
								searchPrfContL.appendChild(searchPrfName);
								searchPrfCont.appendChild(searchPrfContL);

								searchPrfInfo.appendChild(searchPrfPic);
								searchPrfInfo.appendChild(searchPrfCont);
								searchPrfLink.appendChild(searchPrfInfo);

								var searchUserInfo = document.getElementById("searchUserInfo");
								searchUserInfo.appendChild(searchPrfLink);
							}
						}
						else if (this.status == 404) {
							// no reel with this id
							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/reel/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
				}
			}
			// search igtv with url
			else if (searchVal.match('instagram.com/tv/') != null) {

				if (document.getElementsByClassName('inpSearch')[0].value.length > 0 && document.getElementsByClassName('searchResultsBox')[0].classList.contains('dpN')) {
					document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
					document.getElementById('searchUserInfo').innerHTML = '<div class="searchLoadingIcon"></div>';
				}
				else
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');

				var regEx = /\/tv\/(.*?)\//;
				var match = searchVal.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {

							if (isJson(this.responseText) == false) {
								if (showAlertValue == 0) {
									showAlertValue = 1;
									showAlert();
								}
							}
							else {
								searchObj = JSON.parse(this.responseText);

								document.getElementById('searchUserInfo').innerHTML = '';

								var searchPrfLink = document.createElement("a");
								searchPrfLink.href = "https://instabig.net/tv/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box';
								searchPrfLink.classList.add("searchPrfLink");

								var searchPrfInfo = document.createElement("div");
								searchPrfInfo.classList.add("fl");
								searchPrfInfo.classList.add("searchPrfInfo");

								var searchPrfPic = document.createElement("div");
								searchPrfPic.classList.add("fl");
								searchPrfPic.classList.add("searchPrfPic");

								var searchImgPrfPic = document.createElement("img");
								searchImgPrfPic.classList.add("searchImgPrfPic");
								searchImgPrfPic.classList.add("searchImgPrfPicPost");
								searchImgPrfPic.src = searchObj.graphql.shortcode_media.display_url;
								searchPrfPic.appendChild(searchImgPrfPic);

								var searchPrfCont = document.createElement("div");
								searchPrfCont.classList.add("fl");
								searchPrfCont.classList.add("searchPrfCont");

								var searchPrfContL = document.createElement("div");
								searchPrfContL.classList.add("fl");
								searchPrfContL.classList.add("searchPrfContL");

								var searchPrfUsername = document.createElement("div");
								searchPrfUsername.classList.add("fl");
								searchPrfUsername.classList.add("searchPrfUsername");

								var searchFw600 = document.createElement("span");
								searchFw600.classList.add("fw600");
								searchFw600.classList.add("fs14");
								searchFw600.innerHTML = 'IGTV by ' + searchObj.graphql.shortcode_media.owner.username;

								var searchPrfName = document.createElement("div");
								searchPrfName.classList.add("fl");
								searchPrfName.classList.add("fs14");
								searchPrfName.classList.add("searchPrfName");
								searchPrfName.innerHTML = searchObj.graphql.shortcode_media.owner.full_name;


								searchPrfUsername.appendChild(searchFw600);

								if (searchObj.graphql.shortcode_media.owner.is_verified == true) {
									var searchPrfVerifiedDiv = document.createElement("div");
									searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

									var searchPrfVerified = document.createElement("img");
									searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
									searchPrfVerified.classList.add("searchPrfVerified");
									searchPrfVerified.classList.add("ml5");

									searchPrfVerifiedDiv.appendChild(searchPrfVerified);

									searchPrfUsername.appendChild(searchPrfVerifiedDiv);
								}

								searchPrfContL.appendChild(searchPrfUsername);
								searchPrfContL.appendChild(searchPrfName);
								searchPrfCont.appendChild(searchPrfContL);

								searchPrfInfo.appendChild(searchPrfPic);
								searchPrfInfo.appendChild(searchPrfCont);
								searchPrfLink.appendChild(searchPrfInfo);

								var searchUserInfo = document.getElementById("searchUserInfo");
								searchUserInfo.appendChild(searchPrfLink);
							}
						}
						else if (this.status == 404) {
							// no igtv with this id
							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/tv/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
				}
			}
			// search with url
			// else if (searchVal.match('instagram.com') != null) {
			// 	var regEx = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
			// 	var match = searchVal.match(regEx);
			// 	if (match != null) {
			// 		var xmlhttp = new XMLHttpRequest();
			// 		xmlhttp.onreadystatechange = function() {

			// 			if (this.readyState == 4 && this.status == 200) {

			// 				if (isJson(this.responseText) == false) {
			// 					if (showAlertValue == 0) {
			// 						showAlertValue = 1;
			// 						showAlert();
			// 					}
			// 				}
			// 				else {
			// 					searchObj = JSON.parse(this.responseText);
			// 					for (var i = 0; i < searchObj.users.length; i++) {
			// 						if (searchObj.users[i].user.username == match[1]) {
			// 							document.getElementById('searchUserInfo').innerHTML = '';

			// 							var searchPrfLink = document.createElement("a");
			// 							searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box';
			// 							searchPrfLink.classList.add("searchPrfLink");

			// 							var searchPrfInfo = document.createElement("div");
			// 							searchPrfInfo.classList.add("fl");
			// 							searchPrfInfo.classList.add("searchPrfInfo");

			// 							var searchPrfPic = document.createElement("div");
			// 							searchPrfPic.classList.add("fl");
			// 							searchPrfPic.classList.add("searchPrfPic");

			// 							var searchImgPrfPic = document.createElement("img");
			// 							searchImgPrfPic.classList.add("searchImgPrfPic");
			// 							searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
			// 							searchPrfPic.appendChild(searchImgPrfPic);

			// 							var searchPrfCont = document.createElement("div");
			// 							searchPrfCont.classList.add("fl");
			// 							searchPrfCont.classList.add("searchPrfCont");

			// 							var searchPrfContL = document.createElement("div");
			// 							searchPrfContL.classList.add("fl");
			// 							searchPrfContL.classList.add("searchPrfContL");

			// 							var searchPrfUsername = document.createElement("div");
			// 							searchPrfUsername.classList.add("fl");
			// 							searchPrfUsername.classList.add("searchPrfUsername");

			// 							var searchFw600 = document.createElement("span");
			// 							searchFw600.classList.add("fw600");
			// 							searchFw600.classList.add("fs14");
			// 							searchFw600.innerHTML = searchObj.users[i].user.username;

			// 							var searchPrfName = document.createElement("div");
			// 							searchPrfName.classList.add("fl");
			// 							searchPrfName.classList.add("fs14");
			// 							searchPrfName.classList.add("searchPrfName");
			// 							searchPrfName.innerHTML = searchObj.users[i].user.full_name;


			// 							searchPrfUsername.appendChild(searchFw600);

			// 							if (searchObj.users[i].user.is_verified == true) {
			// 								var searchPrfVerifiedDiv = document.createElement("div");
			// 								searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

			// 								var searchPrfVerified = document.createElement("img");
			// 								searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
			// 								searchPrfVerified.classList.add("searchPrfVerified");
			// 								searchPrfVerified.classList.add("ml5");

			// 								searchPrfVerifiedDiv.appendChild(searchPrfVerified);

			// 								searchPrfUsername.appendChild(searchPrfVerifiedDiv);
			// 							}

			// 							searchPrfContL.appendChild(searchPrfUsername);
			// 							searchPrfContL.appendChild(searchPrfName);
			// 							searchPrfCont.appendChild(searchPrfContL);

			// 							searchPrfInfo.appendChild(searchPrfPic);
			// 							searchPrfInfo.appendChild(searchPrfCont);
			// 							searchPrfLink.appendChild(searchPrfInfo);

			// 							var searchUserInfo = document.getElementById("searchUserInfo");
			// 							searchUserInfo.appendChild(searchPrfLink);

			// 							break;
			// 						}
			// 					}
			// 				}
			// 			}
			// 			else if (this.status == 404) {
			// 				// no user with this username
			// 				document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
			// 			}
			// 		};
			// 		xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?context=user&query=' + match[1], true);
			// 		xmlhttp.send();
			// 	}
			// 	else {
			// 		document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
			// 	}
			// }
			// // search with string
			// else {
			// 	var searchSetTimeout = setTimeout(function(){
			// 		if (searchStr == encodeURIComponent(document.getElementsByClassName('inpSearch')[0].value.replace(/\s/g, ''))) {
			// 			var xmlhttp = new XMLHttpRequest();
			// 			xmlhttp.onreadystatechange = function() {

			// 				if (this.readyState == 4 && this.status == 200) {

			// 					if (isJson(this.responseText) == false) {
			// 						if (showAlertValue == 0) {
			// 							showAlertValue = 1;
			// 							showAlert();
			// 						}
			// 					}
			// 					else {
			// 						searchObj = JSON.parse(this.responseText);

			// 						if (searchObj.users.length > 0 || searchObj.hashtags.length > 0)
			// 							document.getElementsByClassName('searchResultsBox')[0].classList.remove('dpN');
			// 						else
			// 							document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');


			// 						document.getElementById('searchUserInfo').innerHTML = '';

			// 						// users result
			// 						for (var i = 0; i < searchObj.users.length; i++) {

			// 							var searchPrfLink = document.createElement("a");
			// 							searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box';
			// 							searchPrfLink.classList.add("searchPrfLink");

			// 							var searchPrfInfo = document.createElement("div");
			// 							searchPrfInfo.classList.add("fl");
			// 							searchPrfInfo.classList.add("searchPrfInfo");

			// 							var searchPrfPic = document.createElement("div");
			// 							searchPrfPic.classList.add("fl");
			// 							searchPrfPic.classList.add("searchPrfPic");

			// 							var searchImgPrfPic = document.createElement("img");
			// 							searchImgPrfPic.classList.add("searchImgPrfPic");
			// 							searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
			// 							searchPrfPic.appendChild(searchImgPrfPic);

			// 							var searchPrfCont = document.createElement("div");
			// 							searchPrfCont.classList.add("fl");
			// 							searchPrfCont.classList.add("searchPrfCont");

			// 							var searchPrfContL = document.createElement("div");
			// 							searchPrfContL.classList.add("fl");
			// 							searchPrfContL.classList.add("searchPrfContL");

			// 							var searchPrfUsername = document.createElement("div");
			// 							searchPrfUsername.classList.add("fl");
			// 							searchPrfUsername.classList.add("searchPrfUsername");

			// 							var searchFw600 = document.createElement("span");
			// 							searchFw600.classList.add("fw600");
			// 							searchFw600.classList.add("fs14");
			// 							searchFw600.innerHTML = searchObj.users[i].user.username;

			// 							var searchPrfName = document.createElement("div");
			// 							searchPrfName.classList.add("fl");
			// 							searchPrfName.classList.add("fs14");
			// 							searchPrfName.classList.add("searchPrfName");
			// 							searchPrfName.innerHTML = searchObj.users[i].user.full_name;


			// 							searchPrfUsername.appendChild(searchFw600);

			// 							if (searchObj.users[i].user.is_verified == true) {
			// 								var searchPrfVerifiedDiv = document.createElement("div");
			// 								searchPrfVerifiedDiv.classList.add("searchMiddleIcon");

			// 								var searchPrfVerified = document.createElement("img");
			// 								searchPrfVerified.src = "https://instabig.net/cdn/icons/verified.svg";
			// 								searchPrfVerified.classList.add("searchPrfVerified");
			// 								searchPrfVerified.classList.add("ml5");

			// 								searchPrfVerifiedDiv.appendChild(searchPrfVerified);

			// 								searchPrfUsername.appendChild(searchPrfVerifiedDiv);
			// 							}

			// 							searchPrfContL.appendChild(searchPrfUsername);
			// 							searchPrfContL.appendChild(searchPrfName);
			// 							searchPrfCont.appendChild(searchPrfContL);

			// 							searchPrfInfo.appendChild(searchPrfPic);
			// 							searchPrfInfo.appendChild(searchPrfCont);
			// 							searchPrfLink.appendChild(searchPrfInfo);

			// 							var searchUserInfo = document.getElementById("searchUserInfo");
			// 							searchUserInfo.appendChild(searchPrfLink);
			// 						}

			// 						// hashtags result
			// 						for (var i = 0; i < searchObj.hashtags.length; i++) {
			// 							console.log(encodeURIComponent(searchObj.hashtags[i].hashtag.name));

			// 							var searchPrfLink = document.createElement("a");
			// 							searchPrfLink.href = encodeURI("https://instabig.net/hashtag/" + searchObj.hashtags[i].hashtag.name + '?ref=search_box');
			// 							searchPrfLink.classList.add("searchPrfLink");

			// 							var searchPrfInfo = document.createElement("div");
			// 							searchPrfInfo.classList.add("fl");
			// 							searchPrfInfo.classList.add("searchPrfInfo");

			// 							var searchPrfPic = document.createElement("div");
			// 							searchPrfPic.classList.add("fl");
			// 							searchPrfPic.classList.add("searchPrfPic");

			// 							var searchImgPrfPic = document.createElement("img");
			// 							searchImgPrfPic.classList.add("searchImgPrfPic");
			// 							searchImgPrfPic.src = searchObj.hashtags[i].hashtag.profile_pic_url;
			// 							searchPrfPic.appendChild(searchImgPrfPic);

			// 							var searchPrfCont = document.createElement("div");
			// 							searchPrfCont.classList.add("fl");
			// 							searchPrfCont.classList.add("searchPrfCont");

			// 							var searchPrfContL = document.createElement("div");
			// 							searchPrfContL.classList.add("fl");
			// 							searchPrfContL.classList.add("searchPrfContL");

			// 							var searchPrfUsername = document.createElement("div");
			// 							searchPrfUsername.classList.add("fl");
			// 							searchPrfUsername.classList.add("searchPrfUsername");

			// 							var searchFw600 = document.createElement("span");
			// 							searchFw600.classList.add("fw600");
			// 							searchFw600.classList.add("fs14");
			// 							searchFw600.innerHTML = '#' + searchObj.hashtags[i].hashtag.name;

			// 							var searchPrfName = document.createElement("div");
			// 							searchPrfName.classList.add("fl");
			// 							searchPrfName.classList.add("fs14");
			// 							searchPrfName.classList.add("searchPrfName");
			// 							searchPrfName.innerHTML = searchObj.hashtags[i].hashtag.media_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' posts';


			// 							searchPrfUsername.appendChild(searchFw600);

			// 							searchPrfContL.appendChild(searchPrfUsername);
			// 							searchPrfContL.appendChild(searchPrfName);
			// 							searchPrfCont.appendChild(searchPrfContL);

			// 							searchPrfInfo.appendChild(searchPrfPic);
			// 							searchPrfInfo.appendChild(searchPrfCont);
			// 							searchPrfLink.appendChild(searchPrfInfo);

			// 							var searchUserInfo = document.getElementById("searchUserInfo");
			// 							searchUserInfo.appendChild(searchPrfLink);
			// 						}
			// 					}
			// 				}
			// 			};
			// 			xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?query=' + searchStr, true);
			// 			xmlhttp.send();
			// 		}
			// 	}, 1500);
			// }
		}
	}, 4);
}




//SEARCH BUTTON HREF

document.getElementsByClassName("inpSearch")[0].onkeyup = function inputType() {
	var searchInp = document.getElementsByClassName("inpSearch")[0];
	if (searchInp.value.length > 0) {
		document.getElementById("searchButton").href = "https://instabig.net/fullsize/" + searchInp.value.replace(/\s/g, '').toLowerCase();
	}
}

document.getElementsByClassName("inpSearch")[0].onpaste = function inputPaste() {
	var searchInp = document.getElementsByClassName("inpSearch")[0];
	var addEvent = setTimeout(function(){
		document.getElementById("searchButton").href = "https://instabig.net/fullsize/" + searchInp.value.replace(/\s/g, '').toLowerCase();
	}, 1);
}

document.getElementsByClassName("inpSearch")[0].addEventListener("keyup", function(event){
	var searchInp = document.getElementsByClassName("inpSearch")[0];
	if (searchInp === document.activeElement && event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("searchButton").click();
	}
});




// check img errors
var imgs = document.images;
for (var imgErr = 0; imgErr < imgs.length; imgErr++) {
	imgs[imgErr].addEventListener("error", function() {
		this.src = 'https://instabig.net/cdn/img/favicon.png';
	});
}




// searchbox nav
document.getElementsByClassName("inpSearch")[0].addEventListener("keyup", searchAll);
document.getElementsByClassName("inpSearch")[0].addEventListener("paste", searchAll);



//CLICK SEARCHBOX OUTLINE

document.addEventListener('click', function(event) {
	var isClickInsideResults = document.getElementsByClassName('searchResultsBox')[0].contains(event.target);
	var isClickInsideSearchBox = document.getElementsByClassName('inpSearch')[0].contains(event.target);

	if (!isClickInsideResults && !isClickInsideSearchBox) {
		document.getElementsByClassName('searchResultsBox')[0].classList.add('dpN');
	}
});



/* document.getElementsByClassName("appStoreBadge")[0].onclick = function() {
	document.getElementsByClassName("appStoreBadge")[0].src = 'https://instabig.net/cdn/img/app-store-badge-soon.png';
}
document.addEventListener('click', function(event) {
	var isClickInsideResults = document.getElementsByClassName("appStoreBadge")[0].contains(event.target);

	if (!isClickInsideResults) {
		document.getElementsByClassName("appStoreBadge")[0].src = 'https://instabig.net/cdn/img/app-store-badge.png';
	}
}); */

// toggle to dark mode
/*if (localStorage.getItem('darkMode') == null) {
	var darkMode = 3;
	localStorage.setItem('darkMode', darkMode);
}
if (localStorage.getItem('darkMode') == 3) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		var linkElement = document.createElement('link');
		linkElement.setAttribute('rel', 'stylesheet');
		linkElement.setAttribute('type', 'text/css');
		linkElement.setAttribute('href', 'https://instabig.net/css/mainDarkMode.css');
		document.getElementsByTagName('HEAD')[0].appendChild(linkElement);
	}
}
else if (localStorage.getItem('darkMode') == 2) {
	var linkElement = document.createElement('link');
	linkElement.setAttribute('rel', 'stylesheet');
	linkElement.setAttribute('type', 'text/css');
	linkElement.setAttribute('href', 'https://instabig.net/css/mainDarkMode.css');
}*/

// toggle to dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.getElementsByClassName('footerLogo')[0].src = 'https://instabig.net/cdn/img/logo-footer-dark.svg';
}