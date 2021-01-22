<template>
  <div class="timeline-header">
    <div class="container-fluid p-0">
      <div class="row no-gutters align-items-center">
        <div class="col-lg-6">
          <div class="timeline-logo-area d-flex align-items-center">
            <div class="timeline-logo">
              <img src="../../public/images/logo+nom.png" alt="Logo Groupomania">
            </div>
            <div class="timeline-tagline">
              <h6 class="tagline">Travailler plus efficacement ensembles</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="login-area">
            <div class="row align-items-center form" >
              <div class="col-12 col-sm form-group">
                <input type="text" placeholder="Email" class="single-field form-control" id='email-login' v-model="email">
              </div>
              <div class="col-12 col-sm form-group">
                <input type="password" placeholder="Mot de passe" class="single-field form-control" id='password-login' v-model="password">
              </div>
              <div class="col-12 col-sm-auto">
                <button class="submit-btn" @click="login()">Se connecter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'NavLogin',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
     identification: function (data) {
        axios.post('http://localhost:3000/api/login', data)
          .then(response => {
            console.log(response);
            let returnedObject=response.data;
            console.log(returnedObject);
            let token=returnedObject.token;
            console.log(token);
            localStorage.setItem('token', token);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      login: function () {
        let email = document.getElementById('email-login').value;
        let password = document.getElementById('password-login').value;
        var userInformation = {
          email: email,
          password: password
        }
        this.identification(userInformation);
        window.location.href = '/';
      },
    }
  }
</script>

<style lang="scss">
  .timeline-logo-area {
    padding: 0 30px;
    height: 50px;
  }

  .timeline-logo {
    height: 100%;
    object-fit: contain;
  }

  .timeline-logo img {
    max-height: 100%;
  }

  @media only screen and (min-width: 1600px) {
    .timeline-logo-area {
      padding: 0 107px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
    .timeline-logo-area {
      padding: 10px 30px;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .timeline-logo img {
      height: 70px;
    }
  }

  @media only screen and (max-width: 575.98px) {
    .timeline-logo-area .timeline-logo {
      width: 70px;
    }

    .timeline-logo img {
      height: 50px;
      max-width: auto;
    }
  }

  .timeline-logo-area .tagline {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
    padding-left: 70px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1499.98px) {
    .timeline-logo-area .tagline {
      padding-left: 50px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
    .timeline-logo-area .tagline {
      padding-left: 0;
    }
  }

  @media only screen and (max-width: 575.98px) {
    .timeline-logo-area .tagline {
      padding-left: 70px;
    }
  }

  @media only screen and (max-width: 479.98px) {
    .timeline-logo-area .tagline {
      padding-left: 20px;
    }
  }

  .login-area {
    background-color: #dc4734;
    padding: 15px 30px;
  }

  .login-area input::placeholder {
    color: #ffffff !important;
  }

  @media only screen and (min-width: 1600px) {
    .login-area {
      padding: 15px 110px;
    }
  }

  .login-area .single-field {
    width: 100%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    color: #fff;
  }

  @media only screen and (max-width: 575.98px) {
    .login-area .single-field {
      margin-bottom: 30px;
    }
  }

  .login-area .login-btn {
    font-size: 14px;
    font-weight: 500;
    color: #dc4734;
    line-height: 1;
    padding: 12px 32px !important;
    display: inline-block;
    border: 1px solid transparent;
    background-color: #fff !important;
  }

  .login-area .login-btn:hover {
    background-color: #333333;
  }

  @media only screen and (max-width: 575.98px) {
    .login-area .login-btn {
      width: 100%;
    }
  }

  .login-area ::-webkit-input-placeholder {
    /* Edge */
    color: #ddd;
  }

  .login-area :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ddd;
  }

  .login-area ::-moz-placeholder {
    color: #ddd;
  }

  .login-area ::-ms-input-placeholder {
    color: #ddd;
  }

  .login-area ::placeholder {
    color: #ddd;
  }

  .timeline-bg-content {
    width: 100%;
    height: calc(100vh - 70px);
    position: relative;
    padding: 0 30px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
    .timeline-bg-content {
      height: 400px;
    }
  }

  @media only screen and (max-width: 575.98px) {
    .timeline-bg-content {
      height: 300px;
    }
  }

  .timeline-bg-content .timeline-bg-title {
    top: 50%;
    left: 50%;
    width: 610px;
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 36px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1499.98px) {
    .timeline-bg-content .timeline-bg-title {
      width: 540px;
      font-size: 32px;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199.98px),
  only screen and (max-width: 767.98px) {
    .timeline-bg-content .timeline-bg-title {
      width: 100%;
      padding: 0 30px;
      font-size: 26px;
    }
  }

  @media only screen and (max-width: 479.98px) {
    .timeline-bg-content .timeline-bg-title {
      width: 100%;
      font-size: 22px;
      padding: 0 30px;
    }
  }
</style>