<template>
  <header>
    <div class="header-top sticky bg-white d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <!-- header top navigation start -->
            <div class="header-top-navigation">
              <nav>
                <ul>
                  <li class="active">
                    <router-link to="/">Accueil</router-link>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- header top navigation start -->
          </div>
          <div class="col-md-2">
            <!-- brand logo start -->
            <div class="brand-logo text-center">
              <router-link to='/'>
                <img src="../../public/images/logo+nom.png" alt="Logo Groupomania">
              </router-link>
            </div>
            <!-- brand logo end -->
          </div>
          <!-- Header profile view start -->
          <div class="col-md-5">
            <div class="header-top-right d-flex align-items-center justify-content-end">
              <div class="profile-setting-box">
                <div class="profile-thumb-small">
                  <router-link to='/profile'>
                    <figure>
                      <img :src="user.picture" alt="profile picture">
                    </figure>
                  </router-link>
                </div>
                <!-- Header profile view end-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-header-wrapper sticky d-block d-lg-none">
      <div class="mobile-header position-relative ">
        <div class="mobile-logo">
          <router-link to='/'>
            <img src="../../public/images/logo_white.png" alt="logo">
          </router-link>
        </div>
        <div class="mobile-menu w-100">
        </div>
        <div class="mobile-header-profile">
          <!-- profile picture end -->
          <div class="profile-thumb profile-setting-box"  >
            <router-link to='/profile'>
              <figure class="profile-thumb-middle">
                <img :src="user.picture" alt="profile picture">
              </figure>
            </router-link>
          </div>
          <!-- profile picture end -->
        </div>
      </div>
    </div>
  </header>

</template>
<script>
  import axios from "axios"
  export default {
    name: 'header',
    data(){
      return {
        token:'',
        user:[],
        picture:''
      }
    },
    created() {
            var token = localStorage.getItem('token');
            axios.get('http://localhost:3000/api/user/profile/', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(response => {
                    console.log(response.data);
                    this.user = response.data;

                })
                .catch((error) => {
                    console.log(error)
                })
    },
    methods:{
    }

  }
</script>
<style lang="scss">
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

  @media only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
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

  .header-top-navigation ul li:hover a,
  .header-top-navigation ul li.active a {
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

  .msg-dropdown-footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .msg-dropdown-footer button {
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #666666;
  }

  .msg-dropdown-footer button:hover {
    color: #dc4734;
    text-decoration: underline;
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
</style>