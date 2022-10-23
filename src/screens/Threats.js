import "./Threats.css";
import data from "../data/threats.json";
import { useState } from "react";
import { Container } from "reactstrap";
import { parseDice, flipCoin, randomNumber } from "../util/utils";

const Threats = () => {
  const [state, setState] = useState({ loaded: false, threat: null });

  const generateThreat = () => {
    //get all the random elements
    const multipleThreats = flipCoin();
    let threatCount = 1;
    let threatDie = "1d10";

    if (multipleThreats) {
      threatCount = "1d5";
      threatDie = "1d5";
    }

    var combat = data.combat[parseDice(threatDie) - 1];
    var damage = data.damage[parseDice(threatDie) - 1];
    var instinct = data.instinct[parseDice(threatDie) - 1];
    var hits = data.hits[parseDice(threatDie) - 1];
    var habitat = data.habitat[randomNumber(5)];

    const firstChar = randomNumber(5);
    const secondChar = randomNumber(5);
    var power = `${habitat.initalOptions[firstChar].title} ${habitat.secondOptions[secondChar].title}`;
    var effect = `${habitat.initalOptions[firstChar].effect} ${habitat.secondOptions[secondChar].effect}`;
    setState({
      loaded: true,
      threat: { number: threatCount, combat, damage, instinct, hits, habitat: habitat.name, power, effect },
    });
  };

  return (
    <Container id="threats">
      <input type="button" value="Generate Threat" onClick={generateThreat} />
      {state.loaded && (
        <div id="threat">
          <div>Number of Threats: {state.threat.number}</div>
          <div>Combat: {state.threat.combat}</div>
          <div>Damage: {state.threat.damage}</div>
          <div>Instinct: {state.threat.instinct}</div>
          <div>Hits: {state.threat.hits}</div>
          <div>Habitat: {state.threat.habitat}</div>
          <div>Characteristic: {state.threat.power}</div>
          <div>Consequence: {state.threat.effect}</div>
        </div>
      )}
    </Container>
  );
};

export default Threats;
