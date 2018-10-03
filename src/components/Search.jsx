import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from '/src/config/youtube.js';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.search}/>
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

export default Search;
// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default Search;
