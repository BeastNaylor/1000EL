import { useState, useEffect } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./Decode.css";

const Decode = () => {
  const key = "MOUTHLOSTTOTHETEETH.";

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
      const input = element.input.trim();
      if (input) {
        var xorResult = element.code ^ parseInt(input, 2);
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
      <Form id="inputs">
        {state.map((letterInfo) => {
          return (
            <FormGroup row key={letterInfo.index} className="decodeRow">
              <Label xs={2}>{letterInfo.letter}</Label>
              <Label xs={4}>{letterInfo.code.toString("2").padStart(8, "0")}</Label>
              <Col xs={4}>
                <Input defaultValue={letterInfo.input} onChange={handleChange} name={letterInfo.index} />
              </Col>
              <Label xs={2}>{letterInfo.result}</Label>
            </FormGroup>
          );
        })}
      </Form>
      <Button id="decodeButton" type="button" onClick={decode} color="secondary">
        Decode
      </Button>
    </Container>
  );
};

export default Decode;
