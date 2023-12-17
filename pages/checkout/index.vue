<template>
  <div>
    <section class="location-overview-area padding-top-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <form id="msform" class="msform">
              <ul class="overview-list step-list">
                <li class="list active" id="account">
                  <a class="list-click" href="javascript:void(0)">
                    <span class="list-number">1</span> Dirección
                  </a>
                </li>
                <li class="list">
                  <a class="list-click" href="javascript:void(0)">
                    <span class="list-number">2</span> Reciclables
                  </a>
                </li>
                <li class="list">
                  <a class="list-click" href="javascript:void(0)">
                    <span class="list-number">3</span> Fecha
                  </a>
                </li>
                <li class="list">
                  <a class="list-click" href="javascript:void(0)">
                    <span class="list-number">4</span> Donación (Opcional)
                  </a>
                </li>
                <li class="list">
                  <a class="list-click" href="javascript:void(0)">
                    <span class="list-number">5</span> Confirmación
                  </a>
                </li>
              </ul>
              <!-- Location -->
              <fieldset
                v-if="step == 1"
                class="padding-top-50 padding-bottom-100"
              >
                <div class="overview-list-all">
                  <div class="overview-location">
                    <div
                      class="single-location active margin-top-30 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <span class="location"> Buenos Aires </span>
                    </div>
                    <div
                      class="single-location margin-top-30 wow fadeInDown"
                      data-wow-delay=".3s"
                    >
                      <span class="location"> Córdoba </span>
                    </div>
                    <NuxtLink
                      class="single-location margin-top-30 wow fadeInDown"
                      to="/contact-us"
                    >
                      <span class="location"> Otro </span>
                    </NuxtLink>
                  </div>
                </div>
                <!-- Contact Map Starts -->
                <div class="contact-map-area padding-top-100">
                  <div class="container">
                    <div class="d-flex w-100">
                      <div class="flex-1 w-100 px-4">
                        <div class="info-service single-forms">
                          <div class="single-info-service margin-top-30">
                            <div class="single-content">
                              <label class="forms-label">
                                Donde deben buscar tus reciclables?
                              </label>
                              <FormulateInput
                                @validation="addressValidation"
                                @input="addAddress('address')"
                                error-behavior="live"
                                input-class="form--control text-area"
                                help-class="small-text position-absolute"
                                error-class="text-danger custom-error"
                                v-model="address"
                                label="Ingresa tu dirreccion"
                                name="direccion"
                                :error="'SOme message'"
                                required
                              />
                            </div>
                            <div class="single-content">
                              <label class="forms-label">
                                Instrucciones extra
                              </label>
                              <FormulateInput
                                @validation="addressValidation"
                                @input="addAddress('extraInstructions')"
                                error-behavior="live"
                                input-class="form--control text-area"
                                help-class="small-text position-absolute"
                                error-class="text-danger custom-error"
                                v-model="extraInstructions"
                                label="Ingresa tu dirreccion"
                                name="instrucciones-extra"
                                :error="'SOme message'"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex-1 w-100 contact-map">
                        <span class="select-location">
                          Ubica el mapa (Opcional)
                        </span>

                        <div class="map-container">
                          <div id="area-map"></div>
                          <div
                            id="checkoutBanner"
                            :style="`
                              width: 200px;
                              position: absolute;
                              z-index: 999;
                              background-color: rgba(51, 136, 255, 0.7);
                              border: 2px solid rgba(255, 255, 255, 0.8);
                              padding: 10px;
                              border-radius: 10px;
                              box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
                              color: white;
                              font-family: Arial, sans-serif;
                              font-size: 14px;
                              text-align: center;
                              top: 0px;
                              right: 0px;`"
                          >
                            <span id="bannerContent"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Contact Map end -->
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
              </fieldset>
              <!-- Service -->
              <fieldset
                v-else-if="step == 2"
                class="padding-top-50 padding-bottom-100"
              >
                <div class="row">
                  <div class="col-lg-8 margin-top-30">
                    <div class="service-overview-wrapper padding-bottom-30">
                      <div class="overview-author overview-author-border">
                        <div class="overview-flex-author">
                          <div class="overview-thumb">
                            <img
                              src="assets/img/service/overview1.jpg"
                              alt=""
                            />
                          </div>
                          <div class="overview-contents">
                            <h4 class="overview-title">
                              <a href="javascript:void(0)">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing about Aelit</a
                              >
                            </h4>
                            <span class="overview-review">
                              <i class="las la-star"></i> 4.9 <b>(231)</b>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="overview-single padding-top-40">
                        <h4 class="title">What's Included</h4>
                        <div class="include-contents margin-top-30">
                          <div class="single-include">
                            <ul class="include-list">
                              <li class="lists">
                                <div class="list-single">
                                  <span class="rooms"> 3 Bed Room </span>
                                </div>
                                <div class="list-single">
                                  <span class="values"> $30 </span>
                                  <span class="value-input">
                                    <input type="text" value="3" />
                                  </span>
                                </div>
                              </li>
                              <li class="lists">
                                <a class="remove" href="javascript:void(0)"
                                  >Remove</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="single-include">
                            <ul class="include-list">
                              <li class="lists">
                                <div class="list-single">
                                  <span class="rooms"> 2 Bed Room </span>
                                </div>
                                <div class="list-single">
                                  <span class="values"> $20 </span>
                                  <span class="value-input">
                                    <input type="text" value="2" />
                                  </span>
                                </div>
                              </li>
                              <li class="lists">
                                <a class="remove" href="javascript:void(0)"
                                  >Remove</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="overview-single padding-top-60">
                        <h4 class="title">Upgrade your order with extras</h4>
                        <div class="row">
                          <div class="col-lg-6 margin-top-30">
                            <div class="overview-extra">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check4"
                                />
                                <label class="checkbox-label" for="check4">
                                  Kitchen Cleaning
                                </label>
                              </div>
                              <div class="overview-extra-flex-content">
                                <div class="list-single">
                                  <span class="values"> $25 </span>
                                  <span class="value-input">
                                    <input type="text" value="3" />
                                  </span>
                                </div>
                                <span class="price-value"> $50 </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 margin-top-30">
                            <div class="overview-extra">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check5"
                                />
                                <label class="checkbox-label" for="check5">
                                  Kitchen Cleaning
                                </label>
                              </div>
                              <div class="overview-extra-flex-content">
                                <div class="list-single">
                                  <span class="values"> $25 </span>
                                  <span class="value-input">
                                    <input type="text" value="3" />
                                  </span>
                                </div>
                                <span class="price-value"> $50 </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 margin-top-30">
                            <div class="overview-extra">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check6"
                                />
                                <label class="checkbox-label" for="check6">
                                  Kitchen Cleaning
                                </label>
                              </div>
                              <div class="overview-extra-flex-content">
                                <div class="list-single">
                                  <span class="values"> $25 </span>
                                  <span class="value-input">
                                    <input type="text" value="3" />
                                  </span>
                                </div>
                                <span class="price-value"> $50 </span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 margin-top-30">
                            <div class="overview-extra">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check7"
                                />
                                <label class="checkbox-label" for="check7">
                                  Kitchen Cleaning
                                </label>
                              </div>
                              <div class="overview-extra-flex-content">
                                <div class="list-single">
                                  <span class="values"> $25 </span>
                                  <span class="value-input">
                                    <input type="text" value="3" />
                                  </span>
                                </div>
                                <span class="price-value"> $50 </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="overview-single padding-top-60">
                        <h4 class="title">Benifits of the Package:</h4>
                        <ul class="overview-benefits margin-top-30">
                          <li class="list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed a egestas leo.
                          </li>
                          <li class="list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed a egestas leo.
                          </li>
                          <li class="list">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed a egestas leo.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 margin-top-30">
                    <div class="service-overview-summery">
                      <h4 class="title">Booking Summery</h4>
                      <div class="overview-summery-contents">
                        <div class="single-summery">
                          <span class="summery-title">
                            Appointment Package Service
                          </span>
                          <div class="summery-list-all">
                            <ul class="summery-list">
                              <li class="list">
                                <span class="rooms"> Bed Room</span>
                                <span class="room-count">3</span>
                                <span class="value-count">$90</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Bath Room</span>
                                <span class="room-count">2</span>
                                <span class="value-count">$60</span>
                              </li>
                            </ul>
                            <ul class="summery-result-list">
                              <li class="result-list">
                                <span class="rooms"> Pagckage Fee</span>
                                <span class="value-count">$150</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="single-summery">
                          <span class="summery-title"> Extra Service </span>
                          <div class="summery-list-all">
                            <ul class="summery-list">
                              <li class="list">
                                <span class="rooms"> Kitchen</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$50</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Fridge</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$20</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Garden</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$60</span>
                              </li>
                            </ul>
                            <ul
                              class="summery-result-list result-border padding-bottom-20"
                            >
                              <li class="result-list">
                                <span class="rooms"> Subtotal</span>
                                <span class="value-count">$280</span>
                              </li>
                            </ul>
                            <ul
                              class="summery-result-list result-border padding-bottom-20"
                            >
                              <li class="result-list">
                                <span class="rooms"> Tax(+)15%</span>
                                <span class="value-count">$42</span>
                              </li>
                            </ul>
                            <ul class="summery-result-list">
                              <li class="result-list">
                                <span class="rooms">
                                  <strong>Total</strong></span
                                >
                                <span class="value-count">$280</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="btn-wrapper">
                          <a
                            href="javascript:void(0)"
                            class="cmn-btn btn-appoinment btn-bg-1"
                          >
                            Continue
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                />
              </fieldset>
              <!-- Date & Time -->
              <fieldset
                v-else-if="step == 3"
                class="padding-top-50 padding-bottom-100"
              >
                <div class="date-overview">
                  <div class="single-date-overview margin-top-30">
                    <h4 class="date-time-title">Available on Feb 2022</h4>
                    <ul class="date-time-list margin-top-20">
                      <li class="list">
                        <a href="javascript:void(0)"> 05 Feb,2022 - Sun </a>
                      </li>
                      <li class="list active">
                        <a href="javascript:void(0)"> 06 Feb,2022 - Sun </a>
                      </li>
                      <li class="list">
                        <a href="javascript:void(0)"> 07 Feb,2022 - Sun </a>
                      </li>
                      <li class="list">
                        <a href="javascript:void(0)"> 08 Feb,2022 - Sun </a>
                      </li>
                      <li class="list">
                        <a href="javascript:void(0)"> 09 Feb,2022 - Sun </a>
                      </li>
                    </ul>
                  </div>
                  <div class="single-date-overview margin-top-30">
                    <h4 class="date-time-title">
                      Available schedule on 06 Feb, 2022
                    </h4>
                    <ul class="date-time-list margin-top-20">
                      <li class="list">
                        <a href="javascript:void(0)"> 10.00AM-11.00AM </a>
                      </li>
                      <li class="list">
                        <a href="javascript:void(0)"> 12.00AM-01.00PM </a>
                      </li>
                      <li class="list">
                        <a href="javascript:void(0)"> 04.00AM-05.00AM </a>
                      </li>
                      <li class="list active">
                        <a href="javascript:void(0)"> 06.00AM-07.00AM </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-wrapper margin-top-30">
                    <a href="javascript:void(0)" class="cmn-btn btn-bg-1"
                      >Book Appoinmnent</a
                    >
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                />
              </fieldset>
              <!-- Information -->
              <fieldset
                v-else-if="step == 4"
                class="padding-top-50 padding-bottom-100"
              >
                <div class="Info-overview padding-top-30">
                  <h3 class="date-time-title">Booking Information</h3>
                  <div class="single-info-overview margin-top-30">
                    <div class="single-info-input">
                      <label class="info-title"> Your Name* </label>
                      <input
                        class="form--control"
                        type="text"
                        name="name"
                        placeholder="Type Your Name"
                      />
                    </div>
                    <div class="single-info-input">
                      <label class="info-title"> Your Email* </label>
                      <input
                        class="form--control"
                        type="email"
                        name="email"
                        placeholder="Type Your Email"
                      />
                    </div>
                  </div>
                  <div class="single-info-overview margin-top-30">
                    <div class="single-info-input">
                      <label class="info-title"> Phone Number* </label>
                      <input
                        class="form--control"
                        type="tel"
                        placeholder="Type Your Number"
                      />
                    </div>
                    <div class="single-info-input">
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
                  <div class="single-info-overview margin-top-30">
                    <div class="single-info-input">
                      <label class="info-title"> Your Area* </label>
                      <input
                        class="form--control"
                        type="text"
                        placeholder="Type Your Area"
                      />
                    </div>
                    <div class="single-info-input">
                      <label class="info-title"> Post Code* </label>
                      <input
                        class="form--control"
                        type="tel"
                        placeholder="Type Post Code"
                      />
                    </div>
                  </div>
                  <div class="single-info-overview margin-top-30">
                    <div class="single-info-input">
                      <label class="info-title"> Your Address* </label>
                      <input
                        class="form--control"
                        type="text"
                        placeholder="Type Your Address"
                      />
                    </div>
                  </div>
                  <div class="single-info-overview margin-top-30">
                    <div class="single-info-input">
                      <label class="info-title"> Order Note* </label>
                      <textarea
                        class="form--control textarea--form"
                        name="message"
                        placeholder="Type Order Note"
                      ></textarea>
                    </div>
                  </div>
                  <div class="btn-wrapper margin-top-35">
                    <button type="submit" class="cmn-button btn-bg-1">
                      Continue
                    </button>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  class="next action-button"
                  value="Next"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                />
              </fieldset>
              <!-- Confirmation -->
              <fieldset
                v-else-if="step == 5"
                class="padding-top-50 padding-bottom-100"
              >
                <div class="confirm-overview padding-top-30">
                  <div class="overview-author overview-author-border">
                    <div class="overview-flex-author">
                      <div class="overview-thumb confirm-thumb">
                        <img src="assets/img/service/overview1.jpg" alt="" />
                      </div>
                      <div class="overview-contents">
                        <h2 class="overview-title confirm-title">
                          <a href="javascript:void(0)"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            about Aelit</a
                          >
                        </h2>
                        <span class="overview-review">
                          <i class="las la-star"></i> 4.9 <b>(231)</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8">
                    <div class="confirm-overview-left margin-top-30">
                      <div class="single-confirm-overview">
                        <div class="single-confirm margin-top-30">
                          <h3 class="titles">Location</h3>
                          <span class="details"> Los Angeles, </span>
                          <span class="details"> California </span>
                        </div>
                        <div class="single-confirm margin-top-30">
                          <h3 class="titles">Date & Time</h3>
                          <span class="details"> 06 Feb 2022 </span>
                          <span class="details"> 6:00PM-7:00PM </span>
                        </div>
                      </div>
                      <div class="booking-info padding-top-60">
                        <h2 class="title">Booking Information</h2>
                        <div class="booking-details">
                          <ul class="booking-list">
                            <li class="lists">
                              <span class="list-span"> Name: </span>
                              <span class="list-strong"> Jhon Dhoe </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Email: </span>
                              <span class="list-strong">
                                Customer@mail.com
                              </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Phone: </span>
                              <span class="list-strong"> 011-2234567890 </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> City: </span>
                              <span class="list-strong"> New york </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Area: </span>
                              <span class="list-strong"> New york </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Post Code: </span>
                              <span class="list-strong"> 1122 </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Address: </span>
                              <span class="list-strong">
                                2608 Ritter Avenue Livonia, MI 48150
                              </span>
                            </li>
                            <li class="lists">
                              <span class="list-span"> Order Note: </span>
                              <span class="list-strong">
                                it is a long established fact that a reader will
                                be distra by the readable content of a page when
                                looking at its layout. The point of using Lorem
                                Ipsum is that.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 margin-top-60">
                    <div class="service-overview-summery">
                      <h4 class="title">Booking Summery</h4>
                      <div class="overview-summery-contents">
                        <div class="single-summery">
                          <span class="summery-title">
                            Appointment Service
                          </span>
                          <div class="summery-list-all">
                            <ul class="summery-list">
                              <li class="list">
                                <span class="rooms"> Bed Room</span>
                                <span class="room-count">3</span>
                                <span class="value-count">$90</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Bath Room</span>
                                <span class="room-count">2</span>
                                <span class="value-count">$60</span>
                              </li>
                            </ul>
                            <ul class="summery-result-list">
                              <li class="result-list">
                                <span class="rooms"> Appoinment Fee</span>
                                <span class="value-count">$150</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="single-summery">
                          <span class="summery-title"> Extra Service </span>
                          <div class="summery-list-all">
                            <ul class="summery-list">
                              <li class="list">
                                <span class="rooms"> Kitchen</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$50</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Fridge</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$20</span>
                              </li>
                              <li class="list">
                                <span class="rooms"> Garden</span>
                                <span class="room-count">1</span>
                                <span class="value-count">$60</span>
                              </li>
                            </ul>
                            <ul
                              class="summery-result-list result-border padding-bottom-20"
                            >
                              <li class="result-list">
                                <span class="rooms"> Subtotal</span>
                                <span class="value-count">$280</span>
                              </li>
                            </ul>
                            <ul
                              class="summery-result-list result-border padding-bottom-20"
                            >
                              <li class="result-list">
                                <span class="rooms"> Tax(+)15%</span>
                                <span class="value-count">$42</span>
                              </li>
                            </ul>
                            <ul class="summery-result-list">
                              <li class="result-list">
                                <span class="rooms">
                                  <strong>Total</strong></span
                                >
                                <span class="value-count">$280</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="confirm-bottom-content">
                          <div class="confirm-payment payment-border">
                            <div class="single-checkbox">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check1"
                                />
                                <label class="checkbox-label" for="check1">
                                  Cash Payment
                                </label>
                              </div>
                            </div>
                            <div class="single-checkbox">
                              <div class="checkbox-inlines">
                                <input
                                  class="check-input"
                                  type="checkbox"
                                  id="check2"
                                />
                                <label class="checkbox-label" for="check2">
                                  <img
                                    src="assets/img/service/payment.png"
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="checkbox-inlines bottom-checkbox">
                            <input
                              class="check-input"
                              type="checkbox"
                              id="check3"
                            />
                            <label class="checkbox-label" for="check3">
                              I have read and agree to the website
                              <a href="javascript:void(0)">
                                terms and conditions *
                              </a>
                            </label>
                          </div>
                        </div>
                        <div class="btn-wrapper">
                          <a
                            href="javascript:void(0)"
                            class="cmn-btn btn-appoinment btn-bg-1"
                          >
                            Pay & Confirm Your Order
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  name="submit"
                  class="next action-button"
                  value="Submit"
                />
                <input
                  type="button"
                  name="previous"
                  class="previous action-button-previous"
                  value="Previous"
                />
              </fieldset>
              <!-- Successful Complete -->
              <fieldset v-else class="padding-top-80 padding-bottom-100">
                <div class="form-card successful-card">
                  <h2 class="title-step">SUCCESS !</h2>
                  <div class="succcess-icon">
                    <i class="las la-check"></i>
                  </div>
                  <h5 class="purple-text text-center">
                    You Have Successfully Signed Up
                  </h5>
                  <div class="btn-wrapper text-center margin-top-35">
                    <a href="index.html" class="cmn-btn btn-bg-1">
                      Back To Home</a
                    >
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: ["userIsLogged"],
  data() {
    return {
      address: "",
      extraInstructions: "",
      addressValidation: {},
      userLocation: {
        center: [-31.416668, -64.183334],
        state: "cordoba",
      },
    };
  },
  async asyncData({ store, $fire }) {
    // Update basic information
    const SPLIT_NAME = store.state.user.displayName.split(" ");
    const FIRST_NAME = store.state.user.firstName
      ? store.state.user.firstName
      : SPLIT_NAME[0];
    const LAST_NAME = SPLIT_NAME[SPLIT_NAME.length - 1];

    /* const RECYCLER_INFORMATION = (
      await $fire.database
        .ref("collectors")
        .orderByChild("user_uid")
        .equalTo(store.state.user.uid)
        .get()
    ).val(); */

    // Get the recycler id
    /* const RECYCLER_ID = Object.keys(RECYCLER_INFORMATION)[0]; */

    // Define the step it should go
    let step = 1;

    return {
      step,
    };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap(switchCoordinates = false) {
      const COORDINATES = {
        "buenos-aires": [-34.603722, -58.381592],
        cordoba: [-31.416668, -64.183334],
      };

      // Change coordinates
      if (switchCoordinates)
        this.userLocation.center = COORDINATES[this.userLocation.state];

      // Create map with marker only
      this.$d3.createCheckoutMap("area-map", this.userLocation, 11);
    },
    addAddress(type){
      console.log(type)
    }
  },
};
</script>

<style scoped>
/* -------- MAP ----- */
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.map-container #area-map {
  width: 100%; /* Adjust the width as needed */
  max-width: 800px; /* Set a maximum width if desired */
  height: 400px; /* Set a maximum width if desired */
  padding: 10px; /* Add padding to create space around the map */
  border: 1px solid #ddd; /* Add a border with a light gray color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
}
/* -------- / MAP ----- */
</style>
