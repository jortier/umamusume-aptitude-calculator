function SvgAptitudeGreen() {
  return (
    <>
      <div>
        <div className="relative w-[300px] h-[200px]">
          <div className="absolute">
            <svg height="100%">
              <polygon points="35,10 10,135 265,135 290,10" style={{ fill: `#93D52B`, stroke: `#93D52B`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute">
            <svg>
              <text
                x="50%"
                y="50%"
                alignmentBaseline="middle"
                textAnchor="middle"
                textLength="100%"
                fontSize="115px"
                fontWeight="bold"
                fontFamily="Arial, Helvetica, sans-serif"
                style={{ fill: `#fefefe`, stroke: `#6CAE05`, strokeWidth: `5`, strokeLinejoin: `round` }}
              >
                고유
              </text>
            </svg>
          </div>
          <div className="absolute w-[95px] left-[5px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#6CAE05`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[90px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#6CAE05`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
          <div className="absolute w-[95px] left-[175px] top-[100px]">
            <svg width="100%" viewBox="0 0 130 130">
              <polygon points="65,5 85,45 125,50 95,80 105,125 65,105 25,125 35,80 5,50 45,45" style={{ fill: `#fed100`, stroke: `#6CAE05`, strokeWidth: 5, strokeLinejoin: `round` }} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SvgAptitudeGreen;
