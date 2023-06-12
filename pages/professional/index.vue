<template>
  <div>
    <!-- Dashboard area Starts -->
    <div class="body-overlay"></div>
    <div class="dashboard-area dashboard-padding">
        <div class="container-fluid">
            <div class="dashboard-contents-wrapper">
                <div class="dashboard-icon">
                    <div class="sidebar-icon">
                        <i class="las la-bars"></i>
                    </div>
                </div>
                <div class="dashboard-left-content">
                    <div class="dashboard-close-main">
                        <div class="close-bars"> <i class="las la-times"></i> </div>
                        <div class="dashboard-top padding-top-40">
                            <div class="thumb">
                                <img src="@/assets/img/dashboard/authors.jpg" alt="">
                            </div>
                            <div class="author-content">
                                <h4 class="title"> Alex Jenin </h4>
                                <span class="small-title"> Profesional Independiente </span>
                            </div>
                        </div>
                        <div class="dashboard-bottom margin-top-20">
                            <ul class="dashboard-list ">
                                <li class="list active">
                                    <a href="dashboard.html"> <i class="las la-th"></i> Dashboard </a>
                                </li>
                                <li class="list has-children">
                                    <a href="javascript:void(0)"> <i class="las la-cogs"></i> Services </a>
                                    <ul class="submenu">
                                        <li class="list"> <a href="dashboard_services.html"> All Services </a> </li>
                                        <li class="list"> <a href="dashboard_service_edit.html"> Edit Services </a> </li>
                                        <li class="list"> <a href="dashboard_edit_service_two.html"> Edit Services Two </a> </li>
                                    </ul>
                                </li>
                                <li class="list">
                                    <a href="dashboard_orders_pending.html"> <i class="las la-tasks"></i> Order Pending </a>
                                </li>
                                <li class="list">
                                    <a href="dashboard_order.html"> <i class="las la-tasks"></i> Order Status </a>
                                </li>
                                <li class="list">
                                    <a href="dashboard_payout.html"> <i class="las la-dollar-sign"></i> Payout History </a>
                                </li>
                                <li class="list has-children">
                                    <a href="javascript:void(0)"> <i class="las la-user"></i> Profile </a>
                                    <ul class="submenu">
                                        <li class="list"> <a href="dashboard_profile.html"> Profile </a> </li>
                                        <li class="list"> <a href="dashboard_editprofile.html"> Edit Profile </a> </li>
                                    </ul>
                                </li>
                                <li class="list">
                                    <a href="dashboard_settings.html"> <i class="las la-cog"></i> Settings </a>
                                </li>
                                <li class="list">
                                    <a href="dashboard_review.html"> <i class="lar la-star"></i> Review </a>
                                </li>
                                <li class="list">
                                    <a href="javascript:void(0)"> <i class="las la-sign-out-alt"></i> Log Out </a>
                                </li>
                            </ul>
                            <div class="dashboard-logo padding-top-20">
                                <a href="index.html" class="logo"> <img src="@/assets/img/dashboard/dashboard-logo.png" alt=""> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-right">
                    <div class="dashboard-top-cards">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 margin-bottom-30 orders-child">
                                <div class="single-orders">
                                    <div class="orders-shapes">
                                        <img src="@/assets/img/dashboard/orders-shapes.png" alt="">
                                    </div>
                                    <div class="orders-flex-content">
                                        <div class="icon">
                                            <i class="las la-tasks"></i>
                                        </div>
                                        <div class="contents">
                                            <h2 class="order-titles"> 12 </h2>
                                            <span class="order-para"> Order Pending </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 margin-bottom-30 orders-child">
                                <div class="single-orders">
                                    <div class="orders-shapes">
                                        <img src="@/assets/img/dashboard/orders-shapes2.png" alt="">
                                    </div>
                                    <div class="orders-flex-content">
                                        <div class="icon">
                                            <i class="las la-handshake"></i>
                                        </div>
                                        <div class="contents">
                                            <h2 class="order-titles"> 2350 </h2>
                                            <span class="order-para"> Order Completed </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 margin-bottom-30 orders-child">
                                <div class="single-orders">
                                    <div class="orders-shapes">
                                        <img src="@/assets/img/dashboard/orders-shapes3.png" alt="">
                                    </div>
                                    <div class="orders-flex-content">
                                        <div class="icon">
                                            <i class="las la-dollar-sign"></i>
                                        </div>
                                        <div class="contents">
                                            <h2 class="order-titles"> 12 </h2>
                                            <span class="order-para"> Total Earning </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 margin-bottom-30 orders-child">
                                <div class="single-orders">
                                    <div class="orders-shapes">
                                        <img src="@/assets/img/dashboard/orders-shapes4.png" alt="">
                                    </div>
                                    <div class="orders-flex-content">
                                        <div class="icon">
                                            <i class="las la-file-invoice-dollar"></i>
                                        </div>
                                        <div class="contents">
                                            <h2 class="order-titles"> 2350 </h2>
                                            <span class="order-para"> Balance </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-middle-flex marg-reverse-30">
                        <div class="single-flex-middle margin-top-40">
                            <div class="line-charts-wrapper">
                                <div class="line-top-contents">
                                    <h5 class="earning-title"> Total Earning Overview </h5>
                                    <div class="line-chart-select">
                                        <select>
                                                <option value="1">Jan</option>
                                                <option value="2">Feb</option>
                                                <option value="2">Mar</option>
                                                <option value="2">Apr</option>
                                                <option value="2">May</option>
                                                <option value="2">Jun</option>
                                                <option value="2">Jul</option>
                                                <option value="2">Aug</option>
                                                <option value="2">Sep</option>
                                                <option value="2">Oct</option>
                                                <option value="2">Nov</option>
                                                <option value="2">Dec</option>
                                              </select>
                                    </div>
                                </div>
                                <div class="line-charts">
                                    <canvas id="line-chart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="single-flex-middle">
                            <div class="single-flex-middle-inner">
                                <div class="line-charts-wrapper margin-top-40">
                                    <div class="line-top-contents">
                                        <h5 class="earning-title"> To do List </h5>
                                        <div class="line-chart-select style-02">
                                            <select>
                                                    <option value="1">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                    <option value="2">See More</option>
                                                  </select>
                                        </div>
                                    </div>
                                    <div class="single-checbox">
                                        <div class="checkbox-inlines">
                                            <input class="check-input" type="checkbox" id="check15">
                                            <label class="checkbox-label" for="check15"> It is a long established fact that a reader will be distracted. </label>
                                        </div>
                                    </div>
                                    <div class="single-checbox">
                                        <div class="checkbox-inlines">
                                            <input class="check-input" type="checkbox" id="check16">
                                            <label class="checkbox-label" for="check16"> It is a long established fact that a reader will be distracted. </label>
                                        </div>
                                    </div>
                                    <div class="single-checbox">
                                        <div class="checkbox-inlines">
                                            <input class="check-input" type="checkbox" id="check17">
                                            <label class="checkbox-label" for="check17"> It is a long established fact that a reader will be distracted. </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="line-charts-wrapper margin-top-40">
                                    <div class="line-top-contents">
                                        <h5 class="earning-title"> This Month Summery </h5>
                                    </div>
                                    <div class="chart-summery-inner">
                                        <div class="single-chart-summery">
                                            <div class="icon">
                                                <i class="las la-tasks"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title"> 130 </h4>
                                                <span class="title-para"> Order </span>
                                            </div>
                                        </div>
                                        <div class="single-chart-summery">
                                            <div class="icon">
                                                <i class="las la-dollar-sign"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title"> $6500 </h4>
                                                <span class="title-para"> Earning </span>
                                            </div>
                                        </div>
                                        <div class="single-chart-summery">
                                            <div class="icon">
                                                <i class="las la-file-invoice-dollar"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title"> 3250 </h4>
                                                <span class="title-para"> Balance </span>
                                            </div>
                                        </div>
                                        <div class="single-chart-summery">
                                            <div class="icon">
                                                <i class="las la-male"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title"> 340 </h4>
                                                <span class="title-para"> Repeat Buyer </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-middle-flex style-02">
                        <div class="single-flex-middle margin-top-40">
                            <div class="line-charts-wrapper">
                                <div class="table-responsive table-responsive--md">
                                    <table class="custom--table">
                                        <thead>
                                            <tr>
                                                <th> Client Name </th>
                                                <th> Status </th>
                                                <th> Location </th>
                                                <th> Price </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Client Name"> Riyad Hossain </td>
                                                <td class="completed" data-label="Status"> Completed </td>
                                                <td data-label="Location"> New York </td>
                                                <td data-label="Price"> $1475 </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Client Name"> Arafat Hossain </td>
                                                <td class="canceled" data-label="Status"> Canceled </td>
                                                <td data-label="Location"> Oklahoma </td>
                                                <td data-label="Price"> $1370 </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Client Name"> Shafiq Islam </td>
                                                <td class="pending" data-label="Status"> Pending </td>
                                                <td data-label="Location"> Washington </td>
                                                <td data-label="Price"> $1365 </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Client Name"> Sharif Ahmed </td>
                                                <td class="completed" data-label="Status"> Completed </td>
                                                <td data-label="Location"> Barcelona </td>
                                                <td data-label="Price"> $1400 </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="single-flex-middle margin-top-40">
                            <div class="line-charts-wrapper">
                                <div class="line-top-contents">
                                    <h5 class="earning-title"> Weekly Work Summery </h5>
                                    <div class="line-chart-select">
                                        <select>
                                            <option value="1">Sun</option>
                                            <option value="2">Mon</option>
                                            <option value="3">Tue</option>
                                            <option value="4">Wed</option>
                                            <option value="5">Thu</option>
                                            <option value="6">Fri</option>
                                            <option value="7">Sat</option>
                                          </select>
                                    </div>
                                </div>
                                <div class="group-bar-charts">
                                    <canvas id="bar-chart-grouped"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Dashboard area end -->
  </div>
</template>

<script>
export default {
  mounted() {
    new this.$chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", "July", 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
            datasets: [{
                data: [996, 1054, 1006, 886, 840, 921, 1033, 1121, 1183, 1220, 1080, 800],
                label: "Order",
                borderColor: "#1DBF73",
                borderWidth: 3,
                fill: false,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff',
                pointRadius: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#1DBF73",
            }, {
                data: [786, 814, 880, 1056, 1157, 1181, 1113, 1001, 1043, 1010, 780, 600],
                label: "Traffic",
                borderColor: "#6560FF",
                borderWidth: 3,
                fill: false,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff',
                pointRadius: 5,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: "#6560FF",
            }]
        },
    }); 
    new this.$chart(document.getElementById("bar-chart-grouped"), {
        type: 'bar',
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label: "Painting",
                backgroundColor: "#2F98DC",
                data: [1333, 821, 1983, 478, 2200, 900, 1700],
                barThickness: 10,
                hoverBackgroundColor: '#fff',
                hoverBorderColor: '#2F98DC',
                borderColor: '#fff',
                borderWidth: 2,
            }, {
                label: "Cleaning",
                backgroundColor: "#FFB307",
                data: [708, 1247, 975, 734, 1600, 250, 1300],
                barThickness: 10,
                hoverBackgroundColor: '#fff',
                hoverBorderColor: '#FFB307',
                borderColor: '#fff',
                borderWidth: 2,
            }, {
                label: "Electrical",
                backgroundColor: "#6560FF",
                data: [1708, 347, 1355, 304, 1200, 700, 2300],
                barThickness: 10,
                hoverBackgroundColor: '#fff',
                hoverBorderColor: '#6560FF',
                borderColor: '#fff',
                borderWidth: 2,
            }]
        },
    });
  }
}
</script>