var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'JSON',
    data: {
      key: window.YOUTUBE_API_KEY,
      q: $('.form-control').val(),
      part: 'snippet',
    },
    success: function(data) {
      alert(data.items[0].title);
      console.log(data.snippet);            
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert (textStatus, + ' | ' + errorThrown);
    }
  });
};

window.searchYouTube = searchYouTube;