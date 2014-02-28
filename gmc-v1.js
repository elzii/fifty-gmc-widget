/**
 * Global Moms Challenge Widget
 * Copyright Fifty and Fifty, LLC.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {

  // set vars
  var request = null,
      debug   = true,
      tag_id  = 'gmc_widget';



  // Append iFrame and such
  window.onload = function() {
    // set script/scripts var
    var scripts = document.getElementsByTagName("script"),
        script;

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute("rel") == "gmc") {
        script = scripts[i];
        break;
      }
    }
    if (script) {

      var script_parent_el  = script.parentNode;

      // create the gmc widget document on the page and give it the ID
      var gmc_widget    = document.createElement('div');
          gmc_widget.v  = 0;
          gmc_widget.setAttribute('id', tag_id);

      // create iframe
      var gmc_iframe    = document.createElement('iframe');
          gmc_iframe.setAttribute('id', tag_id);
          gmc_iframe.style.width.value  = '300px';
          gmc_iframe.style.height.value = '350px';

      // create gmc widget styles
      var gmc_widget_styles   = document.createElement('style');
          gmc_widget_styles.v = 0;
          gmc_widget_styles.setAttribute('id', ''+tag_id+'_styles');

      // insert the gmc_widget element near the script tag's position in body
      script_parent_el.insertBefore(gmc_widget);

      // insert the gmc_widget element near the script tag's position in body
      script_parent_el.insertBefore(gmc_iframe);
      

      // IE8+ & Modern Browsers
      //////////////////////////////////////////////////////////////////////////////////////////////////
      if (typeof window.ActiveXObject == 'undefined') {
        request = new XMLHttpRequest;
        request.open('GET', 'https://s3.amazonaws.com/gmc_widget/gmc_numbers/dev_numbers.json', true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            // Success!

            // set data in various forms (raw, string, object)
            data = JSON.parse(request.responseText);

            // remove quotes from css in JSON
            var gmc_widget_styles_raw = data.site_info.css.replace(/\"/g, "");

            // insert the styles near script tag
            script_parent_el.insertBefore(gmc_widget_styles);

            // set the <style> innerHTML to the raw styles
            gmc_widget_styles.innerHTML = gmc_widget_styles_raw;

            gmc_widget_size = script.getAttribute('data-size');
            // build out the HTML string to put in #gmc_widget

            /* 320x320
            ================================================== */
            if ( gmc_widget_size == "320x320" || gmc_widget_size == undefined ) {
              if (debug) console.log('gmc_widget_size', gmc_widget_size);


            } 

            /* 350x350
            ================================================== */
            if ( gmc_widget_size == "350x350" || gmc_widget_size == undefined ) {
              if (debug) console.log('gmc_widget_size', gmc_widget_size);

              
            } 

            /* 300x600
            ================================================== */
            if ( gmc_widget_size == "300x600" || gmc_widget_size == undefined ) {
              if (debug) console.log('gmc_widget_size', gmc_widget_size);

              
            } 

            /* 320x1000
            ================================================== */
            if ( gmc_widget_size == "320x1000" ) {
              if (debug) console.log('gmc_widget_size', gmc_widget_size);
              
              // console.log('gmc_iframe', gmc_iframe.contentWindow.document);
              // var gmc_widget_html = '\
              gmc_iframe.contentWindow.document.write('\
                <header class="gmc_header_large"></header> \
                <div class="gmc_widget_inner"> \
                  <img alt="GMC Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAArCAYAAAB4rD0ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzJGOTJBQzk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzJGOTJBRDk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJDM0RDOTM3OTgxQzExRTNBMzczODA5MzFGNTBFQzc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJDM0RDOTM4OTgxQzExRTNBMzczODA5MzFGNTBFQzc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nINJ1gAAG55JREFUeNrsnQeU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"/> \
                  <div class="gmc_widget_text_content"> ' + JSON.stringify(data.site_info.widget_description).replace(/\"/g, "") + ' \
                    <div class="gmc_stat_box"><div class="gmc_stat_number">' + JSON.stringify(data.numbers.share_number).replace(/\"/g, "") + '</div><span>Actions taken to help every woman and every child lead healthy lives.</span></div> \
                  </div> \
                </div> \
                <footer> \
                  <a href="http://globalmomschallenge.com/relay" target="_blank" class="gmc_button gmc_todays_post"> \
                    <img alt="GMC" class="gmc_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzJGOTJCNDk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzJGOTJCNTk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMkY5MkIyOTgxRTExRTNBMzczODA5MzFGNTBFQzc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzMkY5MkIzOTgxRTExRTNBMzczODA5MzFGNTBFQzc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5eGTLwAAAQRJREFUeNqkVIENgjAQBCboCGwgG9gNZARG0AmMEzhC3QA3QCYAJ2AE3KA+yT15myKFXnIpfPKX/v/1U2tt4kARS+KRmIv4i/gmPpMQTMKgIhq7jpF4Fnle8keBhC1ocJlF4XyHKKP+J2xsHLSoehbOMKgYnHA2xIqDGVwQA3ZOTzREzcJ9pHCLU+M0bLcqor8jnFE68ZybvXeAJfI7d6DSItcNgoNwgfFU8fPyisBHUaH8pZd6l8JKlDPi9goe1Y5HFcQHj2jHrzHFEirhxxZL5oMJF7DjxAP+9YJFH8TLnLu2THC7OqBNlW8JhbIQ7XFbMsqWpZ59vAe8v6c23KbAV4ABAMoYfgWVh3MpAAAAAElFTkSuQmCC"/> \
                    See Today\'s Post</a> \
                  <a href="' + JSON.stringify(data.site_info.learn_more_url).replace(/\"/g, "") + '" target="_blank" class="gmc_button gmc_learn_more"> \
                    <img alt="GMC" class="gmc_icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzJGOTJCMDk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzJGOTJCMTk4MUUxMUUzQTM3MzgwOTMxRjUwRUM3NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzMkY5MkFFOTgxRTExRTNBMzczODA5MzFGNTBFQzc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzMkY5MkFGOTgxRTExRTNBMzczODA5MzFGNTBFQzc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m3G9mwAAAQNJREFUeNqsVAENgzAQLFWAgzEFYw6QwBzgYHOABCQgYXPQTQE4KA7AQfcl3+VTvgUyLrlA+t9L/6/9xBgjVlDgtwdO0Uwr5jEFPoCdWUIDa8xZ7PUXSuBINtt/hdTeehUTq5iT1CReM/GWiknSl1bsR4WckaABGpgxyRM2XmA8lHMFDhKVuaSeCMWQAu/Ozafh4ZtTmzC061kh/oetLJV4TA4dbe4G5DIWBJ52iM0GvMUxmMX6A4Rezs0s4BD7/gK5BX1OzYarERJTLuZegHVUYdMdboGRo7zbf/7leaNHme2wIyqPjSB308cVoYbraRKYtLbsEnghpQ/ADzrHTtyvAAMAgs48xR9deR8AAAAASUVORK5CYII="/> \
                    ' + JSON.stringify(data.site_info.learn_more_text).replace(/\"/g, "") + '</a> \
                  <div class="gmc_site_link"><a href="http://globalmomschallenge.org" target="_blank">GLOBALMOMSCHALLENGE.ORG</a></div> \
                  <div class="gmc_notice">* up to $250,000</div> \
                </footer> \
                ');
            }
            


            // set widget innerHTML to the HTML string
            gmc_widget.innerHTML = gmc_widget_html;


            // Console log some data
            if ( debug ) {
              console.log('-------------------------------------------------------------');
              console.log('data: ', data); 
            }

            
          } else {
            // We reached our target server, but it returned an error
            gmc_widget.innerHTML = 'Error';
          }
        };
        request.onerror = function() {
          // There was a connection error of some sort
        };

        request.send();

      }



      // DEBUG
      if ( debug ) {
        console.log('script: ', script);
        console.log('script.getAttribute("data-size"): ', script.getAttribute("data-size"));
        console.log('gmc_widget: ', gmc_widget);
      }
    }
  };


} catch (e) {
    console.log('There was an error: ', e)
}