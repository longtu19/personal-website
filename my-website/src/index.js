import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// $(window).scroll(function(){
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
  
//   var scroll = $window.scrollTop() + ($window.height() /3);
//   $panel.each(function (){
//     var $this = $(this);
//     if($this.position().top <= scroll &&
//     $this.position().top + $this.height() > scroll){
//       $body.removeClass(function(index, css){
//         return (css.match(/(^|\s)color-\S+/g) || []).join('');
//       })

//       $body.addClass('color' + $(this).data('color'));
//     }

 
//   })

// }).scroll();




