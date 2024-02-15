const VideoTitle = ({ title, language, isAdult }) => {
  return <div>
    <h1>{title}</h1>
    <p>{language}</p>
    <div><span>Included with Prime</span><span>U/A 13+</span></div>
  </div>;
};

export default VideoTitle;
