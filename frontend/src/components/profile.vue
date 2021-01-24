<template>
    <div class="main-wrapper">
        <div class="profile-banner-large bg-img">
            <!-- <img src="../../public/images/melt-v04-06.jpg" alt="Fond profil" class="img-fluid h-20"> -->
        </div>
        <div class="profile-menu-area bg-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-3">
                        <figure class="profile-picture">
                            <img :src="user.picture" alt="profile picture" class="img-fluid">
                        </figure>
                    </div>
                    <div class="col-lg-2 col-md-3 d-md-block p-2">
                        <div class="profile-edit-panel d-flex flex-wrap">
                            <button class="edit-btn m-1 text-nowrap" id="btn-delete-profile"
                                @click="deleteUser">Supprimer votre
                                profil</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 order-2 order-lg-1">
                    <aside class="widget-area">
                        <!-- widget single item start -->
                        <div class="card widget-item">
                            <h4 class="widget-title">{{user.username}}</h4>
                            <div class="widget-body">
                                <div class="about-author">
                                    <ul class="author-into-list">
                                        <li><i class="bi bi-office-bag"></i>Email: <br> {{user.email}}<span
                                                id="profile-email"></span></li>
                                        <!-- <li v-if="user.bio == null"></li> -->
                                        <li v-if="user.bio!=='null'">Votre philosophie: <br> {{user.bio}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        name: 'profile',
        data() {
            return {
                token: '',
                picture: '',
                bio: '',
                user: [],
                username: '',

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
        methods: {
            deleteUser() {
                var token = localStorage.getItem('token');
                axios.delete('http://localhost:3000/api/user/delete',{
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(response=>{
                console.log(response);
                this.$swal("Succès", "Votre compte a bien été supprimé", "success");
                window.location.href = '/#/login';
                })

            }
        }

    }
</script>