import "./Icons.css";
import data from "../data/semiotic.json";
import { useState, React } from "react";
import { Button, Container } from "reactstrap";
import { randomNumber } from "../util/utils";
import { ReactComponent as ReactLogo } from "../images/1 flooding.svg";
import selectSemioticImage from "../util/semiotic";

const Icons = () => {
  const [state, setState] = useState({ loaded: false, icon: null });
  const generateImage = () => {
    var newImageNumber = randomNumber(50);
    var icon = selectSemioticImage(newImageNumber);
    setState({ loaded: true, icon: icon });
  };

  return (
    <Container id="semiotic">
      <Button type="button" onClick={generateImage} color="secondary">
        Scan
      </Button>
      {state.loaded && <div id="image">{state.icon}</div>}
    </Container>
  );
};

export default Icons;
