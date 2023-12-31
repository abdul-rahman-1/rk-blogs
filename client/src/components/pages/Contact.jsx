import React from "react";



export const Con = () => {
  return <>
  <div className="container mt-5 sc">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <p>
            We'd love to hear from you! Reach out to us using the contact
            details below.
          </p>

          <address>
            <div className="mb-3">
              <strong>RK-Blog Headquarters</strong>
              <br />
              123 Main Street
              <br />
              Cityville, State 12345
            </div>

            <div className="mb-3">
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </div>

            <div className="mb-3">
              <abbr title="Email">E:</abbr> info@rk-blog.com
            </div>
          </address>

          <div className="mt-4">
            <h4>Follow us on Social Media</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://twitter.com/rkblog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://facebook.com/rkblog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://instagram.com/rkblog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          {/* Replace the iframe src value with your own Google Maps embed code */}
          <iframe
            title="RK-Blog Headquarters Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.00597265000002!3d40.71277530000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzU3LjAiTiA3NMKwMDcnMDAuOCJX!5e0!3m2!1sen!2sus!4v1609453940879!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </div>
  </>;
};