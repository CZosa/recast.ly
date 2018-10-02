import VideoList from "./VideoList.js";
import VideoListEntry from "./VideoListEntry.js";
import VideoPlayer from "./VideoPlayer.js";
import exampleVideoData from "/src/data/exampleVideoData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentList: exampleVideoData,
      currentVid: exampleVideoData[0]
    };
  }
  
  handleClick(vid) {
    this.setState({
      currentVid: vid
    });
  }
  
  render() {
  console.log(this.state.currentVid)
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid} />
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

