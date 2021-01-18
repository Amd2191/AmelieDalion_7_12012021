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
                                        <img src="../../public/images/AvatarMaker (6).png" alt="profile picture" class="img-fluid">
                                </figure>
                            </div>
                        <div class="col-lg-2 col-md-3 d-md-block p-2">
                            <div class="profile-edit-panel d-flex flex-wrap">
                                <button class="edit-btn m-1 text-nowrap" id="btn-edit-profile">Modifier votre profil</button>
                                <button class="edit-btn m-1 text-nowrap" id="btn-delete-profile">Supprimer votre profil</button>
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
                                <h4 class="widget-title">kate palson</h4>
                                <div class="widget-body">
                                    <div class="about-author">
                                        <ul class="author-into-list">
                                            <li><i class="bi bi-office-bag"></i>Email: <span id="profile-email"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- share content box end -->
                            <!-- Modal start -->
                            <div class="modal fade" id="textbox" aria-labelledby="textbox">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Share Your Mood</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body custom-scroll">
                                            <textarea name="share" class="share-field-big custom-scroll"
                                                placeholder="Say Something"></textarea>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="post-share-btn"
                                                data-dismiss="modal">cancel</button>
                                            <button type="button" class="post-share-btn">post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal end -->
                        </aside>
                    </div>
                </div>
            </div>
        </div>
</template>
export default {
  name: 'profile',
  props: {
  }
}