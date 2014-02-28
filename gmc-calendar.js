(function ($) {

  'use strict'

  window.GLOBALMOMSCHALLENGE = {}

  var GMC = window.GLOBALMOMSCHALLENGE
  

  // SET ELEMENTS
  ////////////////////////////////////
  GMC.setElements = function() {
    GMC.el = {}
    GMC.el.calendar_post_list       = $('#calendar_post_list');
    GMC.el.calendar_post_list_item  = $('#calendar_post_list li');
    GMC.el.calendar_post            = $('#calendar_post');
    
  };

  // CALENDAR POSTS
  ////////////////////////////////////
  GMC.calendarPosts = function() {

    // click event for post <li>s
    var post_item = GMC.el.calendar_post_list_item;

    post_item.each(function (i, v) {
      alert(i, v);
    });

  };
  

  // DOM READY
  /////////////////////////////////////
  jQuery(document).ready(function($) {
    
  });
  
}(jQuery);