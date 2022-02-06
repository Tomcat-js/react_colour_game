import "./App.css";
import React, { useState, useEffect } from "react";

const defaultColours = [
  "#e6194b",
  "#000075",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
];

const App = () => {
  const [playerBrickColours, setPlayerBrickColours] = useState([
    "#e6194b",
    "#000075",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
  ]);
  const [computerBrickColors, setComputerBrickColors] = useState([
    "#e6194b",
    "#000075",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
  ]);

  let [currentIdx, setCurrentIdx] = useState(0);

  const targetColour = "#e6194b";

  useEffect(() => {
    const interval = setInterval(() => {
      const newCompBrickColours = [...computerBrickColors];
      let randomComputerColour =
        defaultColours[Math.floor(Math.random() * defaultColours.length)];

      // let currentIdx = 0;
      if (currentIdx > 11) {
        return () => clearInterval(interval);
      }
      console.log(currentIdx);

      newCompBrickColours[currentIdx] = randomComputerColour;
      if (randomComputerColour === targetColour) {
        setCurrentIdx((currentIdx += 1));
        setComputerBrickColors(newCompBrickColours);
      } else {
        setComputerBrickColors(newCompBrickColours);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentIdx, computerBrickColors]);
  // console.log("before");
  // useEffect(() => {
  //   console.log("in use effect");
  // }, []);
  // console.log("after");

  return (
    <>
      <div className="wrapper">
        {computerBrickColors.map((computerBrickColor, index) => {
          return <Brick colour={computerBrickColor} />;
        })}
        {playerBrickColours.map((playerBrickColor, index) => {
          return (
            <Brick
              colour={playerBrickColor}
              changeColour={() => {
                const newBrickColours = [...playerBrickColours];
                let randomPlayerColour =
                  defaultColours[
                    Math.floor(Math.random() * defaultColours.length)
                  ];
                newBrickColours[index] = randomPlayerColour;
                setPlayerBrickColours(newBrickColours);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

const Brick = (props) => {
  const { colour, changeColour } = props;
  // console.log(colour);
  return (
    <div
      key={colour}
      className="brick"
      style={{ backgroundColor: colour }}
      onClick={changeColour}
    ></div>
  );
};
