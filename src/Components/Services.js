import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div class="container mt-5">
        <h1 class="text-center">Services</h1>
        <div class="row">
          <div class="col-lg-4 mt-4">
            <div class="card servicesText">
              <div class="card-body">
                <i class="fas servicesIcon fa-camera-retro"></i>
                <h4 class="card-title mt-3 text-code">Photography</h4>
                <p class="card-text mt-3 text-justify">
                  Photography is the art, application, and practice of creating
                  durable images by recording light, either electronically by
                  means of text-justifyan image sensor, or chemically by means
                  of a light-sensitive material such as photographic film.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-4">
            <div class="card servicesText">
              <div class="card-body">
                <i class="fas servicesIcon fa-layer-group"></i>
                <h4 class="card-title mt-3 text-code">Website Design</h4>
                <p class="card-text mt-3 text-justify">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="card servicesText">
              <div class="card-body">
                <i class="far servicesIcon fa-check-circle"></i>
                <h4 class="card-title mt-3 text-code ">Website Deployment</h4>
                <p class="card-text mt-3 text-justify">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
