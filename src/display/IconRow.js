import React from "react";

export const IconRow = ({
  x = 0,
  y = 0,
  blockSize,
  rowData,
  bowlerSizeBoost = 0,
  showControlPoints = false,
  showBlocks = false
}) => {
  const iconWidth = 210;
  // const iconHeight = 297;

  const maxScale = blockSize / iconWidth + bowlerSizeBoost;

  return (
    <g>
      {rowData.map((fraction, index) => {
        const x = index * blockSize;
        let scale = fraction * maxScale;
        if (scale < 0.02) scale = 0;

        return (
          <g
            key={index}
            transform={`translate(${x} ${y}) 
                        scale(${scale} ${scale})`}
          >
            <path d="M100 199c-28-1-66-8-89-32-7-10-1-29 8-21 6 5 15 17 20 14l2-71c0-20 5-41 17-49 9-9 28-11 43-11 16 0 26 2 44 12 9 6 16 20 17 35 3 29 1 59 4 87 11-1 24-18 30-8 6 11-3 20-15 27-11 6-53 18-81 17z" />

            {/* <path d="M90 199c-25-1-58-8-79-32-7-10-1-29 7-21 6 5 14 17 18 14l1-71c0-20 5-41 16-49 8-9 24-11 38-11s23 2 39 12c8 6 14 20 16 35 2 29 1 59 3 87 10-1 22-18 27-8 6 11-2 20-13 27-11 6-48 18-73 17z" /> */}

            {/* <path d="M105 123c-29-1-69-6-93-21-8-6-2-19 8-14 7 4 16 11 21 9 2-16 2-31 2-47 0-13 6-27 18-32 10-6 29-7 46-7 16 0 27 1 46 8 10 4 17 13 18 23 3 19 2 38 4 58 12-1 26-13 32-6 7 7-3 13-15 17-13 5-57 12-87 12z" /> */}
          </g>
        );
      })}
    </g>
  );
};
