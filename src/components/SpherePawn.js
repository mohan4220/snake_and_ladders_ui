export const SpherePawn = ({
  primary,
  secondary,
  bottom = 0,
  left = 0,
  positionStyling = false,
}) => {
  let style = {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    border: "3px solid black",
    background: `radial-gradient(circle at 65% 15%, white 1px, ${secondary} 3%, ${primary} 60%, ${secondary} 100%)`,
  };

  let styleWithPosition = {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    border: "3px solid black",
    background: `radial-gradient(circle at 65% 15%, white 1px, ${secondary} 3%, ${primary} 60%, ${secondary} 100%)`,
    position: "absolute",
    bottom: bottom + "rem",
    left: left + "rem",
  };
  return (
    <>
      <div style={positionStyling ? styleWithPosition : style}></div>
    </>
  );
};
