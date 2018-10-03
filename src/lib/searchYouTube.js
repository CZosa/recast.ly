import exampleVideoData from "/src/data/exampleVideoData.js";

var searchYouTube = (options, callback = () => {}) => (
  
  $.get("https://www.googleapis.com/youtube/v3/search", {
    'maxResults': options.max,
    'q': options.query,
    'key': options.key, 
    part: 'snippet', 
    type: 'video', 
    videoEmbeddable: true,
  })
    .done(
      function(data) {
        callback(data);
      })
    .fail(
      function() {
        console.log('e');
      })
);

export default searchYouTube;