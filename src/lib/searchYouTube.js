var searchYouTube = (options, callback) => {

  // $.get("https://www.googleapis.com/youtube/v3/search", 
  //   {'maxResults': options.max,'q': options.query,'key': options.key, part: 'snippet'}, 
  //   function(data) {
  //     callback(data);}
  // ).done(
  //   function() {
  //     console.log(data);
  //     console.log("success");
  //   }
  // ).fail(
  //   function() {
  //     console.log('e');
  //   }
  // );
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {'maxResults': options.max,
           'q': options.query,
           'key': options.key,
           part: 'snippet'
         },
    error: function() {
      console.log("didn't work");
    }
  }).done(function(data) {
      callback(data);
      console.log(data);
  });
};

export default searchYouTube;



// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});
//
//GET https://www.googleapis.com/youtube/v3/search
