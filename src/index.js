import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/swiper-bundle.min.css";
// Template Main CSS Stylesheet
import "./css/style.css";

// Vendor JS Files
import AOS from "aos/dist/aos.js";
import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle.js";
import GLightbox from "glightbox/dist/js/glightbox.js";
import Isotope from "isotope-layout/js/isotope.js";
import Swiper from "swiper";
import Waypoint from "waypoints/lib/noframework.waypoints.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
