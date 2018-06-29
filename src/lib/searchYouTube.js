var searchYouTube = (options, callback) => {
  console.log(callback)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options['query'],
      maxResults: options['max'] ? options['max'] : 5,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      key: options['key']
    },
    method: 'GET', 
    success: function(data) {
      callback(data.items);
      console.log('WE GOT VIDEOS!');
    },
    error: function() {
      console.error('YOU HAVE FAILED!');
    }
  });
};

window.searchYouTube = searchYouTube;
