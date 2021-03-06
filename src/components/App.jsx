class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: ''
    };
  }  
  
  searchCallback (dataItems) {
    this.setState({
      videos: dataItems
    });
  }
  
  clickTitle (video) {
    this.setState({
      currentVideo: video
    });
  }  
  
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.props.searchYouTube} searchCallback={this.searchCallback.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickTitle={this.clickTitle.bind(this)} />
          </div>
        </div>
      </div>
    ); 
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
