<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return{}
  },
  components: {
  }
};
</script>


<style lang="scss">
#app {
  /*------------------------------------------------------------------
Table of content
-------------------
1. Start Header Area
2. slider area start
3. features area css start
4. hot deals area css start
5. product
6. categories area
7. testimonial
8. blog
9. shop grid view
10. shop list view
11. product details
12. checkout
13. cart
14. wishlist
15. my account
16. compare
17. login register
18. about us
19. contact us
20. banner
21. modal
22. sidebar
-------------------------------------------------------------------*/
/*------ Typography Style Start ------*/
// body {
//   color: #444444;
//   line-height: 1.7;
//   font-size: 14px;
//   font-weight: 400;
//   background-color: #f1f1f1;
//   font-family: "Roboto", sans-serif;
// }

a {
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

a:hover, a:focus {
  outline: none;
  text-decoration: none;
}

p {
  margin-bottom: 8px;
}

p:last-child {
  margin-bottom: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333333;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
}

strong,
b {
  font-weight: 700;
}

figure {
  margin: 0;
}

img {
  max-width: 100%;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.bg-img {
  background-image: url(../public/images/melt-v04-06.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.btn,
button {
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  background-color: transparent;
}

.btn:active, .btn:focus,
button:active,
button:focus {
  outline: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

input,
textarea {
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
}

::-moz-selection {
  color: #fff;
  background: #dc4734;
}

::selection {
  color: #fff;
  background: #dc4734;
}

::-webkit-input-placeholder {
  color: #999;
  font-size: 13px;
  opacity: 1;
}

::-moz-placeholder {
  color: #999;
  font-size: 13px;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #999;
  font-size: 13px;
  opacity: 1;
}

::-ms-input-placeholder {
  color: #999;
  font-size: 13px;
  opacity: 1;
}

::placeholder {
  color: #999;
  font-size: 13px;
  opacity: 1;
}

/* ----scroll to top css start ----*/
.scroll-top {
  bottom: 80px;
  cursor: pointer;
  height: 50px;
  position: fixed;
  right: 20px;
  text-align: center;
  width: 50px;
  z-index: 9999;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
  background-color: #dc4734;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

@media only screen and (max-width: 767.98px) {
  .scroll-top {
    display: none;
  }
}

.scroll-top i {
  line-height: 50px;
  color: #fff;
  font-size: 25px;
}

.scroll-top.not-visible {
  bottom: -50px;
  visibility: hidden;
  opacity: 0;
}

.scroll-top:hover {
  background-color: #333333;
}

/* ----scroll to top css end ----*/


.lg-backdrop {
  background-color: rgba(51, 51, 51, 0.9);
}

.lg-outer .lg-thumb-outer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

/*------- short classes start -------*/
.bg-color {
  background-color: #f1f1f1;
}

.pt-20 {
  padding-top: 20px;
}

@media only screen and (max-width: 767.98px) {
  .pt-20 {
    padding-top: 10px;
  }
}

.pt-30 {
  padding-top: 30px;
}

@media only screen and (max-width: 767.98px) {
  .pt-30 {
    padding-top: 10px;
  }
}

.pt-80 {
  padding-top: 80px;
}

.mb-20 {
  margin-bottom: 20px;
}

@media only screen and (max-width: 767.98px) {
  .mb-20 {
    margin-bottom: 10px;
  }
}

.mt-20 {
  margin-top: 20px;
}

@media only screen and (max-width: 767.98px) {
  .mt-20 {
    margin-top: 10px;
  }
}

.mt--20 {
  margin-top: -20px;
}

.mt--30 {
  margin-top: -30px;
}

.plr-80 {
  padding: 0 80px;
}

/*------- short classes end -------*/
//*------ header area start ----*/
.header-top {
  -webkit-box-shadow: 0px 1px 20px 0px rgba(85, 85, 85, 0.25);
          box-shadow: 0px 1px 20px 0px rgba(85, 85, 85, 0.25);
}

@media only screen and (max-width: 767.98px) {
  .header-top-navigation {
    text-align: center;
    margin-top: 50px;
  }
}

.header-top-navigation ul li {
  display: inline-block;
  margin-right: 60px;
  position: relative;
}

.header-top-navigation ul li:before {
  top: 50%;
  left: 100%;
  content: '/';
  position: absolute;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  display: none;
}

@media only screen and (max-width: 767.98px) {
  .header-top-navigation ul li:before {
    display: block;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .header-top-navigation ul li {
    margin-right: 45px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .header-top-navigation ul li {
    margin-right: 15px;
    padding-right: 15px;
  }
}

.header-top-navigation ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}

.header-top-navigation ul li:last-child:before {
  display: none;
}

.header-top-navigation ul li a {
  color: #333333;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 21px 0;
  text-transform: capitalize;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .header-top-navigation ul li a {
    font-size: 14px;
    font-weight: 500;
    padding: 18px 0;
  }
}

@media only screen and (max-width: 767.98px) {
  .header-top-navigation ul li a {
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
  }
}

.header-top-navigation ul li:hover a, .header-top-navigation ul li.active a {
  color: #dc4734;
}

.header-top-navigation ul li .message-dropdown {
  top: 100%;
  left: 0;
  width: 500px;
  height: auto;
  padding: 15px;
  position: absolute;
  background-color: #fff;
  border-radius: 0 0 2px 2px;
  z-index: 999;
  display: none;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
}

.header-top-navigation ul li .message-dropdown li a {
  padding: 0;
}

.dropdown-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.dropdown-title .recent-msg {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #333333;
  text-transform: capitalize;
}

.dropdown-title .message-btn-group button {
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #666666;
  margin-left: 20px;
}

.dropdown-title .message-btn-group button:hover {
  color: #dc4734;
  text-decoration: underline;
}

.dropdown-title .message-btn-group button:first-child {
  margin-left: 0;
}

.dropdown-title button:hover {
  color: #dc4734;
}

.dropdown-msg-list li {
  margin-right: 0;
}

.dropdown-msg-list li.msg-list-item {
  cursor: pointer;
  margin-right: 0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;
}

.dropdown-msg-list li.msg-list-item .profile-thumb {
  width: 45px;
}

.dropdown-msg-list li.msg-list-item .msg-content {
  padding-left: 10px;
  width: calc(100% - 150px);
}

.dropdown-msg-list li.msg-list-item .msg-content p {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  padding-top: 3px;
}

.dropdown-msg-list li.msg-list-item .msg-content.notification-content a {
  display: inline-block;
  color: #333333;
}

.dropdown-msg-list li.msg-list-item .msg-content.notification-content a:hover {
  color: #dc4734;
}

.dropdown-msg-list li.msg-list-item .msg-content.notification-content p {
  display: inline;
}

.dropdown-msg-list li.msg-list-item .msg-time {
  font-size: 12px;
  color: #666666;
  width: 100px;
  text-align: right;
}

.dropdown-msg-list li.msg-list-item .author a {
  color: #333333;
}

.dropdown-msg-list li.msg-list-item .author a:hover {
  color: #dc4734;
}

.header-top-search {
  margin-right: 25px;
}

.top-search-box {
  min-width: 250px;
  position: relative;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}

.top-search-field {
  border: none;
  width: 100%;
  padding-right: 30px;
  background-color: transparent;
}

.top-search-btn {
  top: 0;
  right: 0;
  font-size: 20px;
  position: absolute;
  color: #333333;
}

.top-search-btn:hover {
  color: #dc4734;
}

/*----------------------------------------
            header area end
----------------------------------------*/
/*--------- secondary menu start ---------*/
.secondary-menu-wrapper {
  padding-left: 300px;
  padding-right: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .secondary-menu-wrapper {
    padding-left: 250px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper {
    padding: 0 30px;
  }
}

.secondary-menu-wrapper .header-top-navigation {
  padding-right: 50px;
  text-align: right;
  width: 100%;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .secondary-menu-wrapper .header-top-navigation {
    padding-right: 30px;
  }
}

@media only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper .header-top-navigation {
    margin-top: 0;
    text-align: center;
    padding: 20px 0;
  }
}

.secondary-menu-wrapper .header-top-navigation li {
  margin-right: 47px;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .secondary-menu-wrapper .header-top-navigation li {
    margin-right: 5px;
  }
}

@media only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper .header-top-navigation li {
    margin-right: 10px;
    padding-right: 10px;
  }
  .secondary-menu-wrapper .header-top-navigation li:before {
    display: none;
  }
  .secondary-menu-wrapper .header-top-navigation li:nth-child(3) {
    margin-right: 10px;
    padding-right: 10px;
  }
}

.secondary-menu-wrapper .header-top-navigation li a {
  font-size: 14px;
  font-weight: 500;
  padding: 28px 0;
  text-transform: capitalize;
}

@media only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper .header-top-navigation li a {
    padding: 0;
  }
}

@media only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper .header-top-navigation li a span {
    display: none;
    padding: 0;
  }
}

.secondary-menu-wrapper .header-top-navigation li a i {
  display: none;
  font-size: 18px;
}

@media only screen and (max-width: 767.98px) {
  .secondary-menu-wrapper .header-top-navigation li a i {
    display: block;
  }
}

.secondary-menu-wrapper .post-settings-bar {
  margin-left: inherit;
}

.page-title {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  text-transform: capitalize;
}

@media only screen and (max-width: 575.98px) {
  .page-title {
    font-size: 15px;
  }
}

/*--------- secondary menu end ---------*/
/*------ sticky menu style start ------*/
.sticky {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 9;
  -webkit-box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
}

/*------ sticky menu style end ------*/
/*--------- mobile header start ---------*/
.mobile-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background-color: #fff;
  height: 60px;
}

.mobile-logo,
.mobile-header-profile {
  width: 80px;
  height: 100%;
  text-align: center;
  background-color: #dc4734;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.mobile-logo .profile-thumb-middle,
.mobile-header-profile .profile-thumb-middle {
  border-radius: 0;
}

.mobile-menu ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
}

.mobile-menu ul .message-list {
  display: inherit;
}

.mobile-menu ul li i {
  font-size: 20px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.mobile-menu ul li:hover i {
  color: #dc4734;
}

.notification {
  position: relative;
}

.notification span {
  top: -5px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  line-height: 20px;
  display: block;
  position: absolute;
  text-align: center;
  background-color: #dc4734;
}

.mob-search-box {
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 999;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
}

.mob-search-box.show {
  opacity: 1;
  visibility: visible;
}

.mob-search-inner {
  position: relative;
}

.mob-search-field {
  width: 100%;
  border: none;
  height: 70px;
  padding: 15px 50px 15px 15px;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
}

.mob-search-btn {
  top: 50%;
  right: 10px;
  position: absolute;
  cursor: pointer;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}

.mob-search-btn:hover {
  color: #dc4734;
}

.search-trigger {
  position: relative;
}

.search-trigger .close-icon {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.search-trigger.show .search-icon {
  opacity: 0;
  visibility: hidden;
}

.search-trigger.show .close-icon {
  opacity: 1;
  visibility: visible;
}

/*--------- mobile header end ---------*/
.mobile-chat-box {
  left: 0;
  top: 100%;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  z-index: 999;
}

.mobile-chat-box.show {
  opacity: 1;
  visibility: visible;
}

.mob-text-box {
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: #f1f1f1;
  padding: 25px;
}

.main-wrapper {
  padding-bottom: 105px;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .main-wrapper {
    padding-bottom: 10px;
    margin-bottom: 60px;
  }
}


/*------- profile picture style start -------*/
.profile-menu-area {
  margin-bottom: 20px;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .profile-menu-area {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 767.98px) {
  .profile-menu-area {
    padding: 15px;
  }
}

.profile-thumb-small {
  width: 35px;
  height: 35px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
}

.profile-setting-box {
  position: relative;
}

.profile-setting-box .profile-thumb-small a {
  display: block;
}

.profile-setting-box .profile-dropdown {
  top: 100%;
  right: 0;
  width: 250px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  border-radius: 0 0 2px 2px;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
  display: none;
}

.profile-setting-box .profile-head {
  padding: 20px;
}

.profile-setting-box .profile-head .name {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  padding-bottom: 7px;
}

.profile-setting-box .profile-head .name a {
  color: #333333;
}

.profile-setting-box .profile-head .name a:hover {
  color: #dc4734;
}

.profile-setting-box .profile-head .mail {
  font-size: 13px;
  color: #444444;
  display: block;
}

.profile-setting-box .profile-head .mail:hover {
  color: #dc4734;
}

.profile-setting-box .profile-body ul {
  padding: 20px 0;
  border-top: 1px solid #dddddd;
}

.profile-setting-box .profile-body ul li {
  line-height: 1;
  margin-bottom: 15px;
}

.profile-setting-box .profile-body ul li:last-child {
  margin-bottom: 0;
}

.profile-setting-box .profile-body ul li a {
  color: #444444;
  padding: 0 20px;
}

.profile-setting-box .profile-body ul li a i {
  font-size: 16px;
  padding-right: 8px;
}

.profile-setting-box .profile-body ul li:hover a {
  color: #dc4734;
}

.profile-thumb {
  display: inline-block;
  position: relative;
}

.profile-thumb-middle {
  width: 45px;
  height: 45px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
}

.profile-thumb.active {
  overflow: visible;
}

.profile-thumb.active img {
  border-radius: 50%;
}

.profile-thumb.active:before {
  bottom: 2px;
  right: -2px;
  width: 10px;
  height: 10px;
  content: "";
  border-radius: 50%;
  position: absolute;
  background-color: #09ae82;
}

.profile-banner-small {
  position: relative;
  height:50px;
}

.profile-banner-small:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  position: absolute;
  pointer-events: none;
}

.profile-thumb-2 {
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  bottom: -40px;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
}

.profile-desc {
  padding: 30px;
  margin-top: 25px;
}

.profile-desc p {
  font-size: 13px;
  color: #666666;
  padding-top: 10px;
}

.profile-banner-large {
  height: 300px;
  overflow: hidden;
  object-fit: cover;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .profile-banner-large {
    height: 270px;
  }
}

@media only screen and (max-width: 767.98px) {
  .profile-banner-large {
    height: 190px;
  }
}

.main-menu li {
  display: inline-block;
}

.profile-edit-panel {
  text-align: right;
}

.edit-btn {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 11px 28px;
  display: inline-block;
  border-radius: 50px;
  text-transform: capitalize;
  background-color: #dc4734;
  
}

@media only screen and (max-width: 767.98px) {
  .edit-btn {
    padding: 11px 15px;
  }
}

.edit-btn:hover {
  background-color: #333333;
}

.secondary-navigation-style .profile-picture-box {
  -webkit-transform: translateY(calc(-50% - 17px));
      -ms-transform: translateY(calc(-50% - 17px));
          transform: translateY(calc(-50% - 17px));
}

.profile-picture {
  position: relative;
    overflow:hidden;
}

@media only screen and (max-width: 575.98px) {
  .profile-picture {
    width: 100px;
  }
}

.profile-picture:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  position: absolute;
  pointer-events: none;
  border: 10px solid #fff;
}

@media only screen and (max-width: 767.98px) {
  .profile-picture:before {
    border: 5px solid #fff;
  }
}


.author-into-list {
  margin-top: 27px;
}

.author-into-list li {
  margin-bottom: 10px;
}

.author-into-list li:last-child {
  margin-bottom: 0;
}

.author-into-list li a {
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
}

.author-into-list li a:hover {
  color: #dc4734;
}

.author-into-list li a i {
  color: #dc4734;
  font-size: 20px;
  padding-right: 20px;
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .author-into-list li a i {
    padding-right: 8px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .widget-area {
    margin-top: 30px;
  }
}

@media only screen and (max-width: 767.98px) {
  .widget-area {
    margin-top: 10px;
  }
}

/*------- widget title start -------*/
.widget-title {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 45px;
  text-transform: capitalize;
  position: relative;
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .widget-title {
    font-size: 16px;
  }
}

.widget-title:before {
  bottom: -12px;
  left: 0;
  width: 30px;
  height: 1px;
  content: "";
  position: absolute;
  background-color: #dc4734;
}

/*------- widget title end -------*/
/*------- like page list wrapper start -------*/
.like-page-list-wrapper li {
  margin-bottom: 35px;
}

.like-page-list-wrapper li:last-child {
  margin-bottom: 0;
}

.unorder-list-info {
  padding-left: 10px;
}

.list-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  padding-bottom: 3px;
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .list-title {
    font-size: 13px;
    font-weight: 500;
  }
}

.list-title a {
  color: #333333;
}

.list-title a:hover {
  color: #dc4734;
}

.list-subtitle {
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  text-transform: capitalize;
}

.list-subtitle a {
  color: #666666;
}

.list-subtitle a:hover {
  color: #dc4734;
}

.unorder-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.unorder-list .like-button {
  font-size: 20px;
  margin-left: auto;
  position: relative;
}

.unorder-list .like-button .heart-color {
  top: 50%;
  left: 0;
  position: absolute;
  opacity: 1;
  visibility: hidden;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.unorder-list .like-button:hover .heart, .unorder-list .like-button.active .heart {
  opacity: 0;
  visibility: hidden;
}

.unorder-list .like-button:hover .heart-color, .unorder-list .like-button.active .heart-color {
  opacity: 1;
  visibility: visible;
}

/*------- like page list wrapper end -------*/
.sweet-galley {
  margin-bottom: -5px;
}

.gallery-tem {
  margin-bottom: 5px;
}

.gallery-tem {
  border-radius: 4px;
  overflow: hidden;
}

/*--------- friend request list start ---------*/
.frnd-request-list {
  background-color: #fff;
  padding: 25px;
  width: 100%;
  display: inherit !important;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(13px);
      -ms-transform: translateY(13px);
          transform: translateY(13px);
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
}

.frnd-request-list.show {
  opacity: 1;
  visibility: visible;
}

.frnd-request-list li {
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}

.frnd-request-list li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}

.frnd-request-member {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.frnd-request-member .request-thumb {
  width: 80px;
  max-height: 80px;
}

.frnd-content {
  padding-left: 15px;
  width: calc(100% - 80px);
}

.frnd-content p {
  font-size: 13px;
  color: #666666;
  padding-top: 6px;
}

.request-btn-inner {
  margin-top: 5px;
}

.request-btn-inner .frnd-btn {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  line-height: 1;
  padding: 8px 20px;
  display: inline-block;
  border: 1px solid transparent;
  background-color: #dc4734;
}

@media only screen and (max-width: 575.98px) {
  .request-btn-inner .frnd-btn {
    padding: 8px 15px;
  }
}

.request-btn-inner .frnd-btn.delete {
  color: #333333;
  border: 1px solid #333333;
  background-color: transparent;
}

.request-btn-inner .frnd-btn.delete:hover {
  color: #fff;
}

.request-btn-inner .frnd-btn:hover {
  background-color: #333333;
}

/*--------- friend request list end ---------*/



/*--------- about author area start ---------*/
.about-author-details {
  margin-top: 20px;
  margin-bottom: 20px;
}

.about-author-menu li {
  border-bottom: 1px solid #dddddd;
  padding-bottom: 4px;
  margin-bottom: 16px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.about-author-menu li a {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.8;
  color: #333333;
  text-transform: capitalize;
}

.about-author-menu li a.active {
  color: #dc4734;
}

.about-author-menu li:hover {
  border-color: #dc4734;
}

.about-author-menu li:hover a {
  color: #dc4734;
}

.about-author-menu li:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.about-description {
  background-color: #fff;
  padding: 42px 68px 36px 68px;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .about-description {
    padding: 30px;
    margin-top: 20px;
  }
}

.author-desc-title {
  border-bottom: 1px solid #dddddd;
  padding-bottom: 16px;
  margin-bottom: 20px;
}

.author-desc-title .author {
  font-size: 18px;
  font-weight: 700;
}

/*--------- about author area end ---------*/
/*------- photos section style start -------*/
.content-box {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
}

.content-title {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  line-height: 1.3;
  text-align: center;
  margin-top: -5px;
  margin-bottom: 48px;
  padding-bottom: 25px;
  text-transform: capitalize;
  border-bottom: 1px solid #dddddd;
}

.photo-group {
  margin-top: 30px;
  cursor: pointer;
}

.photo-group:hover .gallery-overlay:before {
  opacity: 1;
  visibility: visible;
}

.photo-group:hover .view-icon {
  opacity: 1;
  visibility: visible;
}

.photo-group:hover .photos-caption {
  color: #dc4734;
}

.photo-group.active .view-icon {
  opacity: 1;
  visibility: visible;
}

.photo-group.active .gallery-overlay:before {
  opacity: 0;
  visibility: hidden;
}

.gallery-overlay {
  position: relative;
}

.gallery-overlay:before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.photo-gallery-caption {
  text-align: center;
  padding: 13px 15px 17px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
}

.photo-gallery-caption .photos-caption {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: #333333;
  text-transform: capitalize;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .photo-gallery-caption .photos-caption {
    font-size: 13px;
  }
}

@media only screen and (max-width: 767.98px) {
  .photo-gallery-caption .photos-caption {
    font-size: 14px;
    font-weight: 500;
  }
}

.view-icon {
  top: 50%;
  left: 0;
  right: 0;
  width: 70px;
  height: 70px;
  margin: auto;
  position: absolute;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .view-icon {
    width: 40px;
    height: 40px;
  }
}

.view-icon:before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  content: '';
  position: absolute;
  background-color: #fff;
}

.view-icon:after {
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  content: '';
  position: absolute;
  background-color: #fff;
}

.load-more {
  line-height: 1;
  margin-top: 28px;
}

.load-more-btn {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #333333;
  text-transform: capitalize;
}

.load-more-btn:hover {
  color: #dc4734;
}

/*------- photos section style end -------*/
/*-------- friend list area start --------*/
.friends-section .content-box {
  padding: 30px 0;
}

.friends-section .content-box.friends-zone {
  padding: 0;
  background-color: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.friends-section .content-box.friends-zone .friend-list-view {
  background-color: #fff;
}

.friends-section .content-box.friends-zone .friend-list-view:hover {
  background-color: #dc4734;
}

.friend-list-view {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 25px 30px;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 20px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  background-color: #fff;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
          box-shadow: 0px 1px 5px 0px rgba(51, 51, 51, 0.2);
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .friend-list-view {
    padding: 20px 15px;
  }
}

.friend-list-view:hover {
  background-color: #dc4734;
}

.friend-list-view:hover .author a {
  color: #fff;
}

.friend-list-view:hover .add-frnd {
  color: #fff;
}

.friend-list-view .add-frnd {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.8;
  color: #666666;
  text-transform: capitalize;
}

@media only screen and (max-width: 767.98px) {
  .friend-list-view .posted-author {
    margin-left: 8px;
  }
}

@media only screen and (max-width: 575.98px) {
  .friend-list-view .posted-author {
    margin-left: 20px;
  }
}

/*-------- friend list area end --------*/
/*------ photo filter area start ------*/
@media only screen and (max-width: 479.98px) {
  .secondary-menu-2 {
    display: block;
    text-align: center;
    padding: 15px 0;
  }
}

@media only screen and (max-width: 479.98px) {
  .secondary-menu-2 .post-settings-bar {
    display: none;
  }
}

.filter-menu {
  margin-left: auto;
  padding-right: 50px;
}

@media only screen and (min-width: 768px) and (max-width: 991.98px), only screen and (max-width: 767.98px) {
  .filter-menu {
    padding-right: 30px;
  }
}

@media only screen and (max-width: 479.98px) {
  .filter-menu {
    padding-right: 0;
  }
}

.filter-menu button {
  font-size: 14px;
  font-weight: 500;
  padding: 23px 0;
  text-transform: capitalize;
  margin-right: 50px;
}

@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .filter-menu button {
    margin-right: 40px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .filter-menu button {
    margin-right: 20px;
  }
}

@media only screen and (max-width: 767.98px) {
  .filter-menu button {
    margin-right: 15px;
    padding: 5px 0;
  }
}

@media only screen and (max-width: 575.98px) {
  .filter-menu button {
    margin-right: 10px;
  }
}

.filter-menu button:hover, .filter-menu button.active {
  color: #dc4734;
}

.filter-menu button:last-child {
  margin-right: 0;
}

}

</style>
