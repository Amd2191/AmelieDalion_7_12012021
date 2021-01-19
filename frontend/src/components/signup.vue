<template>
  <div class="timeline-page-wrapper">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-lg-6 order-2 order-lg-1">
          <div class="timeline-bg-content">
            <h3 class="timeline-bg-title">Découvrez votre espace de travail numérique</h3>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
          <div class="signup-form-wrapper">
            <h1 class="create-acc text-center">Créez votre compte</h1>
            <div class="signup-inner text-center">
              <h3 class="title">Wellcome to Adda</h3>
              <form v-on:submit.prevent="submitForm" class="signup-inner--form">
                <div class="row">
                  <div class="col-12">
                    <input type="email" v-model="email" :class="{'is-invalid':validationStatus($v.email)}"
                      class="single-field" placeholder="Email" id="email">
                    <div v-if="!$v.email.required && $v.email.$dirty" class='text-danger'>Votre email est requis</div>
                    <div v-if="!$v.email.email && $v.email.$dirty" class="text-danger">Votre email n'est pas valide
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input type="text" v-model="firstname" :class="{'is-invalid':validationStatus($v.firstname)}"
                      class="single-field" placeholder="Prénom" id="firstname">
                    <div v-if="!$v.firstname.required && $v.firstname.$dirty" class="text-danger">Votre prénom est
                      requis</div>
                    <div v-if="!$v.firstname.alpha && $v.firstname.$dirty" class="text-danger">Votre prénom ne peut
                      contenir que des lettres</div>
                  </div>
                  <div class="col-md-6">
                    <input type="text" v-model="lastname" :class="{'is-invalid':validationStatus($v.lastname)}"
                      class="single-field" placeholder="Nom" id="lastname">
                    <div v-if="!$v.lastname.required && $v.lastname.$dirty" class="text-danger">Votre nom est requis
                    </div>
                    <div v-if="!$v.lastname.alpha && $v.lastname.$dirty" class="text-danger">Votre nom ne peut contenir
                      que des lettres</div>
                  </div>
                  <div class="col-12">
                    <input type="password" v-model="password" :class="{'is-invalid':validationStatus($v.password)}"
                      class="single-field" placeholder="Mot de passe" id="password">
                    <div v-if="!$v.password.required && $v.password.$dirty" class="text-danger">Votre mot de passe est
                      requis.</div>
                    <div v-if="!$v.password.minLength && $v.password.$dirty" class="text-danger">Votre mot de passe doit
                      faire plus de
                      {{$v.password.$params.minLength}} caractères.</div>
                    <div v-if="!$v.password.maxLength && $v.password.$dirty" class="text-danger">Votre mot de passe doit
                      faire moins de
                      {{$v.password.$params.maxLength}} caractères.</div>
                  </div>
                  <div class="col-12">
                    <div class="form-group row">
                      <label for="avatar">Choisissez votre avatar </label>
                      <input type="file" class="form-control-file" id="avatar">
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="submit-btn" @click="submitForm()">Créer votre compte</button>
                  </div>
                </div>
                <h6 class="avatar-link">Pour votre avatar, vous pouvez utiliser <a
                    href="https://avatarmaker.com/">Avatar Maker</a></h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    required,
    email,
    minLength,
    maxLength,
    alpha
  } from 'vuelidate/lib/validators'

  export default {
    name: 'Signup',
    data: function () {
      return {
        user: {
          email: '',
          firstname: '',
          lastname: '',
          password: '',
          avatar: '',
        }
      }
    },
    validations: {
      email: {
        required,
        email
      },
      firstname: {
        required,
        alpha
      },
      lastname: {
        required,
        alpha
      },
      password: {
        required,
        minLength: minLength(6),
        maxLenght: maxLength(18)
      },
      avatar: {
        required
      },

    },
    methods: {

      validationStatus: function (validation) {
        return typeof validation != "undefined" ? validation.$error : false;
      },

      submitForm: function () {
        // make sure every data entered is validated
        this.$v.$touch();
        if (!this.$v.$invalid) {
          return;
        } else {
          this.$axios.post('http://localhost:3000/api/user/signup', this.user)
            .then(response => {
              console.log(response);
              this.$router.push('/')
              this.firstname = '';
              this.lastname = '';
              this.email = '';
              this.password = '';
              this.avatar = ''
            }).catch((error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>
<style lang='scss'>
  .timeline-bg-content {
    background-image: url(../../public/images/melt-v04-06.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 850px;
  }

  .timeline-bg-title {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
    .signup-form-wrapper {
      padding: 0 30px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    .signup-form-wrapper {
      margin-bottom: 30px;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1499.98px),
  only screen and (min-width: 992px) and (max-width: 1199.98px),
  only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
    .signup-form-wrapper {
      padding: 47px 30px;
    }
  }

  .signup-form-wrapper .create-acc {
    color: #dc4734;
    font-size: 30px;
    font-weight: 800;
    padding-bottom: 47px;
  }

  @media only screen and (max-width: 575.98px) {
    .signup-form-wrapper .create-acc {
      font-size: 26px;
    }
  }

  .signup-inner {
    max-width: 572px;
    margin: auto;
    -webkit-box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
  }

  .signup-inner .title {
    color: #fff;
    font-size: 18px;
    background-color: #dc4734;
    padding: 23px 0;
  }

  .signup-inner--form {
    padding: 42px 100px 50px;
    background-color: #fff;
    position: relative;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199.98px),
  only screen and (min-width: 768px) and (max-width: 991.98px),
  only screen and (max-width: 767.98px) {
    .signup-inner--form {
      padding: 42px 50px 50px;
    }
  }

  @media only screen and (max-width: 479.98px) {
    .signup-inner--form {
      padding: 42px 30px 50px;
    }
  }

  .signup-inner--form:before {
    top: 50%;
    left: 50%;
    content: '';
    position: absolute;
    height: 170px;
    width: 174px;
    -webkit-transform: translate(-50%, -80%);
    -ms-transform: translate(-50%, -80%);
    transform: translate(-50%, -80%);
  }

  .signup-inner--form .single-field {
    width: 100%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #999;
    padding: 5px 10px;
    margin-bottom: 28px;
  }

  .signup-inner--form .nice-select {
    width: 100%;
    border: none;
    border-bottom: 1px solid #999;
    border-radius: 0;
    font-size: 13px;
    padding: 5px 10px;
    height: 34px;
    line-height: 30px;
    margin-bottom: 27px;
    background-color: transparent;
  }

  .signup-inner--form .nice-select span {
    color: #999;
  }

  .signup-inner--form .nice-select:after {
    height: 6px;
    width: 6px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
  }

  .signup-inner--form .nice-select .list {
    width: 100%;
  }

  .signup-inner .avatar-link {
    font-size: 16px;
    padding-top: 28px;
  }

  .signup-inner .avatar-link a {
    color: #dc4734;
  }

  .submit-btn {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    padding: 15px 20px !important;
    display: block;
    background-color: #dc4734 !important;
    width: 100%;
    margin-top: 23px;
  }

  .submit-btn:hover {
    background-color: #333333;
  }
</style>