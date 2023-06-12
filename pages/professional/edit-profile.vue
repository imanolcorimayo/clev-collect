<template>
  <div>
    
    <!-- Seller Inner area Starts -->
    <div class="seller-inner-area section-bg-2 padding-top-40 padding-bottom-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6 margin-top-30">
                    <div class="profile-author-contents">
                        <div class="profile-flex-content">
                            <div class="thumb">
                                <img src="@/assets/img/seller/seller-s2.jpg" alt="img">
                            </div>
                            <div class="profile-contents">
                                <h4 class="title"> <a href="javascript:void(0)"> John Sinha </a> </h4>
                                <div class="profiles-review">
                                    <span class="icon"> <i class="las la-star"></i> </span>
                                    <span class="reviews"> <b>4.9</b> (231) </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 margin-top-30">
                    <div class="profile-author-contents">
                        <ul class="profile-about">
                            <li> From: <span> Bangladesh </span> </li>
                            <li> Seller Since: <span> 2020 </span> </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 margin-top-30">
                    <div class="profile-author-contents">
                        <div class="profile-single-achieve style-02">
                            <div class="single-achieve">
                                <div class="achieve-inner">
                                    <div class="icon">
                                        <i class="las la-check"></i>
                                    </div>
                                    <div class="contents margin-top-10">
                                        <h3 class="title">220</h3>
                                        <span class="ratings-span"> Orders </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Seller Inner area end -->
    <!-- Featured Service area starts -->
    <div class="seller-profile-details-area padding-bottom-100 padding-top-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 margin-top-30">
                    <div class="seller-profile-dashboard">
                        <div class="dashboard-icon">
                            <div class="sidebar-icon">
                                <i class="las la-bars"></i>
                            </div>
                        </div>
                        <div class="dashboard-close">
                            <div class="close-bars"> <i class="las la-times"></i> </div>
                            <ul class="seller-dashboard-list">
                                <li class="list">
                                    <a href="seller_profile.html"> <i class="las la-user"></i> Profile </a>
                                </li>
                                <li class="list active">
                                    <a href="seller_edit_profile.html"> <i class="las la-edit"></i> Edit Profile </a>
                                </li>
                                <li class="list">
                                    <a href="seller_order_status.html"> <i class="las la-tasks"></i> Order Status </a>
                                </li>
                                <li class="list">
                                    <a href="seller_password_change.html"> <i class="las la-lock"></i> Password Change </a>
                                </li>
                                <li class="list">
                                    <a href="javascript:void(0)"> <i class="las la-sign-out-alt"></i> Log Out </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 margin-top-30">
                    <div class="seller-profile-details-wrapper">
                        <h3 class="title-seller"> Edit Profile </h3>
                        <div class="dashboard-profile-flex">
                            <div class="thumbs margin-top-40">
                                <img src="@/assets/img/dashboard/profile-man.jpg" alt="">
                                <div class="edit-thumb">
                                    <a href="javascript:void(0)"> <i class="lar la-image"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-address-details">
                            <form action="#">
                                <div class="single-dashboard-input">
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Your Name* </label>
                                        <input class="form--control" type="text" name="name" placeholder="Type Your Name">
                                    </div>
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Your Email* </label>
                                        <input class="form--control" type="email" name="email" placeholder="Type Your Email">
                                    </div>
                                </div>
                                <div class="single-dashboard-input">
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Phone Number* </label>
                                        <input class="form--control" type="tel" placeholder="Type Your Number">
                                    </div>
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Your City* </label>
                                        <select>
                                            <option value="1">New York</option>
                                            <option value="2">London</option>
                                            <option value="2">Eden Garden</option>
                                            <option value="2">Paris</option>
                                            <option value="2">Barcelona</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="single-dashboard-input">
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Your Area* </label>
                                        <input class="form--control" type="text" placeholder="Type Your Area">
                                    </div>
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Post Code* </label>
                                        <input class="form--control" type="tel" placeholder="Type Post Code">
                                    </div>
                                </div>
                                <div class="single-dashboard-input">
                                    <div class="single-info-input margin-top-30">
                                        <label class="info-title"> Your Address* </label>
                                        <input class="form--control" type="text" placeholder="Type Your Address">
                                    </div>
                                </div>
                                <div class="btn-wrapper margin-top-40">
                                    <button type="submit" class="cmn-button btn-bg-1"> Save Changes </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Featured Service area end -->
  </div>
</template>