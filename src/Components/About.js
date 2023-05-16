import React from "react";

export default function About() {
  return (
    <section id="about">
      <div class="container mt-4 pt-4">
        <h1 class="text-center">About Me</h1>
        <div class="row mt-4">
          <div class="col-lg-4">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQEE3QKsCeCr7Q/profile-displayphoto-shrink_800_800/0/1647759612528?e=2147483647&v=beta&t=Pu371Jae12T8KmfD1F9l-Pdfsfem9crthfNRjgZiJJY"
              class="imageAboutPage"
              alt=""
            />
          </div>

          <div class="col-lg-8">
            <p>
              {" "}
              Hello, I'm Vishal Vadodariya, a professional photographer with 5
              years of experience capturing moments and memories that last a
              lifetime. With a keen eye for detail and a passion for creating
              beautiful images, I've been honored to win numerous local and
              international awards.
            </p>
            <div class="row mt-3">
              <div class="col-md-6">
                <ul>
                  <li>Name: Vishal Vadodariya</li>
                  <li>Age: 21</li>
                  <li>Occupation: Professional Photgrapher</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>Achievement: 20+</li>
                  <li>Best Award: Amateur Photographer of the Year(2021) </li>
                  <li>Experience: 5(years)</li>
                </ul>
              </div>
            </div>
            <div class="row mt-3">
              <p>
                One of the hardest things to do is selling yourself. Writing
                about yourself feels awkward and sometimes really cringey. The
                problem lies in balancing modesty while also presenting your
                competency and talent. And because of this, some, if not most,
                freelancers are really having a difficult time writing about
                themselves.While showcasing your works through portfolios and
                online pages is perhaps easier in marketing your service,
                clients will still look for your personal and professional
                profile. Of course, they want to know who they will be working
                with. So, it is still advisable and very much recommended that
                you include information about yourself on your website, social
                media pages, and other platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
