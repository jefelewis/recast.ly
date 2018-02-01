var VideoList = (props) => {
  return (
  ///map over 
    <div className="video-list">
      <VideoListEntry videos={exampleVideoData[0]}/>
      <VideoListEntry videos={exampleVideoData[1]}/>
      <VideoListEntry videos={exampleVideoData[2]}/>
      <VideoListEntry videos={exampleVideoData[3]}/>
      <VideoListEntry videos={exampleVideoData[4]}/>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


props = {
  videos: window,
};