This helps in finding Largest City and Capital of a state using the response from REST service http://services.groupkt.com/state/get/USA/all.

As this service is not accepting CORS request, I can't use simple XMLHttpRequest with CORS headers to access the server from browser. I used following two methods to solve this.

1) Saved Server response in yahoo.js file as a variable and used it to find the largest city and capital. Code for this is  in  yahoo.html and yahoo.js. To test this, please open yahoo.html in browser.

2)Used this plugin for successful CORS request : https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US.
    In this, I made an  XMLHttpRequest and fetch the server response and used it to find largest city and capital. To test this please open cors.html in browser. Above plugin needs to be installed and enabled for CORS request to work.

3)Test cases handled: 
     1) Server response status code (only for cors approach).
     2) On ready state (only for cors approach).
     3) Invalid State input.
     4) Blank State input.
     5) Case Sensitivity of the Input.
     6) Trim Leading and Trailing spaces.
     7) Undefined Largest City.
