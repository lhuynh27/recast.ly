class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      query: '',
    };
  }
  
  saveQuery (input) {
    this.setState({
      query: input
    }); 
  }
  
  liveSearch (e) {
    //console.log(e.target.value);
    this.saveQuery(e.target.value);
  }
  
  searchThings(things) {
    var options = {
      query: this.state,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, this.props.searchCallback);
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.liveSearch.bind(this)} />
        <button className="btn hidden-sm-down" onClick={this.searchThings.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
