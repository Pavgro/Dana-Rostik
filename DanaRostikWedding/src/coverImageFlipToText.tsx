import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import front from "./images/front.jpeg";
import back from "./images/back.jpeg";

const CoverPageFlipToText = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [audio] = useState(new Audio(believer));

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-container ${isFlipped ? "flip" : ""}`}
      onClick={handleClick}
    >
      <div className="flipper">
        <Box
          className="front"
          sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundImage: `url(${front})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></Box>
        <Box
          className="back"
          sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></Box>
      </div>
    </div>
  );
};

export default CoverPageFlipToText;
