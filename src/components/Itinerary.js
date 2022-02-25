import React from "react";

const Itinerary = () => {
  return (
    <div className="iterary">

      <div class="title">
        <h2>Shimla Itinerary</h2>
        
      </div>
      <div class="timeline">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="timeline-container">
                <div class="timeline-end">
                  <p>Start</p>
                </div>
                <div class="timeline-continue">
                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <p class="timeline-date url-bg-0">Day 0</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-gift"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Departure From Pune</h3>
                          <p>
                            <ul>
                              <li>We met at pune airport to start our journey with full excitment and enthusiasm.</li>                              
                              <li>Reached Chandigad, checked in and concluded the day.</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block">
                      <p class="timeline-date url-bg-1">Day 1</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon d-md-none d-block">
                          <i class="fa fa-business-time"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>To Shimla, Mall Street</h3>
                          <p>
                            <ul>
                              <li>Breakfast and start the finally awaited journey to the destination, Shimla.</li>
                              <li>After reaching Shimla first to visit is Mall Street and rest of the day at leisure.</li>
                            </ul>
                          </p>
                        </div>
                        <div class="timeline-icon d-md-block d-none">
                          <i class="fa fa-business-time"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none">
                      <p class="timeline-date url-bg-1">Day 1</p>
                    </div>
                  </div>

                  

                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <p class="timeline-date url-bg-2">Day 2</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-briefcase"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Kalka-Shimla Railway</h3>
                          <p>
                            <ul>
                              <li>Early morning breakfast and check-out from hotel and left for Kalka-Shimla Railway.</li>
                              <li>After seeing the railroads we headed to Christ Church.</li>
                              <li>Check-in at hotel</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block">
                      <p class="timeline-date url-bg-4">Day 4</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon d-md-none d-block">
                          <i class="fa fa-cogs"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Green Valley</h3>
                          <p>
                            <ul>
                              <li>Wake up early in the morning, freshen up and have breakfast.</li>
                              <li>A breath-taking natural dale near Shimla and Kufri, Green Valley stands true to its name.</li>
                            </ul>
                          </p>
                        </div>
                        <div class="timeline-icon d-md-block d-none">
                          <i class="fa fa-cogs"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none">
                      <p class="timeline-date url-bg-3">Day 3</p>
                    </div>
                  </div>

                  <div class="row timeline-right">
                    <div class="col-md-6">
                      <p class="timeline-date url-bg-4">Day 4</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-running"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Tara Devi Temple</h3>
                          <p>
                            <ul>
                              <li>Wake up early in the morning, freshen up and have breakfast.</li>
                              <li>You must not miss out on visiting the Tara Devi Temple. Located atop the hill called Tara Parvat.</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block">
                      <p class="timeline-date url-bg-5">Day 5</p>
                    </div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon d-md-none d-block">
                          <i class="fa fa-home"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Return Journey</h3>
                          <p>
                            <ul>
                              <li>The journey we all hate but has to be Done.</li>
                              <li>Woke up, freshen up, had breakfast and got on taxi for Chandigad.</li>
                            </ul>
                          </p>
                        </div>
                        <div class="timeline-icon d-md-block d-none">
                          <i class="fa fa-home"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none">
                      <p class="timeline-date url-bg-5">Day 5</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-start">
                  <p>End</p>
                </div>
                <div class="timeline-launch">
                  <div class="timeline-box">
                    <div class="timeline-text">
                      <h3>Trip ended</h3>
                      <p>Trip ended But we got the timeless treasure of heart, The Memories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
