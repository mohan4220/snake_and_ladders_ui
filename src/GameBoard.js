import board from "./assets/board.png";
import { boardHeight, boardWidth } from "./utilities/constants";
import "./styles/globalStyles.css";
import { SpherePawn } from "./components/SpherePawn";
import { pawnAttributes } from "./utilities/constants";

const bWidth = boardWidth / 10;
const bHeight = boardHeight / 10;

export const GameBoard = () => {
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
              left={pawn.leftOffset + 9 * bWidth}
              bottom={pawn.bottomOffset}
            />
          ))}
        </div>
        <div className="game-metrics">
          you are wonderful
          <SpherePawn primary={"darkblue"} secondary="aqua" />
          <SpherePawn primary="#b71c1c" secondary="#ef9a9a" />
          <SpherePawn primary="#004d40" secondary="#80cbc4" />
          <SpherePawn primary="#ffd600" secondary="#ffff00" />
        </div>
      </div>
    </>
  );
};
