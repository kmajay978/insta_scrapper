// FUNCTIONS

// searchbox in body function
var searchValBody = '';
function searchAllBody() {

	var toWorkPasteEvent = setTimeout(function(){

		var searchStr = encodeURIComponent(document.getElementsByClassName('inpSearchBody')[0].value.replace(/\s/g, ''));
		var fromUrl = 0;

		if (searchValBody != document.getElementsByClassName('inpSearchBody')[0].value) {

			searchValBody = document.getElementsByClassName('inpSearchBody')[0].value;

			if (document.getElementsByClassName('inpSearchBody')[0].value.length > 0) {
				document.getElementsByClassName('inpSearchBody')[0].classList.add('inpSearchBodyWithResults');
				document.getElementsByClassName('searchResultsBoxInBody')[0].classList.remove('dpN');
				document.getElementById('searchUserInfoInBody').innerHTML = '<div class="searchLoadingIcon"></div>';
			}
			else {
				document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
				document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
			}

			// search post with url
			if (searchValBody.match('instagram.com/p/') != null) {
				var regEx = /\/p\/(.*?)\//;
				var match = searchValBody.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {
							searchObj = JSON.parse(this.responseText);

							document.getElementById('searchUserInfoInBody').innerHTML = '';

							var searchPrfLink = document.createElement("a");
							searchPrfLink.href = "https://instabig.net/p/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box_body';
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

							var searchUserInfoInBodyInBody = document.getElementById("searchUserInfoInBodyInBody");
							searchUserInfoInBody.appendChild(searchPrfLink);
						}
						else if (this.status == 404) {
							// no post with this id
							document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
							document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/p/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
					document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
				}
			}
			// search reel with url
			else if (searchValBody.match('instagram.com/reel/') != null) {
				var regEx = /\/reel\/(.*?)\//;
				var match = searchValBody.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {
							searchObj = JSON.parse(this.responseText);

							document.getElementById('searchUserInfoInBody').innerHTML = '';

							var searchPrfLink = document.createElement("a");
							searchPrfLink.href = "https://instabig.net/reel/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box_body';
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

							var searchUserInfoInBody = document.getElementById("searchUserInfoInBody");
							searchUserInfoInBody.appendChild(searchPrfLink);
						}
						else if (this.status == 404) {
							// no reel with this id
							document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
							document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/reel/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
					document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
				}
			}
			// search igtv with url
			else if (searchValBody.match('instagram.com/tv/') != null) {
				var regEx = /\/tv\/(.*?)\//;
				var match = searchValBody.match(regEx);
				if (match != null) {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {

						if (this.readyState == 4 && this.status == 200) {
							searchObj = JSON.parse(this.responseText);

							document.getElementById('searchUserInfoInBody').innerHTML = '';

							var searchPrfLink = document.createElement("a");
							searchPrfLink.href = "https://instabig.net/tv/" + searchObj.graphql.shortcode_media.shortcode + '?ref=search_box_body';
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

							var searchUserInfoInBody = document.getElementById("searchUserInfoInBody");
							searchUserInfoInBody.appendChild(searchPrfLink);
						}
						else if (this.status == 404) {
							// no igtv with this id
							document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
							document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/tv/' + match[1] + '/?__a=1', true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
					document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
				}
			}
			// search with url
			else if (searchValBody.match('instagram.com') != null) {
				var regEx = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
				var match = searchValBody.match(regEx);
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
								for (var i = 0; i < searchObj.users.length; i++) {
									if (searchObj.users[i].user.username == match[1]) {
										document.getElementById('searchUserInfoInBody').innerHTML = '';

										var searchPrfLink = document.createElement("a");
										searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box_body';
										searchPrfLink.classList.add("searchPrfLink");

										var searchPrfInfo = document.createElement("div");
										searchPrfInfo.classList.add("fl");
										searchPrfInfo.classList.add("searchPrfInfo");

										var searchPrfPic = document.createElement("div");
										searchPrfPic.classList.add("fl");
										searchPrfPic.classList.add("searchPrfPic");

										var searchImgPrfPic = document.createElement("img");
										searchImgPrfPic.classList.add("searchImgPrfPic");
										searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
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
										searchFw600.innerHTML = searchObj.users[i].user.username;

										var searchPrfName = document.createElement("div");
										searchPrfName.classList.add("fl");
										searchPrfName.classList.add("fs14");
										searchPrfName.classList.add("searchPrfName");
										searchPrfName.innerHTML = searchObj.users[i].user.full_name;


										searchPrfUsername.appendChild(searchFw600);

										if (searchObj.users[i].user.is_verified == true) {
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

										var searchUserInfoInBody = document.getElementById("searchUserInfoInBody");
										searchUserInfoInBody.appendChild(searchPrfLink);

										break;
									}
								}
							}
						}
						else if (this.status == 404) {
							// no user with this username
							document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
							document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
						}
					};
					xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?context=user&query=' + match[1], true);
					xmlhttp.send();
				}
				else {
					document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
					document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
				}
			}
			// search with string
			else {
				var searchSetTimeout = setTimeout(function(){
					if (searchStr == encodeURIComponent(document.getElementsByClassName('inpSearchBody')[0].value.replace(/\s/g, ''))) {
						var xmlhttp = new XMLHttpRequest();
						xmlhttp.onreadystatechange = function() {

							if (this.readyState == 4 && this.status == 200) {
								searchObj = JSON.parse(this.responseText);

								if (searchObj.users.length > 0) {
									document.getElementsByClassName('inpSearchBody')[0].classList.add('inpSearchBodyWithResults');
									document.getElementsByClassName('searchResultsBoxInBody')[0].classList.remove('dpN');
								}
								else {
									document.getElementsByClassName('inpSearchBody')[0].classList.remove('inpSearchBodyWithResults');
									document.getElementsByClassName('searchResultsBoxInBody')[0].classList.add('dpN');
								}


								document.getElementById('searchUserInfoInBody').innerHTML = '';

								for (var i = 0; i < searchObj.users.length; i++) {

									var searchPrfLink = document.createElement("a");
									searchPrfLink.href = "https://instabig.net/fullsize/" + searchObj.users[i].user.username + '?ref=search_box_body';
									searchPrfLink.classList.add("searchPrfLink");

									var searchPrfInfo = document.createElement("div");
									searchPrfInfo.classList.add("fl");
									searchPrfInfo.classList.add("searchPrfInfo");

									var searchPrfPic = document.createElement("div");
									searchPrfPic.classList.add("fl");
									searchPrfPic.classList.add("searchPrfPic");

									var searchImgPrfPic = document.createElement("img");
									searchImgPrfPic.classList.add("searchImgPrfPic");
									searchImgPrfPic.src = searchObj.users[i].user.profile_pic_url;
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
									searchFw600.innerHTML = searchObj.users[i].user.username;

									var searchPrfName = document.createElement("div");
									searchPrfName.classList.add("fl");
									searchPrfName.classList.add("fs14");
									searchPrfName.classList.add("searchPrfName");
									searchPrfName.innerHTML = searchObj.users[i].user.full_name;


									searchPrfUsername.appendChild(searchFw600);

									if (searchObj.users[i].user.is_verified == true) {
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

									var searchUserInfoInBody = document.getElementById("searchUserInfoInBody");
									searchUserInfoInBody.appendChild(searchPrfLink);
								}
							}
						};
						xmlhttp.open('GET', 'https://www.instagram.com/web/search/topsearch/?context=user&query=' + searchStr, true);
						xmlhttp.send();
					}
				}, 1500);
			}
		}
	}, 4);
}




// searchbox in body
document.getElementsByClassName("inpSearchBody")[0].addEventListener("keyup", searchAllBody);
document.getElementsByClassName("inpSearchBody")[0].addEventListener("paste", searchAllBody);