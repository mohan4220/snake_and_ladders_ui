import board from "./assets/board.png";
import { boardHeight, boardWidth } from "./utilities/constants";
import "./styles/globalStyles.css";
import { SpherePawn } from "./components/SpherePawn";
import { pawnAttributes } from "./utilities/constants";
import { useEffect, useState } from "react";

const bWidth = boardWidth / 10;
const bHeight = boardHeight / 10;

const ladders = {
  2: 23,
  4: 68,
  6: 45,
  20: 59,
  30: 95,
  50: 5,
  43: 17,
  52: 72,
  56: 8,
  57: 96,
  73: 15,
  71: 92,
  84: 58,
  87: 49,
  98: 40,
};

const locationCalc = (pos) => {
  let hOffset = Math.floor(pos / 10);
  let wOffset = 0;
  //pos = pos - 1;
  if (Math.floor(pos / 10) % 2 === 0) {
    wOffset = pos % 10;
  } else {
    wOffset = 10 - (pos % 10) - 1;
  }
  return [hOffset, wOffset];
};

export const GameBoard = () => {
  const [pos, setPos] = useState(0);

  return (
    <>
      <div className="board-container">
        <div style={{ position: "relative" }}>
          <img
            className="board"
            src={board}
            alt=""
            style={{ height: boardHeight + "rem", width: boardWidth + "rem" }}
          />
          {pawnAttributes.map((pawn) => (
            <SpherePawn
              primary={pawn.primary}
              secondary={pawn.secondary}
              positionStyling={true}
              left={pawn.leftOffset + locationCalc(pos)[1] * bWidth}
              bottom={pawn.bottomOffset + locationCalc(pos)[0] * bHeight}
            />
          ))}
        </div>
        <div className="game-metrics">
          you are wonderful {pos + 1}
          <button
            onClick={() => {
              setPos(Math.min(pos + 1, 99));
            }}
          >
            click
          </button>
          <SpherePawn primary={"darkblue"} secondary="aqua" />
          <SpherePawn primary="#b71c1c" secondary="#ef9a9a" />
          <SpherePawn primary="#004d40" secondary="#80cbc4" />
          <SpherePawn primary="#ffd600" secondary="#ffff00" />
        </div>
      </div>
    </>
  );
};
