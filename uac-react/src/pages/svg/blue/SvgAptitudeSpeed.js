function SvgAptitudeSpeed() {
  return (
    <>
      <div>
        <div className="relative w-[300px] h-[200px]">
          <div className="absolute h-[100%]">
            <svg height="100%">
              <polygon points="35,10 10,135 265,135 290,10" style={{ fill: `#40b4ec`, stroke: `#40b4ec`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[120px] h-[120px] left-[-10px] top-[5px]">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
              <text
                x="10"
                y="96"
                fontSize="120px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                스
              </text>
            </svg>
          </div>
          <div className="absolute w-[120px] h-[120px] left-[90px] top-[5px]">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
              <text
                x="10"
                y="102"
                fontSize="120px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                피
              </text>
            </svg>
          </div>
          <div className="absolute w-[120px] h-[120px] left-[180px] top-[5px]">
            <svg width="100%" height="100%" viewBox="0 0 120 120">
              <text
                x="10"
                y="100"
                fontSize="120px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#189bdb`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                드
              </text>
            </svg>
          </div>
          <div className="absolute w-[95px] left-[5px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[90px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[175px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#189bdb`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SvgAptitudeSpeed;
