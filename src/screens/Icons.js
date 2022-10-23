import "./Icons.css";
import data from "../data/semiotic.json";
import { useState } from "react";
import { Container } from "reactstrap";
import { randomNumber } from "../util/utils";

const Icons = () => {
  const [state, setState] = useState({ loaded: false, image: null });
  const generateImage = () => {
    var newImageNumber = randomNumber(50);
    var image = data.images[newImageNumber];
    setState({ loaded: true, image: image });
  };

  return (
    <Container id="semiotic">
      <input type="button" value="Generate Image" onClick={generateImage} />
      {state.loaded && (
        <div id="image">
          <img src={`${process.env.PUBLIC_URL}/images/semiotic/${state.image.file}.svg`} alt={state.image.name} />
        </div>
      )}
    </Container>
  );
};

export default Icons;
