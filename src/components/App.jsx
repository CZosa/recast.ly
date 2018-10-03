import VideoList from "./VideoList.js";
import VideoListEntry from "./VideoListEntry.js";
import VideoPlayer from "./VideoPlayer.js";
import exampleVideoData from "/src/data/exampleVideoData.js";
import YOUTUBE_API_KEY from '/src/config/youtube.js';
import searchYouTube from "/src/lib/searchYouTube.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentList: [],
      currentVid: exampleVideoData[0]
    };
  }
  
  componentDidMount() {
    searchYouTube({ key: YOUTUBE_API_KEY, query: 'cats', max: 10 },
      (data) => {this.setState(
        {currentList: data.items, currentVid: data.items[0]}
      )
    });
  }
  
  handleSearch(event) {
    searchYouTube({ key: YOUTUBE_API_KEY, query: event.target.value, max: 10 },
      (data) => {this.setState(
        {currentList: data.items, currentVid: data.items[0]}
      )
    });
  }
  
  handleClick(vid) {
    this.setState({
      currentVid: vid
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.handleSearch.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid}  />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentList} passClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }  
}

//
// <VideoPlayer video={exampleVideoData} />

//ReactDOM.render(<VideoList />, document.getElementById("videolist"));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

