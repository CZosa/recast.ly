var searchYouTube = (options, callback) => {
  // use jQuery to send GET request to the search endpoint
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {'maxResults': options.max,
  //          'q': options.query,
  //          'key': options.key,
  //          //'type': "video"
  //        },
  //   // error: function() {
  //   //   console.log("didn't work")}
  // }).done(function(data) {
  //     callback(data);
  // });
  
  $.get("https://www.googleapis.com/youtube/v3/search", 
    {'maxResults': options.max,'q': options.query,'key': options.key}, 
    function(data) {callback(data)}
  ).done(function() {
    console.log("success");
  })
}

export default searchYouTube;



// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
//
//GET https://www.googleapis.com/youtube/v3/search