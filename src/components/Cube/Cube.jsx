import "./cube.css";

const Cube = () => {
  return (
    <div className="box">
      <div className="cube-wrap">
        <div className="cube">
          <div className="front"></div>
          {/* <div className="back">Back</div> */}
          {/* <div className="top">Top</div> */}
          {/* <div className="bottom">Bottom</div> */}
          {/* <div className="left">Left</div> */}
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
