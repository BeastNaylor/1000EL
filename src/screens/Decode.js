import { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";
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
    <Container id="decode">
      <p>
        If you have been supplied a personal key, input each byte (8 digit chunk) in the forms provided and press DECODE
        to decipher your message.
      </p>
      <div id="inputs">
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
      </div>
      <Button id="decodeButton" type="button" onClick={decode} color="secondary">
        Decode
      </Button>
    </Container>
  );
};

export default Decode;
