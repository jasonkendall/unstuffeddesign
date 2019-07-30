import $ from "jquery";
import "what-input";

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

$(document).foundation();

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import "./lib/foundation-explicit-pieces";
import "./lib/vendor/jquery.waypoints.min";
import "./lib/vendor/waypoints";
import "./lib/vendor/owl.carousel";
import "./lib/vendor/contact";
import "./lib/vendor/validator";
import "./lib/vendor/jquery.counterup";
import "./lib/vendor/lightbox";
import "./lib/custom";
import "./lib/portfolio";