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
          document.getElementById(tag_id).value = JSON.stringify(data_json);

        } else {
          // We reached our target server, but it returned an error
          document.getElementById(tag_id).value = 'Error';
        }

        request.send();
      }