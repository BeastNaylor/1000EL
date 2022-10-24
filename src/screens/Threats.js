import "./Threats.css";
import data from "../data/threats.json";
import { useState } from "react";
import { Button, Container } from "reactstrap";
import { parseDice, flipCoin, randomNumber } from "../util/utils";

const Threats = () => {
  const [state, setState] = useState({ loaded: false, threat: null });

  const generateThreat = () => {
    //get all the random elements
    const multipleThreats = flipCoin();
    let threatCount = 1;
    let threatDie = "1d10";

    if (multipleThreats) {
      threatCount = parseDice("1d5");
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
      <p>Classification of Dangerous and Intimidating Happenstances - extended for alien forms</p>
      <Button id="button" type="button" onClick={generateThreat} color="secondary">
        Generate alien form
      </Button>
      {state.loaded && (
        <>
          <div id="threat">
            <div className="threatRow">
              <div>Habitat:</div>
              <div>{state.threat.habitat}</div>
            </div>
            <div className="threatRow">
              <div># of Threats:</div>
              <div>{state.threat.number}</div>
            </div>
            <div className="threatRow">
              <div>Combat:</div>
              <div>{`${state.threat.combat} ${state.threat.power} ${state.threat.damage}`}</div>
            </div>
            <div className="threatRow">
              <div>Instinct:</div>
              <div>{state.threat.instinct}</div>
            </div>
            <div className="threatRow">
              <div>Hits:</div>
              <div>{state.threat.hits}</div>
            </div>
            <div className="threatRow">
              <div>Consequence:</div>
              <div>{state.threat.effect}</div>
            </div>
          </div>
          <p>
            Consequences occur when an alien form makes a successful attack. 'Critical' indicates an effect that only
            occurs on a successful critical attack (or the target's critical failure, depending on circumstances).
          </p>
        </>
      )}
    </Container>
  );
};

export default Threats;
