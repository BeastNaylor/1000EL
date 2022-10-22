import { useState, useEffect } from "react";
import "./Decode.css";

const Decode = () => {
  const key = "MOUTHLOSTTOTHETEETH";

  var [state, setState] = useState([]);

  useEffect(() => {
    const letterInfo = [];
    key.split("").map((letter, index) => {
      letterInfo.push({
        index: index,
        letter: letter,
        code: letter.charCodeAt(),
        input: "",
        result: "",
      });
    });
    setState(letterInfo);
  }, []);

  const decode = () => {
    var newState = state.map((element) => {
      var result = "";
      if (element.input) {
        var xorResult = element.code ^ parseInt(element.input, 2);
        if (xorResult > 31 && xorResult < 127) {
          result = String.fromCharCode(xorResult);
        } else {
          result = "Failure";
        }
      }
      return { ...element, result: result };
    });
    setState(newState);
  };

  const handleChange = (event) => {
    state[event.target.name].input = event.target.value;
  };

  return (
    <div id="decode">
      <p>This is the blurb to tell people what they are supposed to do below</p>
      {state.map((letterInfo) => {
        return (
          <div key={letterInfo.index} className="decodeRow">
            <div className="decodeLetter">{letterInfo.letter}</div>
            <div className="decodeAscii">{letterInfo.code.toString("2").padStart(8, "0")}</div>
            <div className="decodeInput">
              <input defaultValue={letterInfo.input} onChange={handleChange} name={letterInfo.index} />
            </div>
            <div className="decodeResult">{letterInfo.result}</div>
          </div>
        );
      })}
      <input type="button" value="Decode" onClick={decode} />
    </div>
  );
};

export default Decode;
