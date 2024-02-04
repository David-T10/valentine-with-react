import { useState } from "react";
import "./App.css";

const phrases = [
  "No 😤",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Taito Please🥺",
  "sighhh 😭",
  "You have no choice 😤",
  "really?💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [text, setText] = useState("(1) New Message for Taito 📢");
  const yesButtonSize = noCount * 20 + 16;

  function handleYesClick() {
    setYesPressed(true);
    setText("Happy Valentine's Day Babe 😘");
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      <div className="title">
        <h1>{text}</h1>
      </div>
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/ZXBks2QSfdgAAAAd/cats-kittens.gif"
            alt="cats-Kissing"
          />
          <div className="text">Love from Chi x</div>
        </>
      ) : (
        <>
          <img
            className="kiss"
            src="https://media.tenor.com/cAO-Y2kE5CkAAAAi/tkthao219-bubududu.gif"
            alt="panda"
          />
          <div className="text">Will you be my valentine 💜?</div>
          <div className="both-Button">
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(248, 229, 89)",
              }}
              onClick={handleYesClick}
            >
              Yes 👀
            </button>
            <button className="NoButton" style={{}} onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
