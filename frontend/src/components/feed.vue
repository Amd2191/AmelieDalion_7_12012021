<template>
    <main>
        <div class="main-wrapper pt-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 order-2 order-lg-1">
                        <aside class="widget-area">
                            <!-- widget single item start -->
                            <div class="card card-profile widget-item p-0">
                                <div class="profile-banner">
                                    <router-link to='/profile' href="profile.html">
                                        <figure class="profile-banner-small">
                                            <a href="profile.html" class="profile-thumb-2">
                                                <img :src="user.picture" alt="profile_picture">
                                            </a>
                                        </figure>
                                        <div class="profile-desc text-center">
                                            <h6 class="author">
                                                {{user.username}}</h6>
                                            <p v-if="user.bio!=='null'">{{user.bio}}</p>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div class="col-lg-6 order-1 order-lg-2">
                        <!-- share box start -->
                        <div class="card card-small">
                            <div class="share-box-inner">
                                <!-- profile picture end -->
                                <div class="profile-thumb">
                                    <a href="#">
                                        <figure class="profile-thumb-middle">
                                            <img :src="user.picture" alt="profile picture">
                                        </figure>
                                    </a>
                                </div>
                                <!-- profile picture end -->

                                <!-- share content box start -->
                                <div class="share-content-box w-100">
                                    <form class="share-text-box" v-on:submit.prevent="submitPost" id="postForm">
                                        <input ref="file" type="file"
                                            class="share-text-field mb-2 align-item-center pt-2" id="attachment"
                                            @change="onFileChange">
                                        <textarea name="share" class="share-text-field mb-2" aria-disabled="true"
                                            placeholder="Un titre à votre message?" data-toggle="modal"
                                            data-target="#textbox" id="title" v-model="title"
                                            v-model.trim="$v.title.$model"></textarea>
                                        <div class="error" v-if="!$v.title.required">Ce champ est requis.</div>
                                        <textarea name="share" class="share-text-field mb-2" aria-disabled="true"
                                            placeholder="Votre message" data-toggle="modal" data-target="#textbox"
                                            id="content" v-model="content" v-model.trim="$v.content.$model"></textarea>
                                        <div class="error" v-if="!$v.content.required">Ce champ est requis.</div>
                                        <button class="btn-share" type="submit">publier</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- share box end -->

                        <!-- post start -->
                        <div class="card" v-for="post in posts" :key="post.id">
                            <!-- post title start -->
                            <div class="post-title d-flex align-items-center">
                                <!-- profile picture end -->
                                <div class="profile-thumb">
                                    <a href="#">
                                        <figure class="profile-thumb-middle">
                                            <img :src="post.User.picture" alt="profile picture">
                                        </figure>
                                    </a>
                                </div>
                                <!-- profile picture end -->

                                <div class="posted-author">
                                    <h6 class="author">{{post.User.username}}</h6>
                                    <span class="post-time">{{ post.updatedAt | moment("from", "now") }} </span>
                                </div>

                                <div class="post-settings-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <div class="post-settings arrow-shape">
                                        <ul>
                                            <li><button @click="deletePost(post.id)">Supprimer son post</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="post-content">
                                <div class="post-thumb-gallery">
                                    <figure class="post-thumb img-popup">
                                        <img v-if="post.attachment!=='null'" :src="post.attachment" alt="post image">
                                    </figure>
                                </div>
                                <h6>{{post.title}}</h6>
                                <p class="post-desc">
                                    {{post.content}}
                                </p>
                                <!-- <form class="share-text-box" v-on:submit.prevent="submitComment(postId)" id="postComment">
                                <textarea name="share" class="share-text-field mb-2" aria-disabled="true"
                                    placeholder="Votre commentaire" data-toggle="modal" data-target="#textbox" id="comment">
                                    </textarea>
                                <button class="btn-share" type="submit">publier</button>
                                </form> -->
                                <!-- <div class="post-meta">
                                    <ul class="comment-share-meta">
                                        <li>
                                            <button class="post-comment" @click="showComments=yes">
                                                <span> Commentaires</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div v-show="yes">
                                    <div v-if="post.id=comment.postId">
                                        <div class="comment" v-for="comment in comments" :key:comment.id>
                                            <div class="posted-author">
                                                <h6 class="author">{{comment.User.username}}</h6>
                                                <span class="post-time">{{ comment.updatedAt | moment("from", "now") }}
                                                </span>
                                                <div class="commentContent">{{comment.content}} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <!-- post status end -->



                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import axios from "axios"
    import FormData from 'form-data'
    // import TimeAgo from 'javascript-time-ago'
    import {
        required
    } from 'vuelidate/lib/validators'
    export default {
        name: 'feed',
        data() {
            return {
                token: '',
                attachment: null,
                title: null,
                content: null,
                file: null,
                user: [],
                posts: [],
                username: null,
                picture: null,
                updatedAt: null,
                showComments: 'no'
            }
        },
        validations: {
            title: {
                required
            },
            content: {
                required
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
        mounted() {

            axios.get('http://localhost:3000/api/post')
                .then(response => {
                    console.log(response.data);
                    this.posts = response.data;
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        computed: {},
        methods: {
            deletePost(postId) {
                var token = localStorage.getItem('token');
                axios.delete('http://localhost:3000/api/post/delete/' + postId, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    .then(response => {
                        console.log(response);
                        this.$swal("Succès", "Votre post a bien été supprimé", "success");
                        window.location.href = '/';
                    })

            },
            onFileChange(event) {
                const file = event.target.files[0];
                this.file = file;
            },
            submitPost: function () {
                var token = localStorage.getItem('token');
                const formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("attachment", this.file);

                axios.post('http://localhost:3000/api/post/create', formData, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    .then(response => {
                        console.log(response);
                        document.getElementById('postForm').reset();
                        this.$swal("Bravo", "Votre post est maintenant en ligne", "success");
                    }).catch((error) => {
                        console.log(error)
                    })
            },

        }

    }
</script>
<style lang="scss">
    .card {
        border: none;
        border-radius: 0;
        padding: 30px;
        margin-bottom: 30px;
        -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
        box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2) !important;
    }

    @media only screen and (max-width: 767.98px) {
        .card {
            margin-bottom: 10px;
        }
    }

    .card-small {
        padding: 16px;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .card-profile {
        padding: 0;
    }

    .card:last-child {
        margin-bottom: 0;
    }

    .card.widget-item {
        padding: 25px;
    }

    .share-box-inner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    .share-text-box {
        position: relative;
        padding-left: 15px;
    }

    .share-text-box .share-text-field {
        width: 100%;
        border: none;
        display: block;
        height: 44px;
        padding: 13px 90px 13px 20px;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
        background-color: #f1f1f1;
        -webkit-box-shadow: inset 0px 1px 10px 0px rgba(85, 85, 85, 0.2);
        box-shadow: inset 0px 1px 10px 0px rgba(85, 85, 85, 0.2);
        -webkit-transition: all 0.4s ease;
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }

    .share-text-box .btn-share {

        right: 3px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        line-height: 1;
        padding: 11px 25px !important;
        margin-right: 2px;
        border-radius: 40px;
        background-color: #dc4734 !important;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 479.98px) {
        .share-text-box .btn-share {
            display: none;
        }
    }

    .share-text-box .btn-share:hover {
        background-color: #333333;
    }

    .modal-dialog {
        max-width: 600px;
    }

    .post-share-btn {
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        padding: 14px 30px 12px;
        border-radius: 40px;
        background-color: #dc4734;
        text-transform: uppercase;
        cursor: pointer;
    }

    .post-share-btn:hover {
        background-color: #333333;
    }

    .share-field-big {
        width: 100%;
        padding: 15px;
        border: 1px solid #dddddd;
        height: 200px !important;
    }

    .posted-author {
        margin-left: 20px;
    }

    .posted-author .post-time {
        display: block;
        font-size: 14px;
        line-height: 1;
        padding-top: 10px;
    }

    .author {
        font-size: 14px;
        font-weight: 800;
        line-height: 1;
        text-transform: capitalize;
    }

    .author a {
        color: #333333;
    }

    .author a:hover {
        color: #dc4734;
        text-decoration: underline;
    }

    .post-settings-bar {
        margin-left: auto;
        position: relative;
        cursor: pointer;
    }

    .post-settings-bar span {
        width: 20px;
        height: 1px;
        display: block;
        background-color: #ccc;
        margin-bottom: 4px;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
    }

    .post-settings-bar span:last-child {
        margin-bottom: 0;
    }

    .post-settings-bar:hover span {
        background-color: #dc4734;
    }

    .post-settings-bar:hover .post-settings {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(20px);
        -ms-transform: translateY(20px);
        transform: translateY(20px);
    }

    .post-settings {
        right: 0;
        top: 100%;
        width: 200px;
        background-color: #fff;
        position: absolute;
        padding: 20px;
        z-index: 9;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        -webkit-box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
        box-shadow: 0px 1px 15px 0px rgba(51, 51, 51, 0.2);
        opacity: 0;
        visibility: hidden;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        -webkit-transform: translateY(30px);
        -ms-transform: translateY(30px);
        transform: translateY(30px);
    }

    .post-settings li {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    .post-settings li button {
        color: #333333;
        display: block;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: capitalize;
    }

    .post-settings li button:hover {
        color: #dc4734;
    }

    .post-settings li button:last-child {
        margin-bottom: 0;
    }

    .post-settings li:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border: none;
    }

    .arrow-shape:before {
        right: 10px;
        bottom: 100%;
        content: "";
        position: absolute;
        height: 20px;
        border-bottom: 20px solid #fff;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }

    .post-thumb-gallery {
        border-radius: 5px;
        overflow: hidden;
    }

    .post-thumb img {
        width: 100%;
    }

    .post-content {
        padding-top: 18px;
    }

    .post-desc {
        padding-bottom: 16px;
    }

    .post-desc-secondary {
        padding-top: 18px;
        padding-bottom: 0;
    }

    .post-meta {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 12px;
        margin-top: 20px;
    }

    @media only screen and (max-width: 479.98px) {
        .post-meta .post-meta-like span {
            display: none;
        }
    }

    .post-meta .post-meta-like strong {
        display: none;
        font-size: 14px;
        font-weight: 400;
        padding-left: 8px;
        color: #666666;
    }

    @media only screen and (max-width: 479.98px) {
        .post-meta .post-meta-like strong {
            display: inline-block;
        }
    }

    .post-meta .comment-share-meta {
        margin-left: auto;
    }

    .post-meta .comment-share-meta li {
        display: inline-block;
        margin-left: 24px;
    }

    .post-meta .comment-share-meta li:first-child {
        margin-left: 0;
    }

    .post-meta-like i,
    .post-comment i,
    .post-share i {
        font-size: 20px;
        color: #333333;
        vertical-align: middle;
    }

    .post-meta-like span,
    .post-comment span,
    .post-share span {
        color: #666666;
        vertical-align: text-bottom;
        padding-left: 8px;
    }

    .post-meta-like:hover i,
    .post-meta-like:hover span,
    .post-comment:hover i,
    .post-comment:hover span,
    .post-share:hover i,
    .post-share:hover span {
        color: #dc4734;
    }
</style>