//bytes = body.length
const request = require('request');
const fs = require('fs')

const requestFunction = (url, filePath) => {

request(url, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  };

  fs.writeFile(filePath, body, err => {

    if (err) {
      console.log('fail to write to local path', err)
      return
    };

    console.log(`wrote ${body.length} bytes to index.txt`); // Print the HTML for the Google homepage.
  });


});


};

//take cmnd args and put into code w/template literals
clArgs = process.argv.slice(2);



if (!clArgs) {// if args for path or url are not valid or not present
  //console.log a custom prompt/error message
  //else is calling function with parameters
 console.log('This app downloads a webpage and writes it to a local file. Please enter a url and a local file path.')

} else {

  requestFunction(clArgs[0], clArgs[1]);
}
