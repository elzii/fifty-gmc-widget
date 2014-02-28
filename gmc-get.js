/**
 * Global Moms Challenge Widget
 * Copyright Fifty and Fifty, LLC.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {

 var request = null ;

  // < IE8
  //////////////////////////////////////////////////////////////////////////////////////////////////
  if (typeof window.ActiveXObject != 'undefined' ) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
    request.onreadystatechange = process;

    if (request.status >= 200 && request.status < 400){
      // Success!

      // Parse the JSON, set as data
      data = JSON.parse(request.responseText);

      // Console log it
      console.log(data);

      // Display on document in #output
      document.getElementById("output").value = _parse(data_json);

    } else {
      // We reached our target server, but it returned an error
      document.getElementById("output").value = 'Error';
    }

    request.send();
  }

  // IE8+ & Modern Browsers
  //////////////////////////////////////////////////////////////////////////////////////////////////
  else {
    request = new XMLHttpRequest;
    request.open('GET', 'https://s3.amazonaws.com/gmc_widget/gmc_numbers/dev_numbers.json', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success!

        // set data in various forms (raw, string, object)
        data  = JSON.parse(request.responseText);

        // Console log some data
        console.log('data: ', data);
        console.log('data.numbers: ', data.numbers);
        console.log('data.numbers.share_dollars: ', data.numbers.share_dollars);
        console.log('data.site_info: ', data.site_info);

        // Show in pre#data
        document.getElementById("output").value = _parse(data);
      } else {
        // We reached our target server, but it returned an error
        document.getElementById("output").value = 'Error';
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();

  } 

  // Helper parsing functions
  function _parse(obj) {
    return JSON.stringify(obj);
  }
} catch (e) {
    console.log('There was an error: ', e)
}