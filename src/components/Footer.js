import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Priority Health</h3>
                <p>
                  A108 Adam Street <br />
                  Mumbai
                  <br />
                  Maharastra
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9846736737
                  <br />
                  <strong>Email:</strong> healthinsurance@example.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h2>Your Health, Our Priority</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
